module.exports = {
  eleventyComputed: {
    title: (data) =>
      data.competitor?.name
        ? `Thunder Kitty vs ${data.competitor.name}`
        : data.title,
    description: (data) => data.competitor?.tagline ?? data.description,
  },
};
