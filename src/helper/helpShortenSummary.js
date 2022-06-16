const utilShortenSummary = (content) => {
  let phrasesContent = content.split(".");

  let phrasesContentShow = phrasesContent.slice(0, 1).join();

  return { phrasesContentShow };
};

export default utilShortenSummary;
