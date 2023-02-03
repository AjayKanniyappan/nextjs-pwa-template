import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * `handler` is a function that takes a `NextApiRequest` and a `NextApiResponse` and returns a
 * `NextApiResponse` with a status code of 200 and a JSON body of `{ Boom: 'API is Working' }`
 * @param {NextApiRequest} _req - NextApiRequest - This is the request object. It contains information
 * about the request, such as the URL, headers, and body.
 * @param res - NextApiResponse<cat.Data>
 */
export default function handler(_req: NextApiRequest, res: NextApiResponse<cat.Data>) {
  res.status(200).json({ Boom: 'API is Working' });
}
