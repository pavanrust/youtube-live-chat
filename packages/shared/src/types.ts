export interface TranscriptChunk {
  id: string;
  start: number;
  duration: number;
  text: string;
}

export interface AskRequest {
  videoId: string;
  question: string;
  currentTime: number;
}
