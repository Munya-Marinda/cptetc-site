const settings = {
  name: "capetownetc",
  state: {
    frontity: {
      url: "",
      title:
        "Cape Town ETC | News, Events, Food and Lifestyle in the Mother City",
      description:
        "Cape Town Etc is your number one source of information for the latest news, food, culture, arts, water crisis, entertainment, fashion, property and fashion in the Mother City",
    },
  },
  packages: [
    {
      name: "capetownetc_1",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://staging.capetownetc.com",
          api: "https://staging.capetownetc.com/wp-json",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
