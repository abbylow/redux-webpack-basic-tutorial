#WEBPACK
To start a React application without using Create-React-App

1. yarn init -y
-y means yes to every configuration option, use all default configurations

2. install necessary packages
devDependencies: only used for development, eg: for compilation / build
dependencies: the packages that are needed for the application to execute

3. To copy the index.html to the dist folder, there are 2 ways to do so
manually copy from public folder to dist folder
or 
use html-webpack-plugin to handle, this package will use our index.html (the file in public folder) as template, minify and place into dist folder

4. Setup babel
.babelrc (JSON format): list all the preset packages
@babel/preset-env can be written as @babel/env because babel knows those are preset packages

Alternatively, we can do this in the webpack.config.js

5. webpack.config.js
use "require" to import because some cannot use import (older version of Javascript)

entry: string, the file path of the main application code, the file that has react dom render 

output: object, the compiled final file 

module: object, the rules - list the loaders for different types of files

plugins: array, the webpack plugin configuration

resolve: object, optional, can list alias here, alias can remove the relative import eg: ../../components to be @components; extensions: for imported files

devServer: object
    historyApiFallback: when route is not found, go back to index.html
    port: which post to host
    host: the host name, normally is localhost
    stats: show the status message in terminal, errors-only will only show error message 
    contentBase: where the index.html rests

path.resolve(): get the actual path, the first parameter is the current directory name, so if use this function in webpack.config.js, then the __dirname will be the directory of that file; 2nd parameter is the path to append

6. add the scripts into package.json
webpack-dev-server: will automatically reload when there is any new changes
--open: open a new browser tab

