'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let n;
let a;
function kyokusen(n,a){
  const text = "@" ;
  for (let i=1 ; i <n ; i++ ) {
  let y = (i**2)*a;　　　　      
 　　 if (y >= 1){                   
　　  let result = text.repeat(y);  
 　　 console.log(result);
　　  }
　}
}
kyokusen(30,0.1);

