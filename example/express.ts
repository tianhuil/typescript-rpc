/* tslint:disable:no-console */

import express from 'express'

import { registerHandler } from '../src/handler/express'
import { RPCImpl } from './implementation'
import { IRPC } from './interface'

const implementation = new RPCImpl()

const app: express.Application = express()
const port = 4000

app.get('/', (_, res) => res.send('Hello World!!'))
registerHandler<IRPC>(app, implementation)

app.listen(port, () => console.log(`Express app listening on port ${port}!`))