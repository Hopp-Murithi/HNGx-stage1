"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = require("express");
const Info_1 = require("../controllers/Info");
const user = (0, express_1.Router)();
exports.user = user;
const baseURL = "/api";
/**
 * Get user info route
 */
user.get(baseURL, Info_1.info);
//# sourceMappingURL=info.route.js.map