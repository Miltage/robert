const htmlmin = require("html-minifier")

module.exports = eleventyConfig => {

    // Add a readable date formatter filter to Nunjucks
    eleventyConfig.addFilter("dateDisplay", require("./filters/dates.js"))

    // Add a HTML timestamp formatter filter to Nunjucks
    eleventyConfig.addFilter("htmlDateDisplay", require("./filters/timestamp.js"))

    // Add a filter to capitalize the first letter of every word
    eleventyConfig.addFilter("capitalizeWords", require("./filters/capitalizeWords.js"))


    // Minify our HTML
    eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
        if (outputPath.endsWith(".html"))
        {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            })
            return minified
        }
        return content
    })

    // Collections
    eleventyConfig.addCollection('blog', collection => {

        const blogs = collection.getFilteredByTag('blog')

        for (let i = 0; i < blogs.length; i++) {

            const prevPost = blogs[i - 1]
            const nextPost = blogs[i + 1]

            blogs[i].data["prevPost"] = prevPost
            blogs[i].data["nextPost"] = nextPost

        }

        return blogs.reverse()

    })

    // Layout aliases
    eleventyConfig.addLayoutAlias('default', 'layouts/default.njk')
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk')
    eleventyConfig.addLayoutAlias('project', 'layouts/project.njk')

    // Include our static assets
    eleventyConfig.addPassthroughCopy("images")
    eleventyConfig.addPassthroughCopy("privacy")
    eleventyConfig.addPassthroughCopy("robots.txt")

    eleventyConfig.addNunjucksShortcode("ios", function(url) { 
        return '<a class="mobile" href="' + url + '"><img src="images/meta/apple.png" /></a>';
    });

    eleventyConfig.addNunjucksShortcode("android", function(url) { 
        return '<a class="mobile" href="' + url + '"><img src="images/meta/google.png" /></a>';
    });

    return {
        templateFormats: ["md", "njk"],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        passthroughFileCopy: true,

        dir: {
            input: 'site',
            output: 'dist',
            includes: 'includes',
            data: 'globals'
        }
    }

}
