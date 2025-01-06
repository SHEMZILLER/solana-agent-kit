import { solanaVercelAIIntegration } from '../vercel-ai/vercelAiIntegration';

describe('Vercel AI Integration', () => {
  it('should fetch the token price', async () => {
    const result = await solanaVercelAIIntegration('yourModel', 'What is the price of SOL?');
    expect(result).toHaveProperty('tools.getTokenPrice.price');
  });

  it('should handle airdrop execution', async () => {
    const result = await solanaVercelAIIntegration('yourModel', 'Send an airdrop of 10 SOL to wallet address XYZ');
    expect(result).toHaveProperty('tools.sendAirdrop.status', 'Success');
  });
});
