import { Configuration, OpenAIApi } from "openai";

const generateImages = async (request, response) => {
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const openAiResponse = await openai.createImage({
      prompt: request.body.prompt,
      n: request.body.number ?? 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    return response.status(201).send(openAiResponse.data.data);
  } catch (error) {
    console.log(error);
    return response.sendStatus(500);
  }
};

export default { generateImages };
