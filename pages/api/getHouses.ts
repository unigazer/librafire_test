// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import jsonResponse from './response.json';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  // Let's pretend that the server has responded with an object,
  // by quering the database
  res.json(jsonResponse);
};
