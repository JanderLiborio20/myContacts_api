const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(resquest, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Obter Um registro
  }

  strore() {
    // Criar novo registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
