$(()=>{
  let $width = $('#width'),
      $height=$('#height'),
      $btncal=$('#calc'),
      $perimeter=$('#perimeter'),
      $area=$('#area');

$btncal.click(()=>{
  let w=Number($width.val()),
      h=Number($height.val());


  let p=(w+h)*2,
      a=w*h;
//解决浮点舍入误差的问题
function roundFractional(x,n){
  return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
}
  let n1,n2;
  try{
    n1=w.toString().split('.')[1].length
  }catch(e){
    n1=0
  }
  try{
    n2=h.toString().split('.')[1].length
  }catch(e){
    n2=0
  }

  $perimeter.val(roundFractional(p,Math.max(n1,n2)));
  $area.val(roundFractional(a,n1+n2));
})
})
