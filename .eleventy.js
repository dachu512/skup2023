const MarkdownIt = require("markdown-it");
const md = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true
});

module.exports = function (eleventyConfig) {

    eleventyConfig.addFilter("md", function(content) {
        if (!content) return "";
        return md.render(content);
    });

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/_redirects");
    eleventyConfig.addPassthroughCopy("src/admin");

    return {
        dir: {
            input: "src",
            output: "_site",
        },

        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
