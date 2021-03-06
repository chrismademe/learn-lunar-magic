module.exports = {
    /**
     * Site name, useful for page titles
     */
    name: `11ty Starter`,

    /**
     * Global stylesheets, added in the <head> of each page
     *
     * For page specific stylesheets, use the same keys in
     * frontmatter.
     *
     * /style.css isn't a real file, it's the compiled
     * output of /assets/css/style.css, which is handled by
     * the style.11ty.js template file.
     */
    stylesheets: [
        `/style.css`,
        `https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap`,
    ],

    /**
     * Global Javascript, added in the <head> of each page
     * with a defer attribute
     *
     * For page specific javascript, use the same keys in
     * frontmatter.
     */
    // scripts: [`/assets/js/alpine.js`],
};
