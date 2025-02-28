const fs = require('fs');
const filePath = 'users.json';

const readData = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

const writeData = (data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};


const createUser = (user) => {
    const users = readData();
    users.push(user);
    writeData(users);
    console.log('User added successfully');
};


const getUsers = () => {
    return readData();
};

const updateUser = (id, newData) => {
    let users = readData();
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...newData };
        writeData(users);
        console.log('User updated successfully');
    } else {
        console.log('User not found');
    }
};


const deleteUser = (id) => {
    let users = readData();
    const filteredUsers = users.filter(user => user.id !== id);
    if (users.length !== filteredUsers.length) {
        writeData(filteredUsers);
        console.log('User deleted successfully');
    } else {
        console.log('User not found');
    }
};

createUser({ id: 1, name: 'John Doe', email: 'john@example.com' });
console.log(getUsers());
updateUser(1, { name: 'John Updated' });
deleteUser(1);

module.exports = { createUser, getUsers, updateUser, deleteUser };
