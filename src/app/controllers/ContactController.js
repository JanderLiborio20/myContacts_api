const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // Listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // Obter Um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found

      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  strore() {
    // Criar novo registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not Found

      return response.status(404).json({ error: 'User not found' });
    }

    await ContactsRepository.delete(id);

    // 204: No Content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
