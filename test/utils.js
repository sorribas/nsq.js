
/**
 * Module dependencies.
 */

var request = require('superagent');

/**
 * Delete `topic`.
 *
 * @param {String} topic
 * @param {Function} fn
 */

exports.deleteTopic = function(topic, fn){
  request
  .get('http://127.0.0.1:4151/delete_topic')
  .query({ topic: topic })
  .end(function(err, res){
    if (err) return fn(err);
    if (res.error) return fn(res.error);
    fn();
  });
};