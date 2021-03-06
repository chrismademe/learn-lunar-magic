const fs = require('fs');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');

module.exports = (config) => {
    // Navigation Plugin
    config.addPlugin(eleventyNavigationPlugin);

    // Passthrough Files/Directories
    let passThrough = ['src/assets', 'src/robots.txt', 'src/.htaccess'];
    passThrough.forEach((item) => {
        config.addPassthroughCopy(item);
    });

    // Watch config for changes
    config.addWatchTarget('tailwind.config.js');

    // Handle 404 locally
    config.setBrowserSyncConfig({
        callbacks: {
            ready: (err, browserSync) => {
                const content404 = fs.readFileSync('_site/404.html');

                browserSync.addMiddleware('*', (req, res) => {
                    // Provides the 404 content without redirect.
                    res.write(content404);
                    res.end();
                });
            },
        },
    });

    return {
        dir: {
            input: 'src',
            layouts: '_layouts',
        },
    };
};
