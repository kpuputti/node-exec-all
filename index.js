var Q = require('q'),
    exec = require('child_process').exec;

function execall(commands, callback) {
    var promises, combined;

    promises = commands.map(function (command) {
        return Q.nfcall(exec, command);
    });
    combined = Q.all(promises);

    // Provide support for a traditional callback function
    if (typeof callback === 'function') {
        combined.then(function (outputs) {
            callback(null, outputs);
        }, function (err) {
            callback(err);
        }).done();
    }

    return combined;
}

module.exports = execall;
