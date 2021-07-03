import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://AvtomatFxAdmin:KqOjH1icXcg8Nfjd@cluster0.cnk7p.mongodb.net/landing?retryWrites=true&w=majority" // TODO: move password to .env
    );
    const db = client.db();

    const meetupsCollection = db.collection('users');

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: 'Регистрация прошла успешно', result });
  }
}

export default handler;