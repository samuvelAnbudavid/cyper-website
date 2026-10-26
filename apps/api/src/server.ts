import { createApp } from './app.js';
import { env } from './config/env.js';

const app = createApp();

app.listen(env.port, () => {
  console.log(`Cybereye Intelitech API running on http://localhost:${env.port}`);
});
