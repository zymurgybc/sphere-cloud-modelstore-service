var Joi = require('joi');

var VALID_MODELS = ['room', 'thing', 'device', 'channel', 'site'];

exports.ObjectId = Joi.string().regex(/^[a-zA-Z0-9\-_]+$/);
exports.UserRecord = Joi.object().keys({id: exports.ObjectId}).unknown(true);
exports.ModelName = Joi.string().valid(VALID_MODELS);
exports.MinimalObject = Joi.object().keys({ id: exports.ObjectId }).unknown(true);
