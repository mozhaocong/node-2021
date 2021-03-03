import { createWriteStream } from '../public/fs'
createWriteStream('asibyasbyasiobyasob')
require('./test')
import data from './test'
data.name = '456'
global.test = data
// global.test = {
//   ...data,
//   name: '45646'
// }
global.test.data()
// console.log(global)
