// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY; // Make sure this is set in your .env file
const genAI = new GoogleGenerativeAI(API_KEY);

export default genAI;
