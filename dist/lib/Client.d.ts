import { Client, KlasaClientOptions } from "klasa";
import { FunctionStore } from "./structures/FunctionStore";
/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
export declare class FunctionsClient extends Client {
    /**
     * @typedef {external:KlasaClientOptions} FunctionsClientOptions
     * @property {FunctionsClientPieceDefaults} [pieceDefaults={}] Overrides the defaults for all pieces
     * @property {AliasFunctionsOptions} [aliasFunctions={}]
     */
    /**
     * @typedef {Object} AliasFunctionsOptions
     * @property {boolean} [enabled=false]
     * @property {string} [returnMethod=""]
     * @property {string} [prefix="functions"]
     */
    /**
     * @typedef {external:KlasaPieceDefaults} FunctionsClientPieceDefaults
     * @property {FunctionsOptions} [functions={}]
     */
    /**
     * Constructs the functions client.
     * @since 0.0.1
     * @param {FunctionsClientOptions} [options] The config to pass to the new client
     */
    constructor(options?: KlasaClientOptions);
}
declare module "klasa" {
    interface KlasaClientOptions {
        aliasFunctions?: {
            enabled?: boolean;
            returnMethod?: string;
            prefix?: string;
        };
    }
}
declare module "discord.js" {
    interface Client {
        functions: FunctionStore;
    }
}
