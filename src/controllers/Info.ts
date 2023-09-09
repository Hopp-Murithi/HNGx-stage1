import {Request,Response} from 'express';
import moment from 'moment';

export const info = (req:Request,res:Response)=>{
    const slackName = req.query.slack_name as string;
    const track = req.query.track as string;
    const currentDay = moment().format('dddd');
    const utcTime = moment().utc().format('YYYY-MM-DDTHH:mm:ss[Z]');
    const githubFileUrl = 'https://github.com/username/repo/blob/main/file_name.ext';
    const githubRepoUrl = 'https://github.com/username/repo';
  
    const responseData = {
      slack_name: slackName,
      current_day: currentDay,
      utc_time: utcTime,
      track: track,
      github_file_url: githubFileUrl,
      github_repo_url: githubRepoUrl,
      status_code: 200,
    };
  
    res.status(200).json(responseData)
};