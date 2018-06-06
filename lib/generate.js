var Promise = require("bluebird"),
    fs = Promise.promisifyAll(require('fs-extra'));
var root = __dirname.replace(/lib/,'');
function generate(project) {
    return fs.copyAsync(root + 'template', project).then(function (err) {
        return err ? console.error(err) : console.log('gennerate project success')
    })
}

module.exports = generate;