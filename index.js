const inspector = require('inspector');
const fs = require('fs');
const { version } = require('process');

const session = new inspector.Session();
session.connect();

function measureInspector(runCount) {
  return new Promise(resolve => {
    console.log(`=======iteration number ${runCount} for node ${version}========`);
    console.time('enable' + runCount);
    session.post('Profiler.enable', () => {
      console.timeEnd('enable' + runCount);
      let a = [];
      for (let i = 0; i < 1000000; i++) {
        const f = new Function("a", "b", "return a + b");
        f(i, i - 1);
        a.push(f);
      }

      console.time('start' + runCount);
      session.post('Profiler.start', () => {
        console.timeEnd('start' + runCount);
        console.time('stop' + runCount);
        session.post('Profiler.stop', (err, { profile }) => {
          console.timeEnd('stop' + runCount);
          if (!err) {
            fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile));
          }
          resolve();
        });
      });
    });
  });
}

(async () => {
  let count = 0;
  while (count++ < 10) {
    await measureInspector(count);
  }
})();
