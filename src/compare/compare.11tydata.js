const metaTitles = {
  granola: "Thunder Kitty vs Granola: Local-First vs Cloud",
  otter: "Thunder Kitty vs Otter: No Bot, No Upload",
  fireflies: "Thunder Kitty vs Fireflies: No Bot, On-Device",
  fathom: "Thunder Kitty vs Fathom: Local vs Cloud",
};

module.exports = {
  eleventyComputed: {
    title: (data) =>
      data.competitor?.name
        ? `Thunder Kitty vs ${data.competitor.name}`
        : data.title,
    metaTitle: (data) =>
      data.competitor?.slug ? metaTitles[data.competitor.slug] : undefined,
    description: (data) => data.competitor?.tagline ?? data.description,
  },
};
