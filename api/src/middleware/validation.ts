import { Schema } from "joi";

const validateRequest = (
  schema: Schema,
  property: "body" | "query" | "params"
) => {
  return (request, response, next) => {
    const { error } = schema.validate(request[property]);
    const valid = error == null;
    if (valid) {
      next();
    } else {
      const { details } = error;
      const message = details.map((i) => i.message).join(",");
      console.log("error", message);
      response.status(422).json({ error: message });
    }
  };
};

export default validateRequest;
