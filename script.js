document.addEventListener("DOMContentLoaded", function () {
  const jsonContent = document.getElementById("jsonContent");

  const jsonFileInput = document.getElementById("jsonFile");
  jsonFileInput.addEventListener("change", function (e) {
    const file = e.target.files[0];

    if (file) {
      (async () => {
        jsonContent.innerHTML = '';
        const size = 1024 * 500; // === 500kb
        for (var offset = 0; offset < file.size; offset += size) {
          var text = await file.slice(offset, offset + size).text();
          jsonContent.innerHTML += text;
        }
        // const fileContentStream = await file.stream(); 
        // await streamToText(fileContentStream) 
        
      })();
    }
  });

  // const streamToText = async (blob) => {
  //   /*cria leitor de stream a partir de um obj blob */
  //   const readableStream = await blob.getReader();
  //   /*ler pedaços de dados (chunk) da stream criada*/
  //   const chunk = await readableStream.read();
  //   /*cria novo obj textdecoder, q decodifica dados binarios em texto
  //   e converte o valor de chunk em texto usando utf 8*/
  //   const text = new TextDecoder('utf-8').decode(chunk.value);
  //   jsonContent.innerHTML = text;
  // };
});