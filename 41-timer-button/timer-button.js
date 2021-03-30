$(function(){
  
  let $btn = $('input'),
      delay = 6,
      timer = null;

  $btn.val('同意 ('+ delay +'s)');
  $btn.attr('disabled','disabled')

  timer = setInterval(()=>{
    $btn.val('同意('+ --delay +'s)');
    if(delay === 0){
      clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  },1000);

  $btn.click(()=>{
    alert('button clicked!');
  })
});



/*UI组件的面向对象封装，两种方式
1.{} Object
let $timerBtn = (function(){
function show(){

  
}


2.工厂函数（函数的立即执行表达式+闭包）=>全局对象

let $timerBtn = (function(){
function show(){
}
return{
    show
}

})() ;
使用：
$timerBtn.show();
3.构造函数
function TimerBtn(){
  this.show=function(){
  }
}
使用：
let btn = new TimerBtn();
btn.show();

  */
