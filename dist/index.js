"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionStore = exports.Function = exports.Client = void 0;
// Copyright (c) 2018-2019 KlasaCommunityPlugins. All rights reserved. MIT license.
const klasa_1 = require("klasa");
const Client_1 = require("./lib/Client");
Object.defineProperty(exports, "Client", { enumerable: true, get: function () { return Client_1.FunctionsClient; } });
var Function_1 = require("./lib/structures/Function");
Object.defineProperty(exports, "Function", { enumerable: true, get: function () { return Function_1.Function; } });
var FunctionStore_1 = require("./lib/structures/FunctionStore");
Object.defineProperty(exports, "FunctionStore", { enumerable: true, get: function () { return FunctionStore_1.FunctionStore; } });
// @ts-ignore
// eslint-disable-next-line node/exports-style
exports[klasa_1.Client.plugin] = Client_1.FunctionsClient[klasa_1.Client.plugin];
/**
 * @external KlasaClient
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/KlasaClient}
 */
/**
 * @external Piece
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Piece}
 */
/**
 * @external Store
 * @see {@link https://klasa.js.org/#/docs/klasa/master/class/Store}
 */
/**
 * @external KlasaClientOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaClientOptions}
 */
/**
 * @external KlasaPieceDefaults
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/KlasaPieceDefaults}
 */
/**
 * @external PieceOptions
 * @see {@link https://klasa.js.org/#/docs/klasa/master/typedef/PieceOptions}
 */
