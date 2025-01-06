# Vercel AI SDK Integration for Solana Agent Kit

This project integrates the Vercel AI SDK with Solana actions like fetching token prices and sending airdrops. It leverages the AI capabilities to automate various tasks on the Solana blockchain.

## Features
- Fetch token prices from Solana.
- Send compressed airdrops to Solana wallet addresses.

## Usage
1. Clone the repository and install dependencies.
2. Use the `solanaVercelAIIntegration` function to interact with Solana through the Vercel AI SDK.

Example:
```ts
import { solanaVercelAIIntegration } from './src/vercel-ai/vercelAiIntegration';

const result = await solanaVercelAIIntegration('yourModel', 'What is the price of SOL?');
console.log(result);
