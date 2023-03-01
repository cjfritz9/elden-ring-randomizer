import { Configuration, OpenAIApi } from 'openai';
const configuration = new Configuration({
  organization: 'org-wg4VQOo1bRRB7bEwcWCetAw1',
  apiKey: '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'
});
export const openai = new OpenAIApi(configuration);
