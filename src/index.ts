import 'reflect-metadata'
import * as errors from './errors'
import Result from './helpers/Result'
import Client, { IClientConfig } from './Client'

const makeClient = (config: IClientConfig = {}) => new Client(config)

export { makeClient, errors, Result }
