import 'src/components/header/index.js'
const array = ['1', '2', '3']
function ts(arg: number[]) {
  console.log('arg=>', arg)
}
ts([1, 2])
if (array.includes('2')) {
  console.log('有')
}
