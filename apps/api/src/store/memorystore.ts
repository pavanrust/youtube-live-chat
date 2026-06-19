import { TranscriptChunk } from '../../../../packages/shared/src/types';

const videos = new Map<string, TranscriptChunk[]>();

export function saveChunks(
  videoId: string,
  chunks: TranscriptChunk[]
): void {
  videos.set(videoId, chunks);
}

export function getChunks(
  videoId: string
): TranscriptChunk[] {
  return videos.get(videoId) || [];
}
