/**
 * @param jsonp 跨域解决方案之一 
 *  jsonp 只能发送get 不能发送put post delete 请求
 *  不安全 引用别人的脚本容易纂改自己的脚本 被攻击等 现在大多数都不怎么采用 
 */  
//url请求 
https://www.baidu.com/sugrec?wd=asdadaw&cb=show
// https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=32813,1420,32873,32974,32705,7517,32958,32117,26350&wd=a&req=2&bs=weqqe&csor=1&pwd=a&cb=show
//  function jsonp({url,params,cb}){
//      return new Promise((resolve,reject)=>{
//         let script = document.createElement('script');
//          window[cb]=function(data){
//              resolve(data)
//              document.body.remove(script);
//          }
//          let params={...params,cb}
//          let arrs=[];
//          for(let key in params){
//             arrs.push(`${key}=${params[key]}`)
//          }
          
//          script.src=`${url}`?`${arrs.join('&')}`;
//          document.body.appendChild(script)
//      })
//  }
//  jsonp({
//      url:'127.0.0.1/users/find',
//      params:{wd:'jsonp 跨域方案'},
//      cb:'show'
//  }).then(data=>{
//      console.log(data)
//  })