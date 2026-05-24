const metaTitles = {
  therapists: "Therapy Session Transcription, No Cloud | Thunder Kitty",
  lawyers: "Privileged Call Notes for Lawyers | Thunder Kitty",
  consultants: "Client Meeting Notes for Consultants | Thunder Kitty",
  "sales-reps": "Sales Call Notes Without the Bot | Thunder Kitty",
  executives: "Private Meeting Notes for Executives | Thunder Kitty",
  founders: "Investor Call Notes, Off the Cloud | Thunder Kitty",
};

module.exports = {
  eleventyComputed: {
    title: (data) =>
      data.audience?.name
        ? `Thunder Kitty for ${data.audience.name}`
        : data.title,
    metaTitle: (data) =>
      data.audience?.slug ? metaTitles[data.audience.slug] : undefined,
    description: (data) => data.audience?.subheadline ?? data.description,
  },
};
