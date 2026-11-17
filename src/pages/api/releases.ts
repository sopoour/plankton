import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getReleases(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            releaseCollection(limit: 1000) {
              items {
                title
                releaseDate
                coverBild {
                  url
                  width
                  height
                }
                beschreibung
                distributorUrLs
              }
            }
          }`,
    );

    res.status(200).json(data.data.releaseCollection.items);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
