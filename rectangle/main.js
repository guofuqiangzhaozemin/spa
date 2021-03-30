$(()=>{
  let $width = $('#width'),
      $height=$('#height'),
      //$btncal=$('#calc'),
      $form=$('#main'),
      $perimeter=$('#perimeter'),
      $widthValidate=$("#width-validate"),
      $heightValidate=$("#height-validate"),
      $area=$('#area');

      $forkMeGH.show("http://www.baidu.com")

$form.submit((e)=>{
  e.preventDefault();
  let w=Number($width.val()),
      h=Number($height.val());
  let p=(w+h)*2,
      a=w*h;

  $perimeter.val(p);
  $area.val(a);
})

/*
$width.keypress((e)=>{
  let key = e.key,
      val = e.target.value,
      pos = e.target.selectionStart;
  val=val.slice(0,pos)+key+val.slice(pos,val.length);
  if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val)){
    e.preventDefault();
  }

});
$height.keypress((e)=>{
  let key = e.key,
      val = e.target.value,
      pos = e.target.selectionStart;
  val=val.slice(0,pos)+key+val.slice(pos,val.length);
  if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val)){
    e.preventDefault();
  }
});
$width.focusout(()=>{
  if(!validate($width,$widthValidate)){
    $width.select();
  };
});
$height.focusout(()=>{
  if(!validate($height,$heightValidate)){
    $height.select();
  };
});


$btncal.click(()=>{
  let w=Number($width.val()),
      h=Number($height.val());

  //validate
if(validate($width,$widthValidate)  && validate($height,$heightValidate)){
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

}
})
})

function validate(input,output){
  if(input.val()===''){
    output.html('该字段不能为空');
    return false;
  }else{
    output.html('');
  }
  
  let val = Number(input.val());
  if(isNaN(val)){
    output.html('该字段应该为数值')
    return false;
  }else{
    output.html('');
  }
  if(val<0){
    output.html('该字段不能小于0');
    return false;
  }else{
    output.html('');
  }

  return true;
}

*/
