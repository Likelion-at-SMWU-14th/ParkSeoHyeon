import { messages } from "./data";

export function getMessages() {
  return messages;
}

export function addMessages(name, content) {
  const message = { id: Date.now() + Math.random(), name, content };
  messages.unshift(message);
  return message;
}
