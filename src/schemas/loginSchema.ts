import Joi from 'joi';

export const loginSchema = Joi.object({
  username: Joi.string().required().messages({
    'string.base': 'El nombre de usuario debe ser texto.',
    'string.empty': 'El nombre de usuario es obligatorio.',
    'any.required': 'El nombre de usuario es obligatorio.',
  }),
  password: Joi.string().required().messages({
    'string.base': 'La contraseña debe ser texto.',
    'string.empty': 'La contraseña es obligatoria.',
    'any.required': 'La contraseña es obligatoria.',
  }),
});
