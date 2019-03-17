const Joi = require("joi");

module.exports = {
  validteBody: (schema, name) => {
    return (req, res, next) => {
      const result = Joi.validate(req.body, schema);

      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["body"]) {
          req.value["body"] = {};
        }

        req.value["body"] = result.value;
        next();
      }
    };
  },
  validteParam: (schema, name) => {
    return (req, res, next) => {
      const result = Joi.validate({ param: req["params"][name] }, schema);
      if (result.error) {
        return res.status(400).json(result.error);
      } else {
        if (!req.value) {
          req.value = {};
        }

        if (!req.value["params"]) {
          req.value["params"] = {};
        }

        req.value["params"][name] = result.value.param;
        next();
      }
    };
  },
  schemas: {
    customSchema: Joi.object().keys({
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      email: Joi.string()
        .email()
        .required(),
      ip: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required()
    }),
    customOptionalSchema: Joi.object().keys({
      firstName: Joi.string(),
      lastName: Joi.string(),
      email: Joi.string().email(),
      ip: Joi.string(),
      latitude: Joi.number(),
      longitude: Joi.number()
    }),
    idSchema: Joi.object().keys({
      param: Joi.string().required()
    })
  }
};
