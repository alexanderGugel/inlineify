var staticModule = require('static-module');
var through = require('through2');
var fs = require('fs');
var path = require('path');
var resolve = require('resolve');

module.exports = function (file, opts) {
    if (!/\.js$/.test(file)) return through();

    var basedir = path.dirname(file);

    var sm = staticModule(
        { inlineify: inlineify },
        opts
    );

    function inlineify(file) {
        file = resolve.sync(file, { basedir: basedir });
        var stream = fs
            .createReadStream(file, { encoding: 'utf8' })
            .pipe(through(write, end));

        function write (buf, enc, next) {
            this.push(buf);
            next();
        }

        function end (next) {
            this.push(null);
            sm.emit('file', file);
            next();
        }

        return stream;
    }

    return sm;
};
