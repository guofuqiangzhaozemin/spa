let $gotoDlg=(function(){
  let html=`
  <div class= "notepad-dlg-goto" >
    <div class= "notepad-dlgbox">
      <div class="titlebar">
        <p class="title" >转到指定行</p>
        <span class= "close-btn">×</span>
      </div>
      <div class="main">
        <label>行号(<u>L</u>):</label>
        <br>
        <input class="txt-line-num" type="text" autofocus>
        <br>
        <input class="btn-goto" type="button" value="转到">
        <input class="btn-cancel" type= "button" value="取消">
      </div>
    </div>
  </div>`;
 
  let $dlg = $(html),
      cfg = {
        container:'body',
        title:'同意',
        delay:6,
        enabled:false,
        onClick:null      
      };

  this.show=function(config){
    $.extend(cfg,config);
    $('body').append($dlg);
  }

  function destroy(){
    $dlg.remove();
  }
  
  return{show,destroy}; 
})();
