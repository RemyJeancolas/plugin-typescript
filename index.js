module.exports = {

  loadPlugin: function() {

    module.exports = Object.assign(module.exports, {

      'migrator:migration:hook:require': function() {

        /**
          * Always delay requires, otherwise your plugin will cause trouble
          * with db-migrates performance and generates issues to your users.
          */
        var typescriptModule = require('typescript');
        if (typescriptModule && typescriptModule.register) {
          typescriptModule.register();
        }

        /**
          * Return value of this hook can be both, pure value or a promise.
          */
        return {
          extensions: 'ts'
        };
      }
    });

    delete module.exports.loadPlugin;
  },
  name: 'typescript',
  hooks: [
    'migrator:migration:hook:require'
  ]
};
