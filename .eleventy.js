module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("inspect", require("util").inspect);

  eleventyConfig.addLayoutAlias("base", "layouts/base.njk");

  return {
    dir: {
      input: "src",
    output: "www",
    }
  }
};