const gDrive = (id: string) => `https://drive.google.com/uc?id=${id}`;

const ImageSources = {
  what: {
    source:
      "https://www.greenbiz.com/sites/default/files/images/articles/featured/humanrightsprotest.jpg",
    alternateText: "Human rights symbol",
  },
  why: {
    source: gDrive("1f5z9N7izOrZ0VBcaTos0kR0YV_J7xqhU"),
    alternateText: "Young man with a paper",
  },
  origin: {
    source: gDrive("1p4NJaErnwpP3mTCNE__PVAysXWytoTKq"),
    alternateText: "The Cyrus Cylinder",
  },
  unDeclarations: {
    source:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/United_Nations_Human_Rights_Council_Logo.svg/1200px-United_Nations_Human_Rights_Council_Logo.svg.png",
    alternateText: "United Nations logo",
  },
  india: {
    source:
      "https://www.fidh.org/local/cache-gd2/95/467ceb337c68dfcca62aeb976bebaa.jpg",
    alternateText: "Protest for human rights in India",
  },
  rightsViolation: {
    source:
      "https://i1.wp.com/alabamanewscenter.com/wp-content/uploads/2020/06/BLMFeature.jpg?fit=1200%2C675&ssl=1",
    alternateText: "Black Lives Matter road art",
  },
  rightsViolationSecondBg: {
    source: gDrive("1_F1i4v-3cwD997-bVVVrh3jLO3sS1msN"),
    alternateText: "What Black Lives Matter means to an 11-year old",
  },
  githubMark: {
    source: gDrive("1cnN0bY3Z05FI9_G8WeisNiiVwLj5HKQP"),
    alternateText: "View human-rights repository on Github",
  },
  unDeclarationsSecondBg: {
    source: gDrive("1USj6pPr3hRx1Ek8IhzszjWzF3lgku60t"),
    alternateText: "United Nations Declaration of Human Rights list of rights",
  },
};

export default ImageSources;
