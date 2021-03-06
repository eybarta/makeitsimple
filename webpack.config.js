const webpack = require('webpack');
const path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");
const resolvePath = require('resolve-path')
const HappyPack = require('happypack');
const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const autoprefixer = require('autoprefixer');
const autoprefixer2 = require('autoprefixer-stylus');
const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const buildPath = path.resolve(__dirname, 'dist');
const sourcePath = path.resolve(__dirname, 'src');
const normalize = path.resolve(__dirname, './node_modules/css-reset-and-normalize/stylus/flavored-reset-and-normalize.styl');
const rupture = require('rupture');
const poststylus = require('poststylus');

var BitBarWebpackProgressPlugin = require("bitbar-webpack-progress-plugin");
// Common plugins
const plugins = [
    new BitBarWebpackProgressPlugin(),
    new HappyPack({
        id: 'js',
        threads: 4,
        loaders: [ 'babel-loader' ]        
    }),
    new webpack.LoaderOptionsPlugin(
			{
			test: /\.styl$/,
			options: {
					stylus: {
                        use: [ autoprefixer2({browsers: ['last 2 versions', 'safari 5', 'ie 11', 'opera 12.1', 'ios 6', 'android 4']}), rupture({implicit:false}), poststylus([ 'lost', 'rucksack-css' ])],
					}
				},
			  preferPathResolver: 'webpack',
			}
			),		
    new ExtractTextPlugin("css/style.css")
    
]

const rules = [
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                css: ExtractTextPlugin.extract({
                        loader: 'vue-style-loader!css-loader!stylus-relative-loader?paths=src/styl',
                        fallbackLoader: 'style-loader',
                        resolve: {
                            alias: {
                                'assets': path.resolve(__dirname,'dist'),
                            }
                        }
                        
                        
                }),
            },
        }
    },
     {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ 
            fallbackLoader:'style-loader',
            loader:'css-loader',
        }),
    },
    {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({ 
            fallbackLoader:'style-loader',
            loader:'css-loader!stylus-loader!postcss-loader',
            
            options: {
                postcss: [require('lost')(), require('autoprefixer')(), require('rucksack-css')()]
            },
            
        }),
        exclude: /node_modules/
    },
    {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        // babelrc: false,
        // query: {
        //   presets: ['es2015', 'babili'],
        // },
    },
    {
        // Match woff2 in addition to patterns like .woff?v=1.1.1.
        test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader',
        options: {
            limit: 50000,
            mimetype: 'application/font-woff',
            // Output below the fonts directory
            name: 'fonts/[hash].[ext]',
            // Tweak publicPath to fix CSS lookups to take
            // the directory into account.
            publicPath: './'
        },
    },
    {
        test: /\.(ttf|svg|eot)$/,
        loader: 'file-loader',
        include: [/fonts/],
        options: {
            name: 'fonts/[hash].[ext]',
            publicPath: './'
        },
    },
    {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader?limit=5000&publicPath=../../dist/&name=img/[name].[ext]',
        exclude: [/dist/, /fonts/]
        
    }
]

if (isProduction) {
    plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(nodeEnv),
            },
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new BabiliPlugin({removeConsole:true, removeDebugger:true}),
        new WebpackCleanupPlugin({
            exclude: ["js/**/*", "css/**/*", "img/**/*"],
        })
    )
}
else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  );
}

module.exports = {
  devtool: isProduction ? 'cheap-module-source-map' : 'eval',
	context: sourcePath,
    target: "web",
	// entry point of our application
	entry: {
        script: './index.js'
        // pages: './pages.js'
	},
	// where to place the compiled bundle
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: "/",
		filename: 'js/[name].js'
	},
	module: { 
		rules,
       
	},
	 resolve: {
            extensions: ['.vue','.js', '.styl'],
            alias: {
                'vue$': 'vue/dist/vue.common.js',
                normalize
            }
        },
	plugins,
	devServer: {
        historyApiFallback: true,
		noInfo: true
  },
}