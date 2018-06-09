const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const extractSass = new ExtractTextPlugin({
    filename: './css/styles.css',
    disable: process.env.NODE_ENV === 'development'
});

const bundleAnalyzer = new BundleAnalyzerPlugin({
	analyzerMode: 'server',
  analyzerHost: 'localhost',
  analyzerPort: 8888,
  reportFilename: 'report.html',
  defaultSizes: 'parsed',
  openAnalyzer: process.env.NODE_ENV !== 'development',
  generateStatsFile: false,
  statsFilename: 'stats.json',
  statsOptions: null,
  logLevel: 'info'
})
const cleanDist = new CleanWebpackPlugin(['dist']); // чистит /dist при каждом билде

let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
		sourceMapFilename: "sourcemaps/[file].map",
		publicPath: 'dist/'  // Для webpack-dev-server, чтобы запускать файлы из памяти на лету без build
	},
	devServer: {
		overlay: true		// Если будет ошибка, появится оверлей на странице
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,	// regExp
				loader: 'babel-loader',
				exclude: '/node_modules' //исключение
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
          fallback: 'style-loader', //если не сработает извлечение, то записать в js
          use: ['css-loader', 'sass-loader']
        })
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ['file-loader']
			}
		]
	},
	plugins: [
		cleanDist,
    extractSass,
    bundleAnalyzer
  ]
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production ? 'source-map' : 'eval-sourcemap';

	//смотрим какой mode при запуске, и выбираем какие соурс мапы писать
	//eval - быстрее, но пишет в итоговый файл(больше вес)

	return conf;
}