import { fetchGraphQL } from '@app/lib/api';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getGeneralContent(req: NextApiRequest, res: NextApiResponse) {
  try {
    const data = await fetchGraphQL(
      `query {
            generell(id: "6QKM2PePYEl18k21ItYWKA") {
              subtitle
              about
              aboutBild {
                url
                width
                height
              }
              heroVideo {
                url
                width
                height
              }
              soMeLinks
            }
          }`,
    );

    res.status(200).json(data.data.generell);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
