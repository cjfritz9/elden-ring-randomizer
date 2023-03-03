import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
import { validateName } from '../utils/helpers';
const configuration = new Configuration({
  organization: 'org-wg4VQOo1bRRB7bEwcWCetAw1',
  apiKey: ''
});
export const openai = new OpenAIApi(configuration);
const API_URL = process.env.REACT_APP_API_URL;

export const fetchRandomName = async (prompt: string) => {
  let randomName = '';
  const response: { data: string } = await axios.post(
    API_URL || 'http://localhost:7373/chat-gpt/eldenring/names',
    { prompt },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
  console.log(randomName, response.data);

  if (typeof response.data === 'string') {
    randomName = validateName(response.data);
  }

  return randomName;
};
