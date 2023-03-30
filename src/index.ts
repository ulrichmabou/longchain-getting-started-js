import * as dotenv from "dotenv";
import { OpenAI } from "langchain/llms";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

dotenv.config();

// const model = new OpenAI({
//   modelName: "gpt-3.5-turbo",
//   openAIApiKey: process.env.OPENAI_API_KEY,
// });

// Simple prediction from a language model
// const res = await model.call(
//   "What would be a good name for an FPL (Fantasy Premier League) assistant app built with GPT?"
// );

// Prompt template example
// const template = "What is a good name for a company that makes {product}?";
// const prompt = new PromptTemplate({
//   template: template,
//   inputVariables: ["product"],
// });
// const res = await prompt.format({ product: "colorful socks" });

// console.log(res);

// LLMChain: PromptTemplate + LLM

const model = new OpenAI({ temperature: 0.9 });
const template = "What is a good name for a company that makes {product}?";
const prompt = new PromptTemplate({
  template: template,
  inputVariables: ["product"],
});


const chain = new LLMChain({ llm: model, prompt: prompt });

const res = await chain.call({ product: "colorful socks" });

console.log(res);

