"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionsClient = void 0;
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const klasa_1 = require("klasa");
const path_1 = require("path");
const FunctionStore_1 = require("./structures/FunctionStore");
const CONSTANTS_1 = require("./util/CONSTANTS");
/**
 * The client for handling everything. See {@tutorial GettingStarted} for more information how to get started using this class.
 * @extends external:KlasaClient
 * @tutorial GettingStarted
 */
class FunctionsClient extends klasa_1.Client {
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
    constructor(options) {
        super(options);
        // @ts-ignore
        this.constructor[klasa_1.Client.plugin].call(this);
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static [klasa_1.Client.plugin]() {
        klasa_1.util.mergeDefault(CONSTANTS_1.OPTIONS, this.options);
        const coreDirectory = path_1.join(__dirname, "..", "/");
        /**
         * The cache where functions are stored
         * @since 0.0.1
         * @type {FunctionStore}
         * @name FunctionsClient#functions
         */
        this.functions = new FunctionStore_1.FunctionStore(this, coreDirectory);
        this.registerStore(this.functions);
        const { options } = this;
        const { returnMethod } = options.aliasFunctions;
        if (options.aliasFunctions.enabled && options.aliasFunctions.prefix) {
            if (options.aliasFunctions.prefix === "functions")
                throw new Error(`[Functions-Plugin] "functions" is not a valid alias prefix option!`);
            // @ts-ignore
            this[options.aliasFunctions.prefix] = new Proxy(this.functions, {
                get(target, prop) {
                    if (prop === Symbol.iterator)
                        return target[Symbol.iterator].bind(target);
                    return target.has(prop) ?
                        returnMethod ?
                            target.get(prop)[returnMethod] :
                            target.get(prop) :
                        prop in target ?
                            // @ts-ignore
                            target[prop] :
                            "Unknown Function";
                }
            });
        }
    }
}
exports.FunctionsClient = FunctionsClient;
