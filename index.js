import fs from "node:fs"
import path from "node:path";

const inputFilePath = './input/exemplo.csv';
const outputFolderPath = './output';
const outputFilePath = path.join(outputFolderPath, 'exemplo.json');

try {
  const csvFile = fs.readFileSync(inputFilePath, 'utf-8');
  const arr = csvFile.split('\n');
  let jsonObject = [];
  let headers = arr[0].split(',');

  for (let i = 1; i < arr.length; i++) {
    let data = arr[i].split(",");
    let object = {};
        for (let j = 0; j < data.length; j++) {
        object[headers[j].trim()] = data[j].trim();
        }
    jsonObject.push(object);
  }

    const jsonContent = JSON.stringify(jsonObject, null, 2);
    fs.mkdirSync(outputFolderPath, { recursive: true });
    fs.writeFileSync(outputFilePath, jsonContent, 'utf-8');
    console.log('Arquivo JSON gerado com sucesso:', outputFilePath);
    
} catch (err) {
  console.error('Erro ao ler o arquivo CSV:', err);
}
