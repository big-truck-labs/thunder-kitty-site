module.exports = {
  layout: "layouts/learn.html",
  pageCss: "learn.css",
  tags: ["learn"],
  permalink: "/learn/{{ page.fileSlug }}/",
  eleventyComputed: {
    metaTitle: (data) =>
      data.title ? `${data.title} | Thunder Kitty` : undefined,
  },
};
