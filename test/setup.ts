import {} from 'jest';
import * as dotenv from "dotenv";
import { Maria } from '../src/persistence/maria';

dotenv.config();

beforeAll(async () => {
    process.env.mode = "test";
    await Maria.connect(process.env.DB_URI);
});

beforeEach(async () => {
    await Maria.execute("start transaction");
});

afterEach(async () => {
    await Maria.execute("rollback");
})
  
afterAll(async () => {
    //...
});

export let setup = () => {}
