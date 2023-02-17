import clientPromise from '../../lib/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { useRouter } from 'next/router'

export default async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const client = await clientPromise
		const db = client.db('waitlist')

		const addWaitlistItem = await db.collection('waitlist').insertOne({
			email: req.query.email,
			created_at: new Date(),
		})

		return res.redirect('/thank-you')
	} catch (e) {
		console.error(e)
	}
}
