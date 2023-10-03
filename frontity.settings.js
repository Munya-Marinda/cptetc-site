const settings = {
  name: "capetownetc",
  state: {
    frontity: {
      url: "",
      title: "Cape {town} Etc",
      description:
        "Cape {town} Etc | News, Events, Food and Lifestyle in the Mother City",
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
