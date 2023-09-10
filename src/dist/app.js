"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const info_route_1 = require("./routes/info.route");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.urlencoded({ extended: true }));
/**
 * stageOne base url
 */
/**
 * mount routes
 */
exports.app.use("/", info_route_1.user);
//# sourceMappingURL=app.js.map