import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

jest.setTimeout(60000);

let mongo: MongoMemoryServer;

beforeAll(async () => {
  process.env.JWT_KEY = "testkey";

  console.log("1. Iniciando MongoMemoryServer...");

  mongo = await MongoMemoryServer.create();

  console.log("2. MongoMemoryServer creado");

  const mongoUri = mongo.getUri();

  console.log("3. URI:", mongoUri);

  console.log("4. Conectando Mongoose...");

  await mongoose.connect(mongoUri, {
    dbName: "agrofest-test",
  });

  console.log("5. Mongoose conectado");
});

beforeEach(async () => {
  jest.clearAllMocks();

  if (mongoose.connection.db) {
    const collections = await mongoose.connection.db.collections();

    for (const collection of collections) {
      await collection.deleteMany({});
    }
  }
});

afterAll(async () => {
  await mongoose.connection.close();

  if (mongo) {
    await mongo.stop();
  }
});
