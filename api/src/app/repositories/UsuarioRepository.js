import { db } from "../database/connection.js";


class UsuarioRepository {

  create(usuario) {
    const sql = "INSERT INTO usuarios SET ?;"
    return new Promise((resolve, reject) => {
      db.query(sql, usuario, (erro, result) => {
        if(erro) return reject('Não foi possivel cadastrar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }

  findAll() {
    const sql = "SELECT * FROM usuarios";
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
        if(err) return res.json(err);
  
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
    
  }

  update(usuario, id) {
    const sql = "UPDATE usuarios SET ? WHERE `id` = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, [usuario, id], (erro, result) => {
        if(erro) return reject('Não foi possivel atualizar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
    
  }

  delete(id) {
    const sql = "DELETE FROM usuarios WHERE `id` = ?";
    return new Promise((resolve, reject) => {
      db.query(sql, id, (erro, result) => {
        if(erro) return reject('Não foi possivel deletar!');

        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      })
    })
  }
}

export default new UsuarioRepository()