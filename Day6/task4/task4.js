const fs = require('fs');
const filePath = 'users.json';

const readData = () => {
    try { return JSON.parse(fs.readFileSync(filePath, 'utf8')); } catch { return []; }
};
const writeData = (data) => fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');

const createUser = (user) => { const users = readData(); users.push(user); writeData(users); };
const getUsers = () => readData();
const updateUser = (id, newData) => { 
    writeData(readData().map(user => user.id === id ? { ...user, ...newData } : user)); 
};
const deleteUser = (id) => writeData(readData().filter(user => user.id !== id));

module.exports = { createUser, getUsers, updateUser, deleteUser };
