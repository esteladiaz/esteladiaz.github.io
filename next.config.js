const withCSS = require('@zeit/next-css')


module.exports = withCSS({
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/p/hello-nextjs': {page: '/post', query: { title: "Hello Next.js" } },
      '/p/learn-nextjs': { page: '/post', query: { title: "Learn Next.js is awesome" } },
      '/p/deploy-nextjs': { page: '/post', query: { title: "Deploy apps with Zeit" } },
      '/p/exporting-pages': { page: '/post', query: { title: "Learn to Export HTML Pages" } }
    }
  }
})

const webpack = require('webpack')

module.exports = {
    webpack: (config, { dev }) => {
        config.plugins.push(
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
            })
        )
        return config
    }
}