const path = require('path')
const glob = require('glob')
const stylesResourcesLoader = require('craco-style-resources-loader')
const TerserPlugin = require('terser-webpack-plugin')
const PurgecssPlugin = require('purgecss-webpack-plugin')
const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]'

module.exports = {
    plugins: [
        {
            plugin: stylesResourcesLoader,
            options: {
                patterns: ['./src/styles/variables.css'],
                injector: (source, resources) => {
                    const combineAll = (type) =>
                        resources
                            .filter(({ file }) => file.includes(type))
                            .map(({ content }) => content)
                            .join('')

                    return (source.includes('/*** Not Inject ***/') ? '' : combineAll('variables')) + source
                },
            },
        },
    ],
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
    style: {
        modules: {
            camelCase: true,
            localIdentName: CSS_MODULE_LOCAL_IDENT_NAME,
        },
    },
    babel: {
        loaderOptions: {
            cacheDirectory: false,
        },
        plugins: [],
    },
}
