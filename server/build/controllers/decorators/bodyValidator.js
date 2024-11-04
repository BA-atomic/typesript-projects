"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyValidator = bodyValidator;
require("reflect-metadata");
const MetaDataKeys_1 = require("./MetaDataKeys");
function bodyValidator(...keys) {
    return function (target, key, desc) {
        Reflect.defineMetadata(MetaDataKeys_1.MetadataKeys.validator, keys, target, key);
    };
}
