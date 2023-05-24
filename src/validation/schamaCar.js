const joi = require("joi");

const schemaCar = joi.object({
  brand: joi
    .string()
    .pattern(/^[\p{L} ]+$/u)
    .min(3)
    .max(40)
    .trim()
    .normalize()
    .required()
    .required()
    .messages({
      "any.required": "O campo 'marca' é obrigatório!",
      "string.empty": "O campo 'marca' é obrigatório!",
      "string.min": "O campo 'marca' deve ter pelo menos {#limit} caracteres",
      "string.max": "O campo 'marca' deve ter no máximo {#limit} caracteres",
      "string.pattern.base": "O campo nome deve conter apenas letras",
    }),

  model: joi
    .string()
    .pattern(/^[\p{L} ]+$/u)
    .min(3)
    .max(40)
    .trim()
    .normalize()
    .required()
    .required()
    .messages({
      "any.required": "O campo 'modelo' é obrigatório!",
      "string.empty": "O campo 'modelo' é obrigatório!",
      "string.min": "O campo 'modelo' deve ter pelo menos {#limit} caracteres",
      "string.max": "O campo 'modelo' deve ter no máximo {#limit} caracteres",
      "string.pattern.base": "O campo 'modelo' deve conter apenas letras",
    }),

  year_car: joi
    .string()
    .pattern(/^\d+$/)
    .min(3)
    .max(40)
    .trim()
    .normalize()
    .required()
    .messages({
      "any.required": "O campo 'ano do carro' é obrigatório!",
      "string.empty": "O campo 'ano do carro' é obrigatório!",
      "string.min":
        "O campo 'ano do carro' deve ter pelo menos {#limit} caracteres",
      "string.max":
        "O campo 'ano do carro' deve ter no máximo {#limit} caracteres",
      "string.pattern.base":
        "O campo 'ano do carro' deve conter apenas números",
    }),

  color: joi
    .string()
    .pattern(/^[\p{L} ]+$/u)
    .min(3)
    .max(40)
    .trim()
    .normalize()
    .required()
    .required()
    .messages({
      "any.required": "O campo 'cor' é obrigatório!",
      "string.empty": "O campo 'cor' é obrigatório!",
      "string.min": "O campo 'cor' deve ter pelo menos {#limit} caracteres",
      "string.max": "O campo 'cor' deve ter no máximo {#limit} caracteres",
      "string.pattern.base": "O campo 'cor' deve conter apenas letras",
    }),

  value_car: joi
    .string()
    .pattern(/^\d+$/)
    .min(3)
    .max(40)
    .trim()
    .normalize()
    .required()
    .messages({
      "any.required": "O campo 'valor do carro' é obrigatório!",
      "string.empty": "O campo 'valor do carro' é obrigatório!",
      "string.min":
        "O campo 'valor do carro' deve ter pelo menos {#limit} caracteres",
      "string.max":
        "O campo 'valor do carro' deve ter no máximo {#limit} caracteres",
      "string.pattern.base":
        "O campo 'valor do carro' deve conter apenas números",
    }),
});

module.exports = schemaCar;
