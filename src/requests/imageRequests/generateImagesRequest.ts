import Joi from "joi";

const generateImages = Joi.object().keys({
  prompt: Joi.string().required(),
  number: Joi.number().optional(),
});

export default generateImages;
