const inspector = require('inspector');
const { spawnSync } = require('child_process');
const path = require('path');
const { version } = require('process');

const session = new inspector.Session();
session.connect();

function measureInspector(runCount) {
  console.log(`======= iteration number ${runCount} for node ${version} ========`);
  spawnSync(
    process.execPath,
    [path.join(__dirname, './worker.js')],
    { stdio: 'inherit' }
  )
}

(async () => {
  let count = 0;
  while (count++ < 10) {
    measureInspector(count);
    global.gc()
  }
})();
