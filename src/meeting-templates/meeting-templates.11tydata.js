module.exports = {
  eleventyComputed: {
    title: (data) =>
      `Thunder Kitty | ${data.template?.name ?? "Meeting Templates"}`,
    description: (data) => data.template?.subheadline ?? "",
  },
};
