import { QueryTypes } from 'sequelize';
import { db } from '../database/db';
class UserRepository {
  findAll = async (data: { search?: string }) => {
    let query = 'SELECT * FROM users';
    if (data.search)
      query += ` WHERE name LIKE '%${data.search}%' OR email LIKE '%${data.search}%';`;
    const users = await db.query(query, {
      type: QueryTypes.SELECT,
    });

    return users;
  };
  findById = async (id: string | number) => {
    const user = await await db.query(`SELECT * FROM users WHERE id = ${id};`, {
      type: QueryTypes.SELECT,
    });
    return user[0] || null;
  };
  store = async (data: {
    name: string;
    email: string;
    password: string;
    image_id: string | number;
  }) => {
    const { email, password, image_id } = data;
    const user = await db.query(
      `INSERT INTO users (email, name, password, image_id) VALUES ("${email}", "${name}", "${password}", ${image_id})`,
      {
        type: QueryTypes.INSERT,
      },
    );
    return user;
  };
  update = async (
    id: number | string,
    data: {
      name: string;
      email: string;
      password: string;
      image_id: string | number;
    },
  ) => {
    const { email, password, image_id } = data;
    const query = `UPDATE users SET email = "${email}", name = "${name}", password = "${password}", image_id = ${image_id} WHERE users.id = ${id}`;

    const user = await db.query(query, {
      type: QueryTypes.UPDATE,
    });
    return user;
  };
  delete = async (id: string | number) => {
    const user = await db.query(`DELETE FROM users WHERE users.id = ${id}`, {
      type: QueryTypes.DELETE,
    });
    return user;
  };
}
export default UserRepository;
