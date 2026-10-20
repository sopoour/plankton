import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getConcerts(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            konzertCollection(limit: 1000) {
              items {
                ort
                datum
                venue
                ticketLink
                ticketNote
              }
            }
          }`,
    );

    res.status(200).json(data.data.konzertCollection.items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
