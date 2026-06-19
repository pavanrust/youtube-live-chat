import { getChunks }
  from '../store/memoryStore';

export function retrieveContext(
  videoId: string,
  question: string,
  currentTime: number
) {
  const chunks = getChunks(videoId);

  return chunks
    .filter(chunk =>
      Math.abs(chunk.start - currentTime) < 120
    )
    .slice(0, 10)
    .map(chunk => chunk.text)
    .join('\n');
}