import * as dotenv from "dotenv";
// import { OpenAI } from "langchain";
// import { PromptTemplate } from "langchain/prompts";
// import { LLMChain } from "langchain/chains";
// import { initializeAgentExecutor } from "langchain/agents";
// import { SerpAPI, Calculator } from "langchain/tools";
import { OpenAI } from "langchain/llms";
import { BufferMemory } from "langchain/memory";
import { ConversationChain } from "langchain/chains";
import { CallbackManager } from "langchain/callbacks";

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

// const model = new OpenAI({ temperature: 0.9 });
// const template = "What is a good name for a company that makes {product}?";
// const prompt = new PromptTemplate({
//   template: template,
//   inputVariables: ["product"],
// });


// const chain = new LLMChain({ llm: model, prompt: prompt });

// const res = await chain.call({ product: "colorful socks" });

// console.log(res);

// Agents: Dynamically Run Chains Based on User Input

// const model = new OpenAI({ temperature: 0 });
// const tools = [new SerpAPI(), new Calculator()];

// const executor = await initializeAgentExecutor(
//   tools,
//   model,
//   "zero-shot-react-description"
// );
// console.log("Loaded agent.");

// const input =
//   "Who is the current FIFA president?" +
//   " What is his current age multiplied by 2?";
// console.log(`Executing with input "${input}"...`);

// const result = await executor.call({ input });

// console.log(`Got output ${result.output}`);

// Memory: Add State to Chains and Agents

// const model = new OpenAI({});
// const memory = new BufferMemory();
// const chain = new ConversationChain({ llm: model, memory: memory });
// const res1 = await chain.call({ input: "Hi! I'm Ulrich." });
// console.log(res1);

// const res2 = await chain.call({ input: "What's my name?" });
// console.log(res2);

// Streaming 

const chat = new OpenAI({
  streaming: true,
  callbackManager: CallbackManager.fromHandlers({
    async handleLLMNewToken(token: string) {
      console.log(token);
    },
  }),
});

const response = await chat.call("Write me a song about sparkling water.");
console.log(response);