#!/usr/bin/env node
const { exec } = require("child_process");

exec(
  "npm version prerelease --preid=$(git rev-parse --abbrev-ref HEAD)",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  }
);
