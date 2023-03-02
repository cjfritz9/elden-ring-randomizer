import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';
const configuration = new Configuration({
  organization: 'org-wg4VQOo1bRRB7bEwcWCetAw1',
  apiKey: ''
});
export const openai = new OpenAIApi(configuration);

export const fetchData = async () => {
  const response = await axios.get('http://localhost:7373/chatGPT', {
    data: {
      message: 'Hello server'
    }
  });
  console.log(response);
};
