import 'reflect-metadata';
import * as errors from './errors';
import Result from './helpers/Result';
import Client, { IClientConfig } from './Client';
export declare const makeClient: (config?: IClientConfig) => Client;
export { errors, Result };
