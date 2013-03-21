var execall = require('./'),
    start = Date.now();

execall([
    'sleep 2; echo 1 done',
    'sleep 2; echo 2 done',
    'sleep 2; echo 3 done',
    'sleep 2; echo 4 done',
    'sleep 2; echo 5 done',
    'sleep 2; echo 6 done',
    'sleep 2; echo 7 done',
    'sleep 2; echo 8 done',
    'sleep 2; echo 9 done',
    'sleep 2; echo 10 done'
]).then(function success(outputs) {
    var time, stdout;

    time = (Date.now() - start) / 1000;
    stdout = outputs.map(function (out) {
        return out[0];
    }).join('');

    console.log('all commands executed');
    console.log('combined output:');
    console.log(stdout);
    console.log('total time: ' + time + 's');

}, function failure(err) {
    console.log('failed executing commands: ' + err);
}).done();
