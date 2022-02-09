import { QueryTypes } from 'sequelize';
import { db } from '../database/db';
class ImageRepository {
  store = async (data: { url: string; path: string; name: string }) => {
    const { url, path, name } = data;
    const image = await db.query(
      `INSERT INTO images (url, path, name) VALUES ("${url}", "${path}", "${name}")`,
      {
        type: QueryTypes.INSERT,
      },
    );
    return image[0];
  };
}
export default ImageRepository;
