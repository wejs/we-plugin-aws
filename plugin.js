/**
 * Main AWS connector plugin file
 *
 * see http://wejs.org/docs/we/plugin
 */
const AWS = require('aws-sdk');

module.exports = function loadPlugin(projectPath, Plugin) {
  const plugin = new Plugin(__dirname);

  plugin.AWS = AWS;

  // set plugin configs
  plugin.setConfigs({
    apiKeys: {
      AWS: {
        region: 'regionName',
        accessKeyId: 'yourclientid',
        secretAccessKey: 'yoursecretkey',
      }
    }
  });

  /**
   * Plugin fast loader
   *
   * Defined for faster project bootstrap
   *
   * @param  {Object}   we
   * @param  {Function} done callback
   */
  plugin.fastLoader = function fastLoader(we, done) {
    done();
  };

  /**
   * Configure AWS instance after load all plugins
   */
  plugin.events.on('we:after:load:plugins', (we)=> {
    AWS.config.update(we.config.apiKeys.AWS);
  });

  return plugin;
};