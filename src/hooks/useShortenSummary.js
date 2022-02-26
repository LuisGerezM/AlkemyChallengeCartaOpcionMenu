const useShortenSummary = (content) => {
  // let phraseContent = content.substr(0, 200);
  let phrasesContent = content.split(".");
  //   console.log("prueba", phrasesContent);

  let phrasesContentShow = phrasesContent.slice(0, 1).join();
  // console.log("phrasesContentShow", phrasesContentShow);
  //let array = phraseContent.split(" ").slice(-10);

  // let latestPharagraph = array.join();
//   let arrayNextPhrase = phrasesContent.slice(1, 4);
//   let latestPharagraph = arrayNextPhrase.join();
  //   console.log("latestPharagraph", latestPharagraph);

//   return { phrasesContentShow, latestPharagraph };
return { phrasesContentShow };
};

export default useShortenSummary;
