import { NextApiRequest, NextApiResponse } from 'next';

const login = (request: NextApiRequest, response: NextApiResponse) => {
  const { password } = request.body;

  if (password === '123') {
    return response.send({ message: 'OK' });
  }

  return response.status(403).send({ message: 'Failed' });
};

export default login;
