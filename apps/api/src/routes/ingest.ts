import { FastifyInstance } from 'fastify';
import { fetchTranscript }
  from '../services/transcriptService';
import { saveChunks }
  from '../store/memoryStore';

export async function ingestRoute(
  fastify: FastifyInstance
) {
  fastify.post('/ingest', async request => {

    const { videoId } =
      request.body as { videoId: string };

    const chunks =
      await fetchTranscript(videoId);

    saveChunks(videoId, chunks);

    return {
      chunks: chunks.length
    };
  });
}