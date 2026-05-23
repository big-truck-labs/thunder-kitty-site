module.exports = {
  eleventyComputed: {
    title: (data) =>
      data.audience?.name
        ? `Thunder Kitty for ${data.audience.name}`
        : data.title,
    description: (data) => data.audience?.subheadline ?? data.description,
  },
};
