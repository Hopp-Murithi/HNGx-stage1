"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = void 0;
const moment_1 = __importDefault(require("moment"));
const info = (req, res) => {
    try {
        const slackName = req.query.slack_name;
        const track = req.query.track;
        const currentDay = (0, moment_1.default)().format('dddd');
        const utcTime = (0, moment_1.default)().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
        const githubFileUrl = 'https://github.com/Hopp-Murithi/HNGx-stage1/blob/main/src/controllers/Info.ts';
        const githubRepoUrl = 'https://github.com/Hopp-Murithi/HNGx-stage1.git';
        const responseData = {
            slack_name: slackName,
            current_day: currentDay,
            utc_time: utcTime,
            track: track,
            github_file_url: githubFileUrl,
            github_repo_url: githubRepoUrl,
            status_code: 200,
        };
        res.status(200).json(responseData);
    }
    catch (error) {
        console.log("There was an error", error);
    }
};
exports.info = info;
//# sourceMappingURL=Info.js.map