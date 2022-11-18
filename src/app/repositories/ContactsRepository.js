const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Jander Liborio',
    email: 'jandernunes14@gmail.com',
    phone: '(92) 99156-9974',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Mateus',
    email: 'MateusJstack@gmail.com',
    phone: '(92) 99999-9999',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);

      resolve();
    });
  }
}

module.exports = new ContactsRepository();
