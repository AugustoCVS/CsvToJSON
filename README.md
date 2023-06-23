# CsvToJSON

--> Conversor de CSV para JSON

Este é um código JavaScript que permite a conversão de arquivos CSV (Comma-Separated Values) para JSON (JavaScript Object Notation) diretamente no navegador. 
Ele possui uma interface simples que permite ao usuário selecionar um arquivo CSV, validar e converter em JSON, e fazer o download do arquivo convertido.


--> Funcionalidades

- Seleção de arquivo: O usuário pode selecionar um arquivo CSV usando o botão "conversor".
- Validação de arquivo: O código realiza validações no arquivo selecionado para garantr que seja um arquivo válido para conversão.
Ele verifica se o arquivo foi selecionado, se o tipo do arquivo é CSV e se o arquivo não está vazio.
- Conversão de CSV para JSON: O código converte o conteúdo do arquivo CSV em uma representação JSON.
Ele separa as linhas do CSV, extrai os cabeçalhos das colunas, e cria objetos JSON para cada linha válida do CSV, usando os cabeçalhos como chaves e os valores
correspondentes como valores.
- Download do JSON convertido: O código gera um arquivo JSON a partir do JSON convertido e cria um link para download desse arquivo.
- Exibição de mensagens: O código exibe mensagens de sucesso ou erro na interface do usuário, informando sobre o resultado da conversão.


--> Como usar

- Inclua o código JavaScript em sua página HTML.
- Certifique-se de ter os elementos HTML necessários no seu documento, como um botão com id "conversor", uma seção com a classe "section__content", 
e um campo de entrada de arquivo com id "file".
- Personalize as constantes ERR_NO_FILE, ERR_TYPE_FILE, ERR_EMPTY_FILE e SUCESS com as mensagens de erro e sucesso desejadas.
- Execute sua página HTML em um navegador.
- Selecione um arquivo CSV usando o botão "conversor".
- O código realizará a validação do arquivo e, se for válido, converterá o arquivo em JSON.
- O JSON convertido será baixado automaticamente como um arquivo chamado "output.json".
- As mensagens de sucesso ou erro serão exibidas na seção "section__content" da sua página.


--> Limitações

- O código assume que o arquivo CSV possui uma estrutura regular, com cabeçalhos de coluna consistentes em todas as linhas válidas.
- O código atual suporta apenas a conversão de um único arquivo CSV por vez.


-->Contribuição

- Este código pode ser aprimorado adicionando recursos adicionais, como suporte a conversão de múltiplos arquivos, opções de formatação do JSON, entre outros. 
Sinta-se à vontade para explorar e modificar o código para atender às suas necessidades.
