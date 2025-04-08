const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data.json');


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading the file:', err.message);
    return;
  }

  try {
    
    let jsonData = JSON.parse(data);

    console.log('✅ Original Data:', jsonData);

   
    jsonData.push({ id: 4, name: 'David', role: 'Tester' });

  
    jsonData = jsonData.map(user => 
      user.name === 'Bob' ? { ...user, role: 'Lead Designer' } : user
    );

    
    jsonData = jsonData.filter(user => user.name !== 'Charlie');

    console.log('🔁 Modified Data:', jsonData);

   
    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('❌ Error writing to file:', err.message);
        return;
      }

      console.log('✅ JSON file updated successfully!');
    });

  } catch (parseError) {
    console.error('❌ Error parsing JSON:', parseError.message);
  }
});
