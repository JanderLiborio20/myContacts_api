const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Jander Liborio',
    email: 'jandernunes14@gmail.com',
    phone: '(92) 99156-9974',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactsRepository();
