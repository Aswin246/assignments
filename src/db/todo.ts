import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(
  userId: number,
  title: string,
  description: string
) {
  const query = `
    insert into todos (user_id, title, description, done) values ($1, $2, $3, $4)
    `;
  const values = [userId, title, description, false];
  const res = await client.query(query, values);

  return res.rows[0];
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
  const query = `

update todos
set done = true
where id = $1
`;
  const value = [todoId];

  const res = await client.query(query, value);
  return res.rows[0];
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
  const query = `
select * from todos where id = $1
`;
  const value = [userId];

  const res = client.query(query, value);
  return (await res).rows;
}
