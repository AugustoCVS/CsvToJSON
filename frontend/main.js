const btnConversor = document.getElementById("conversor")
const sectionContent = document.querySelector(".section__content")

const ERR_NO_FILE = "Erro: nenhum arquivo selecionado"
const ERR_TYPE_FILE = "Erro: selecione um arquivo CSV"
const ERR_EMPTY_FILE = "Erro: impossível enviar um arquivo vazio"
const SUCESS = "Arquivo convertido com sucesso"

function convertCSVtoJSON(csv) {
    const lines = csv.split('\n');
    const headers = lines[0].split(',');
    const numSpace = 2

    const jsonArray = lines.slice(1).reduce((acc, line) => {
        const data = line.split(',');
        if (data.length === headers.length) {
          const jsonRow = headers.reduce((row, header, j) => {
            row[header.trim()] = data[j].trim();
            return row;
          }, {});
          acc.push(jsonRow);
        }
        return acc;
      }, []);
    
    return JSON.stringify(jsonArray, null, numSpace);
  }

  function downloadJSON(json) {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'output.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  btnConversor.addEventListener('click', function() {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
  
    if (inputValidation(file)) {
      const reader = new FileReader();
  
      reader.onload = function(e) {
        const csv = e.target.result;
        const json = convertCSVtoJSON(csv);
        downloadJSON(json);
      };
  
      reader.readAsText(file);
      Messages(SUCESS, false)
    }
  });
  
  function inputValidation(file){
    if (!file) {
      Messages(ERR_NO_FILE, true)
      return false;
    } else if (file.type !== 'text/csv') {
        Messages(ERR_TYPE_FILE, true)
      return false;
    } else if (file.size === 0) {
        Messages(ERR_EMPTY_FILE, true)
      return false;
    }
    return true;
  }

  let currentMessage = null

  function Messages(message, isError) {

    if (currentMessage) {
        currentMessage.remove();
      }

    const messageDiv = document.createElement("div");
    messageDiv.classList.add(isError ? "errorMsg" : "successMsg");
  
    const paragraph = document.createElement("p");
    paragraph.textContent = message;
  
    messageDiv.appendChild(paragraph);
  
    document.body.appendChild(messageDiv);

    currentMessage = messageDiv;
  }
  
