import { Request, Response } from 'express';
import ImageRepository from '../repositories/ImageRepository';
import UserRepository from '../repositories/UserRepository';

class UserController {
  public index = async (req: Request, res: Response) => {
    const { search } = req.query;
    try {
      const userRepository = new UserRepository();
      const users = await userRepository.findAll({ search: `${search}` });

      return res
        .status(200)
        .json({ users, message: 'Busca realizada com sucesso' });
    } catch (error) {
      return res.status(400).json({ message: 'Erro', error });
    }
  };

  public show = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const userRepository = new UserRepository();
      const user = await userRepository.findById(id);

      return res.status(200).json({
        user,
        message: 'Busca realizada com sucesso',
      });
    } catch (error) {
      return res.status(400).json({ message: 'Erro', error });
    }
  };
  public store = async (req: Request, res: Response) => {
    const { email, name, password } = req.body;
    try {
      const url = 'http://localhost:3333/img/user.jpeg';
      const path = '/img/user.jpeg';
      const nameImg = `user.jpeg`;

      const imageRepository = new ImageRepository();
      const image = await imageRepository.store({
        url,
        path,
        name: nameImg,
      });
      // Verifica se a imagem foi inserida
      if (!image) throw Error('Falha ao inserir imagem do usuário');

      const userRepository = new UserRepository();
      await userRepository.store({
        name,
        email,
        password,
        image_id: image,
      });

      return res.status(201).json({ message: 'Usuário criado com sucesso' });
    } catch (error) {
      return res.status(400).json({ message: 'Erro', error });
    }
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { email, name, password, image_id = 1 } = req.body;
    try {
      const userRepository = new UserRepository();
      await userRepository.update(id, {
        name,
        email,
        password,
        image_id,
      });

      return res
        .status(201)
        .json({ message: 'Usuário atualizado com sucesso' });
    } catch (error) {
      console.log(error);

      return res.status(400).json({ message: 'Erro', error });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const userRepository = new UserRepository();
      await userRepository.delete(id);

      return res.status(201).json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
      return res.status(400).json({ message: 'Erro', error });
    }
  };
}
export default UserController;
