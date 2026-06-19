# YouTube Live Chat

Talk to a YouTube video as if you were watching it live.

YouTube Live Chat is an AI-powered application that transforms passive video consumption into an interactive learning experience. Users can pause a video at any moment, ask questions about the content being discussed, receive contextual answers grounded in the video transcript, and then resume playback.

The long-term goal is to create an AI video tutor capable of understanding video context, maintaining conversational memory, and synchronizing responses with video playback in real time.

---

## Features

### Current MVP

* Load a YouTube video
* Fetch and process video transcripts
* Store transcript chunks for retrieval
* Ask questions about video content
* Retrieve relevant transcript context
* Generate contextual answers
* Simple React-based chat interface

### Planned Features

* Automatic video pause/resume
* Timestamp-aware retrieval
* Semantic search using vector embeddings
* Oracle AI Vector Search integration
* Voice input (speech-to-text)
* Voice responses (text-to-speech)
* Real-time conversational experience
* Chapter-aware navigation
* Contextual code extraction
* AI-generated summaries
* Multi-video knowledge base

---

## Architecture

```text
YouTube Video
      │
      ▼
Transcript Extraction
      │
      ▼
Chunking & Processing
      │
      ▼
Vector Store
      │
      ▼
Context Retrieval (RAG)
      │
      ▼
LLM Response Generation
      │
      ▼
Interactive Chat UI
```

---

## Repository Structure

```text
youtube-live-chat/
├── apps/
│   ├── api/
│   └── web/
│
├── packages/
│   ├── shared/
│   ├── ai/
│   ├── rag/
│   ├── youtube/
│   └── db/
│
├── infra/
│   ├── docker/
│   └── sql/
│
└── docs/
```

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

### Backend

* Node.js
* Fastify
* TypeScript

### AI & Retrieval

* Gemini Embeddings (planned)
* Retrieval-Augmented Generation (RAG)
* Oracle AI Vector Search (planned)

### Realtime

* WebSockets / Socket.IO (planned)

---

## Getting Started

### Clone Repository

```bash
git clone git@github.com:pavanrust/youtube-live-chat.git
cd youtube-live-chat
```

### Install Dependencies

```bash
npm install
```

### Start Backend

```bash
npm run dev:api
```

### Start Frontend

```bash
npm run dev:web
```

---

## Development Roadmap

### Phase 1 - MVP

* [x] Repository setup
* [x] Basic frontend
* [x] Fastify backend
* [x] Transcript ingestion
* [x] Basic retrieval
* [x] Chat interface

### Phase 2 - Semantic Search

* [ ] Gemini embeddings
* [ ] Vector storage
* [ ] Similarity search
* [ ] Context ranking

### Phase 3 - Oracle AI Vector Search

* [ ] Oracle VECTOR integration
* [ ] Embedding persistence
* [ ] Hybrid retrieval

### Phase 4 - Real-Time Experience

* [ ] Automatic pause/resume
* [ ] WebSocket communication
* [ ] Streaming responses

### Phase 5 - Voice Interface

* [ ] Speech-to-text
* [ ] Text-to-speech
* [ ] Interruptible conversations

---

## Example User Flow

1. User opens a YouTube video.

2. Transcript is fetched and processed.

3. User watches the video.

4. User asks:

   > What does vector embedding mean?

5. The application:

   * pauses the video,
   * retrieves relevant transcript segments,
   * generates a contextual answer,
   * presents the answer,
   * resumes playback.

---

## Future Vision

Instead of treating videos as static documents, YouTube Live Chat treats videos as live knowledge streams.

The objective is to build an AI tutor capable of:

* understanding what is currently being discussed,
* answering questions in context,
* navigating within videos,
* generating explanations and examples,
* adapting explanations to the learner's level.

---

## License

MIT License

