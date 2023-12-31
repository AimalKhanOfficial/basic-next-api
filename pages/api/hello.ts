// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ name: 'GET: John Doe' })
  } else if (req.method === 'POST') {
    res.status(200).json({ name: 'POST: John Doe' })
  }
}
