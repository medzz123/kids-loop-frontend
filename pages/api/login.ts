import { delay } from '@lib/delay';
import { NextApiRequest, NextApiResponse } from 'next';

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  const { password } = request.body;

  await delay(2000);

  if (password === '123') {
    return response.send({ message: 'OK' });
  }

  return response.status(403).send({ message: 'Failed' });
};

export default login;
