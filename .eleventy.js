const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));


  return {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "_site",
    },
    dataTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
};