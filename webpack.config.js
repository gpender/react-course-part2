const path = require('path');
// entry -> output
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test: /\.s?[ac]ss$/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ] 
        }]
    },
    devtool:'eval-cheap-module-source-map',
    devServer:{
        contentBase: path.join(__dirname,'public')
    }
};

//loader