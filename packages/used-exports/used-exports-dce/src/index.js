import { a,b,c} from './lib';
console.log({a});
if(false){
  console.log(b);
}
function get_one(){
  return 1;
}
let res = get_one() + get_one();

if(res != 2){
  console.log(c);
}