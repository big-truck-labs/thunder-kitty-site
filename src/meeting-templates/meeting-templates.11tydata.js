module.exports = {
  eleventyComputed: {
    title: (data) => data.template?.name ?? "Meeting Templates",
    description: (data) => data.template?.subheadline ?? "",
  },
};
