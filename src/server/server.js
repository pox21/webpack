import express from 'express'
import ReactDOM from 'react-dom/server'
import { Header } from '../shared/Header.jsx';
import {indexTemplate} from './indexTemplate'
const app = express();

app.use('/static', express.static('./dist/client'))
app.get('/',(req,res)=>{
  res.send(indexTemplate(ReactDOM.renderToString(Header())))
})

app.listen(3010,()=>{
  console.log("server started on port http://localhost:3010")
})