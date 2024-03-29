import UsuarioRepository from "../repositories/UsuarioRepository.js";

class UsuarioController {

  async show(req, res) {
    const row = await UsuarioRepository.findAll();
    res.json(row);
  }

  async store(req, res) {
    const usuario = req.body;
    const row = await UsuarioRepository.create(usuario);
    res.json(row);
  }

  async update(req, res) {
    const usuario = req.body;
    const id = req.params.id;
    const row = await UsuarioRepository.update(usuario, id);
    res.json(row);
  }

  async delete(req, res) {
    const getId = req.params.id;
    const row = await UsuarioRepository.delete(getId);
    res.json(row);
  }
}

export default new UsuarioController();
