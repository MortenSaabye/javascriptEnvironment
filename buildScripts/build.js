/*eslint-disable no-console*/

import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

console.log(chalk.blue('generating minified bundle. This might take a while.'))

webpack(webpackConfig).run((err) => {
   if(err){
      console.log(chalk.red(err))
      return 1
   }else {
      return 0
   }
})