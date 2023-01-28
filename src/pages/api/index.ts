import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  Boom: string;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ Boom: 'API is Working' });
}
