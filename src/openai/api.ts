import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: 'org-wg4VQOo1bRRB7bEwcWCetAw1',
  apiKey: ''
});
export const openai = new OpenAIApi(configuration);
