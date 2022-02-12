import dbConnection from "../../helpers/db-util";

const handler = async (request, response) => {
  if (request.method !== "GET") return;

  const client = await dbConnection();
  const db = client.db();

  const products = await db.collection("products").find({}).toArray();

  if (!products) {
    client.close();
    response.status(422).json({ message: "Produtos não encontrados" });
    return;
  }
  console.log(products);
  client.close();
  response.status(200).json(products);
};

export default handler;
