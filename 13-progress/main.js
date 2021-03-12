$(function(){
  let $progress = $('progress'),
      $start = $('#start'),
      $stop = $('#stop'),
      $reset = $('#reset'),
      s = 0,
      mid = 0;
$start.click(()=>{
  if(s === 0){
    s=setInterval(()=>{
      $progress.attr('value',mid++)
    },100)
  }
})
$stop.click(()=>{
  clearInterval(s);
  s=0;
})
$reset.click(()=>{
  $progress.attr('value',mid=0);
})
});
