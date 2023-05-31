import useCasesRouter from "./app/routes/useCasesRouter";
import viewRouter from "./app/routes/viewRouter";
import expressLayouts from "express-ejs-layouts";
import methodOverride from 'method-override';
import bodyParser from "body-parser";
import express from "express";

const app = express()


app.use(express.json())
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method', { methods: ['GET', 'POST'] }));

app.use(useCasesRouter)
app.use(viewRouter)

app.set('view engine', 'ejs')
app.set('views', './src/app/views')

export const timeZone = 'America/Sao_Paulo';

export default app