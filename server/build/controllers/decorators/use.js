"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = use;
require("reflect-metadata");
const MetaDataKeys_1 = require("./MetaDataKeys");
function use(middleware) {
    return function (target, key, desc) {
        const middlewares = Reflect.getMetadata(MetaDataKeys_1.MetadataKeys.middleware, target, key) || [];
        Reflect.defineMetadata(MetaDataKeys_1.MetadataKeys.middleware, [...middlewares, middleware], target, key);
    };
}
