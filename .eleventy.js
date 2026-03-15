/*
addWatchTarget: https://www.11ty.dev/docs/watch-serve/
addPassthroughCopy: https://www.11ty.dev/docs/copy/
*/

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/_data/application.db/");

  // Pass assets through without processing
  eleventyConfig.addPassthroughCopy("src/media/");

  eleventyConfig.addShortcode("currentYear", () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};