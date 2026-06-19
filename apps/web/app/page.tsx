'use client';

import { useState } from 'react';

export default function Home() {

  const [url, setUrl] =
    useState('');

  const [question, setQuestion] =
    useState('');

  const [answer, setAnswer] =
    useState('');

  async function ask() {

    const response =
      await fetch(
        'http://localhost:3001/ask',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json'
          },
          body: JSON.stringify({
            videoId: 'VIDEO_ID',
            currentTime: 0,
            question
          })
        }
      );

    const data =
      await response.json();

    setAnswer(data.answer);
  }

  return (
    <main>
      <h1>
        Talk To YouTube Video
      </h1>

      <input
        value={url}
        onChange={e =>
          setUrl(e.target.value)
        }
      />

      <textarea
        value={question}
        onChange={e =>
          setQuestion(e.target.value)
        }
      />

      <button onClick={ask}>
        Ask
      </button>

      <pre>{answer}</pre>
    </main>
  );
}