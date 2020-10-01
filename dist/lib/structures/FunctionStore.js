"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionStore = void 0;
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const klasa_1 = require("klasa");
const Function_1 = require("./Function");
/**
 * Stores all the functions that are part of the plugin
 * @extends external:Store
 */
class FunctionStore extends klasa_1.Store {
    /**
     * @since 0.0.1
     * @param {FunctionsClient} client The Klasa client
     */
    constructor(client, coreDirectory) {
        super(client, 'functions', Function_1.Function);
        this.registerCoreDirectory(coreDirectory);
    }
}
exports.FunctionStore = FunctionStore;
