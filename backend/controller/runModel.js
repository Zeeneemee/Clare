const { spawn } = require('node:child_process');
const ls = spawn('ls', ['-lh', '/usr']);

