const HtmlWebpackPlugin = require('html-webpack-plugin');  //按照html模版生成html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //构建前先清除dist缓存
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //生产环境下：合并css到单个文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //生产环境下：js代码压缩
//const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //生产环境下的css代码压缩
const webpack = require('webpack');
const path = require('path')

module.exports = env => { //module.exports的函数式的写法，参数env，用来判断区分开发和生产环境
  if( !env ){
    env = {}
  }
  let plugins = [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './app/views/index.html' //这个很关键，指定你要生成的html的模版（你在这个模模版中加上名字叫app的id）
    }),
  ]
  if(env.production){ //区分开发和生产环境，只有生产环境，才使用“提取css到单个文件”的功能  env的production变量是npmscript传来的
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"' //注意，这插件直接执行文本替换，给定的值必须包含字符串本身内的实际引号。通常，有两种方式来达到这个效果，使用 '"production"', 或者使用 JSON.stringify('production')。
        }
      }),
      new ExtractTextPlugin("style.css"),
      new UglifyJsPlugin({
        sourceMap: true
      }),
/*      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })*/
    )
  }
  return {
    entry: {
      app: ['./app/js/viewport.js','./app/js/main.js']
      //*** 这种写法也可以，则是让viewport.js单独打包生成文件并被html加载
      //*** app: './app/js/main.js',
      //*** viewport: './app/js/viewport.js'
    },
    devtool: 'source-map',
    module:{
      loaders:[
        {
          test: /\.html$/,
          loader: 'html-loader'
        },{
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: env.production?{ //这里也要根据env判断是开发还是生产环境
              css: ExtractTextPlugin.extract({
                use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
              }),
              scss: ExtractTextPlugin.extract({
                use: 'css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
                fallback: 'vue-style-loader' 
              })
            }:{
              css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
              scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
            },
            extractCSS: true,
            cssModules: {  //vue-loader使用css module的配置
              localIdentName: '[path][name]---[local]---[hash:base64:5]',
              camelCase: true
            }
          }
        },{
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        },{
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader'
        },{
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[path][name].[hash:7].[ext]'
          }
        },{
          test: /\.(woff|svg|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: '[path][name].[hash:7].[ext]'
          }      
        }/*,{
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['latest'] //按照最新的ES6语法规则去转换
          }    
        }*/
      ]
    },
    plugins: plugins,
    output:{
      path: path.resolve(__dirname,'dist'),
      filename: '[name].min.js'
    },
    devServer: {
      contentBase: path.join(__dirname,'dist'),//需要静态文件时在哪输出
      compress: true,//开启压缩
      port: 8000,
      //下面几行是从服务器后端请求数据，亲测可用
      proxy: {
        '/api': {
            target: 'http://localhost:8888',
            pathRewrite: {
                '^/api': '/vue/eleme'
            }
        }
      },
/*      proxy: {
        '/api': {
            target: 'http://localhost:8000',
            pathRewrite: {
                '^/api': '/static/data.json'
            }
        }
      },*/
    },
    resolve: {   //resolve这几行，是vue必须的
      alias: {
        'vue$': 'vue/dist/vue.js',
        '@': path.resolve(__dirname,'app'),
      }
    }
  }
}