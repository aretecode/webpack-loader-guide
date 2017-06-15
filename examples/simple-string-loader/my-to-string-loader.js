var loaderUtils = require('loader-utils');

module.exports = function(content) {
  this.cacheable();
  var cb = this.async();

  // Produces the following URL:
  // !!/Users/marek/Projects/displays/node_modules/css-loader/index.js!/Users/marek/Projects/displays/node_modules/postcss-loader/index.js??ref--3-3!/Users/marek/Projects/displays/node_modules/sass-loader/lib/loader.js??ref--3-4!/Users/marek/Projects/display-wall/src/scss/main.scss
  var url = '!!' + loaderUtils.getRemainingRequest(this);

  var self = this;

  this.loadModule(url, function(err, source, map, module) {
    if (err) {
      return cb(err);
    }

    require('fliplog')
      .verbose(100)
      .data({
        keys: Object.keys(self),
        content,
        exec: self.exec(content, self.resource),
        context: self.context,
        resourcePath: self.resourcePath,
        resource: self.resource,
        remainingReq: self.remainingRequest,
        data: self.data,
        prev: self.previousRequest,
        cur: self.currentRequest,
        loaders: self.loaders,
        resource: self.resource,
        str: loaderUtils.stringifyRequest(self, self.resourcePath),
      })
      .exit();

    // How to access the evaluated module here to read CSS loader's output?

    // This throws "module not found" errors with relative paths in it. I'm npm linking shared dependency, may that be the problem?
    // console.log(self.exec(source, url))

    // Need to return raw CSS here from the source
    cb(null, 'not implemented');
  });
};
