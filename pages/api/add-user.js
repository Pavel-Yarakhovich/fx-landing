import { MongoClient } from "mongodb";

// /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://AvtomatFxAdmin:KqOjH1icXcg8Nfjd@cluster0.cnk7p.mongodb.net/landing?retryWrites=true&w=majority" // TODO: move password to .env
    );
    const db = client.db();

    const usersCollection = db.collection("users");

    const userExists = await usersCollection.findOne({ email: data.email });

    if (userExists) {
      client.close();
      res
        .status(409)
        .json({
          message: `Пользователь с email "${data.email}" уже существует`, error: true,
        });
    } else {
      const result = await usersCollection.insertOne(data);

      client.close();

      res.status(201).json({ message: "Регистрация прошла успешно", result });
    }
  }
}

export default handler;
