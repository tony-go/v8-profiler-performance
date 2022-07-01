const inspector = require('inspector');

const session = new inspector.Session();
session.connect();

console.time('enable')
session.post('Profiler.enable', () => {
  console.timeEnd('enable')
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    const f = new Function("a", "b", "return a + b");
    f(i, i - 1);
    a.push(f);
  }

  console.time('start')
  session.post('Profiler.start', () => {
    console.timeEnd('start')
    console.time('stop')
    session.post('Profiler.stop', (err, { profile }) => {
      console.timeEnd('stop')
    });
  });
});
