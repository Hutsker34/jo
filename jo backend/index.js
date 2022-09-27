const fs = require('fs');
// чтение
const source = fs.readFileSync('in.json', 'utf8');

function modify(entry) {
    const {data} = JSON.parse(entry);
    data.age = 20;
    return JSON.stringify({
        userData: data
    }, null, 2);
}

// изменения
const result = modify(source);

// запись
fs.writeFile('out.json', result, 'utf8', () => {});
