import Fastify from 'fastify';
import { ingestRoute } from './routes/ingest';
import { askRoute } from './routes/ask';

const app = Fastify();

app.register(ingestRoute);
app.register(askRoute);

app.listen({
  port: 3001
});