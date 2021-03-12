$(function(){
  //get elem : range, span
  let $range = $('input'),
      $age = $('span');
  //range change event
  $range.change(()=>{
    $age.html($range.val());
  });
  

});
