// middleware/validate.js

const validate = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ errors });
    }
    req.validatedData = value;
    next();
  };
  
  module.exports = validate;
  