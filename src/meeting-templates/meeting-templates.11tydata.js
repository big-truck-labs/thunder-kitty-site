const metaTitles = {
  sales: "Sales Call Templates \u2014 MEDDPICC, BANT, SPIN | Thunder Kitty",
  "one-on-one": "1:1 Meeting Template & Agenda | Thunder Kitty",
  standup: "Daily Standup Meeting Template | Thunder Kitty",
  "project-kickoff": "Project Kickoff Meeting Template | Thunder Kitty",
  "user-research": "User Research Interview Template | Thunder Kitty",
};

module.exports = {
  eleventyComputed: {
    title: (data) => data.template?.name ?? "Meeting Templates",
    metaTitle: (data) =>
      data.template?.slug ? metaTitles[data.template.slug] : undefined,
    description: (data) => data.template?.subheadline ?? "",
  },
};
