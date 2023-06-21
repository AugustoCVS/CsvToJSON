import fs from "node:fs"
import path from "node:path";

const inputFilePath = './input/exemplo.csv';
const outputFolderPath = './output';
const outputFilePath = path.join(outputFolderPath, 'exemplo.json');

function readFile() {
  const csvFile = fs.readFileSync(inputFilePath, 'utf-8');
  const csvRows = csvFile.split('\n');
  const jsonArray = [];
  const csvHeaders = csvRows[0].split(',');

  return { csvRows, jsonArray, csvHeaders };
}

function convertFile(csvRows, jsonArray, csvHeaders) {
  for (let i = 1; i < csvRows.length; i++) {
    const data = csvRows[i].split(",");
    const jsonRow = {};
    for (let j = 0; j < data.length; j++) {
      jsonRow[csvHeaders[j].trim()] = data[j].trim();
    }
    jsonArray.push(jsonRow);
  }
}

function writeFile(outputFolderPath, outputFilePath, jsonArray) {
  const numSpace = 2
  const jsonContent = JSON.stringify(jsonArray, null, numSpace);
  fs.mkdirSync(outputFolderPath, { recursive: true });
  fs.writeFileSync(outputFilePath, jsonContent, 'utf-8');
  console.log('Arquivo JSON gerado com sucesso:', outputFilePath);
}

const { csvRows, jsonArray, csvHeaders } = readFile();
convertFile(csvRows, jsonArray, csvHeaders);
writeFile(outputFolderPath, outputFilePath, jsonArray);