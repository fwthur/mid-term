import Joi from "joi";

const schema = {
  createComment: Joi.object().keys({
    comment: Joi.string().min(1).max(255).required(),
    avatar: Joi.string().uri().required(),
    username: Joi.string().min(1).max(24).required(),
  }),
};

export default schema;
