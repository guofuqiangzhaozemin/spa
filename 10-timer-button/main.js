$(function(){
  //get elem
  let $btn = $('input'),
      delay = 6,
      timer = null;

  //init status:disable,text,delay
  $btn.val('同意 ('+ delay +'s)');
  $btn.attr('disabled','disabled')
  
  //start timer,timeout button enable
  timer = setInterval(()=>{
    //delay > 0
    //set btn text
    //delay --
    //delay = 0 set btn enable
    $btn.val('同意('+ --delay +'s)');
    if(delay === 0){
      clearInterval(timer);
      $btn.val('同意');
      $btn.removeAttr('disabled');
    }
  },1000);

  //click event
  $btn.click(()=>{
    alert('button clicked!');
  })
});
