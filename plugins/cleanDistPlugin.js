const chalk = require('chalk')
const fs = require('fs')
const rimraf = require('rimraf')

// const path = require('path')
// const rmrf = (p) => {
//   if(fs.existsSync(p)){
//     fs.readdirSync(p).forEach(file => {
//       const curPath = path.join(p, file)
//       if(fs.lstatSync(curPath).isDirectory()){
//         rmrf(curPath)
//       }else{
//         fs.unlinkSync(curPath)
//       }
//     })
//   }
//   fs.rmdirSync(p)
// }

const { green } = chalk;

class CleanDistPlugin{
  constructor(){
  }

  apply(compiler){
    compiler.hooks.run.tap('CleanDistPlugin', compilation => {
      console.log(green('clean dist plugin开始工作了'))
      const exists = fs.existsSync(compilation.outputPath);
      if(!exists) return;
      rimraf.sync(compilation.outputPath)
      // rmrf(compilation.outputPath)
    })
  }
}

module.exports = CleanDistPlugin