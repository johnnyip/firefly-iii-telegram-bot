import * as dotenv from 'dotenv';
import Debug from 'debug';

if (process.env.DEBUG) Debug.enable(process.env.DEBUG)

dotenv.config()

export default {
  userId: parseInt(process.env.TG_USER_ID || '', 10),
  botToken: process.env.BOT_TOKEN || 'USE_YOUR_REAL_BOT_TOKEN',
  fireflyUrl: process.env.FIREFLY_URL || '',
  fireflyApiUrl: process.env.FIREFLY_API_URL || process.env.FIREFLY_URL,
  fireflyAccessToken: process.env.FIREFLY_ACCESS_TOKEN || '',
  cliToken: process.env.CLI_TOKEN || ''
}
