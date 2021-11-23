const path = require('path')
const glob = require('glob')
const TerserPlugin = require('terser-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]'

module.exports = {
    webpack: {
        alias: {
            '~': `${path.resolve(__dirname)}/src`,
            '@': `${path.resolve(__dirname)}/src`,
        },
        configure: (webpackConfig) => {
            webpackConfig.optimization.minimizer = [
                new TerserPlugin({
                    terserOptions: {
                        keep_classnames: true,
                        keep_fnames: true,
                    },
                }),
            ]

            return webpackConfig
        },
        plugins: [
            new PurgecssPlugin({
                paths: () => glob.sync('./src/**/*.tsx', { nodir: true }),
            }),
        ],
    },
    babel: {
        loaderOptions: {
            cacheDirectory: false,
        },
        plugins: [],
    },
}
