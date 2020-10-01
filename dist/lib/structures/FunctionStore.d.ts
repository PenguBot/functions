import { Store } from 'klasa';
import { FunctionsClient } from '../Client';
import { Function } from './Function';
/**
 * Stores all the functions that are part of the plugin
 * @extends external:Store
 */
export declare class FunctionStore extends Store<string, Function> {
    /**
     * @since 0.0.1
     * @param {FunctionsClient} client The Klasa client
     */
    constructor(client: FunctionsClient, coreDirectory: string);
}
