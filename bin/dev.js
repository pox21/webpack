const webpack = require('webpack')
const [webpackClientConfig, webpackServerConfig] = require('../webpack.config')
const nodemon = require('nodemon')
const path = require('path')
const compiler = webpack(webpackServerConfig)
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const hmrServer = express();
const clientCompiler = webpack(webpackClientConfig);

hmrServer.use(webpackDevMiddleware(clientCompiler, {
  publicPath: webpackClientConfig.output.publicPath,
  serverSideRender: true,
  writeToDisk: true,
  stats: 'errors-only',
}));

hmrServer.use(webpackHotMiddleware(clientCompiler, {
  path: '/static/__webpack_hmr'
}));

hmrServer.listen(3011, () => {
  console.log('HMR server succesful started')
});


compiler.run((err) => {
  if (err) {
    console.log(`compilation failed:`, err)
  }

  compiler.watch({}, (err) => {
    if(err) {
      console.log(`compilation failed:`, err)
    }
    console.log('Compilation was successfully')
  });

  nodemon({
    script: path.resolve(__dirname, '../dist/server/server.js'),
    watch: [
      path.resolve(__dirname, '../dist/server'),
      path.resolve(__dirname, '../dist/client')
    ]
  })
})