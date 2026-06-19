import { FastifyInstance } from 'fastify';
import { retrieveContext }
  from '../services/ragService';
import { answerQuestion }
  from '../services/llmService';

export async function askRoute(
  fastify: FastifyInstance
) {
  fastify.post('/ask', async request => {

    const {
      videoId,
      question,
      currentTime
    } = request.body as any;

    const context =
      retrieveContext(
        videoId,
        question,
        currentTime
      );

    const answer =
      await answerQuestion(
        question,
        context
      );

    return {
      answer
    };
  });
}