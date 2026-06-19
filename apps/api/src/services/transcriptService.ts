import { YoutubeTranscript }
  from 'youtube-transcript';

export async function fetchTranscript(
  videoId: string
) {
  const transcript =
    await YoutubeTranscript.fetchTranscript(videoId);

  return transcript.map((item, index) => ({
    id: String(index),
    start: item.offset,
    duration: item.duration,
    text: item.text
  }));
}