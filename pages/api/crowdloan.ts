import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/api/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method == 'GET') {
    const contributions = await prisma.contribution.count();
    res.status(200).json({
      contributions,
    });
  } else if (req.method === 'POST') {
    try {
      const params = {
        testimony: req.body.testimony || null,
        address: req.body.address || null,
        amount: req.body.amount || null,
        txHash: req.body.txHash || null,
        ip: req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || null,
      };

      const contribution = await prisma.contribution.create({
        data: {
          testimony: params.testimony,
          address: params.address,
          amount: params.amount,
          txHash: params.txHash,
          ip: Array.isArray(params.ip) ? params.ip[0] : params.ip,
        },
      });

      return res.status(200).json({
        status: 'OK',
      });
    } catch (err) {
      console.error({
        err,
      });
      res.status(500).json({ error: 'Error!' });
    }
  } else {
    res.status(405).json({ err: 'Method not allowed' });
  }
}
