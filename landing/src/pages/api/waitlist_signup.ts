import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await clientPromise;
    const db = client.db("waitlist");

    const addWaitlistItem = await db.collection("waitlist").insertOne({
      email: req.query.email,
      created_at: new Date(),
    });

    if (!addWaitlistItem.acknowledged) {
      return res.status(400).json({ message: "Something went wrong" });
    }

    return res.redirect("/thank-you").status(302);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export default handler;
