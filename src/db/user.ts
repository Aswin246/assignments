import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(
  username: string,
  password: string,
  name: string
) {
  const query: any = `
        insert into users (username, password, name) values ($1, $2, $3);
    `;
  const values = [username, password, name];
  const res = await client.query(query, values);
  return res.rows[0];
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
  const query: any = `
        select * from users where userId = $1;
        `;
  const value = [userId];

  const res = await client.query(query, value);
  return res.rows[0];
}
