const fs = require('fs');

const APP_PATH_ENV = './env';
const APP_SCRIPT_PATH = './boot/boot.app.js';
const APP_NAME = 'bpolierplate-express';
const APP_WATCH = true;

const envs = {
  env: {},
  env_development: {},
  env_staging: {},
  env_production: {},
};


if (fs.existsSync(`${APP_PATH_ENV}/env.js`)) {
  envs.env = require(`${APP_PATH_ENV}/env.js`);
}

if (fs.existsSync(`${APP_PATH_ENV}/env.development.js`)) {
  envs.env_development = require(`${APP_PATH_ENV}/env.development.js`);
}

if (fs.existsSync(`${APP_PATH_ENV}/env.staging.js`)) {
  envs.env_staging = require(`${APP_PATH_ENV}/env.staging`);
}

if (fs.existsSync(`${APP_PATH_ENV}/env.production.js`)) {
  envs.env_production = require(`${APP_PATH_ENV}/env.production`);
}

module.exports = {
  apps: [{
    name: APP_NAME,
    script: APP_SCRIPT_PATH,
    args: [],
    watch: APP_WATCH,
    ignore_watch: [
      'node_modules',
      'logs',
      '.git',
      '.idea',
      '.pm2',
      'temp',
    ],
    node_args: '',
    merge_logs: true,
    cwd: './',
    ...envs,
  }],
};
