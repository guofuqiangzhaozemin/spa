
let $menubar = (() => {
  let $bar = $('<div class="notepad-menubar"></div>');

  let menuData,
      menus = [];

  
  let active = -1;

  let createMenuTitle = () => {
    let $titles = $('<ul class="menu-title"></ul>');

    for(let i=0; i<menuData.length; i++) {
      let $title = $('<li class="title"></li>');

      $title.html(menuData[i].title);
      $title.attr('data-id', i);
      $titles.append($title);

      $title.click((e) => {
        let i = Number(e.target.dataset.id);

        if(active === -1) {
          menus[i].css({ display: 'inline-block' });
          active = i;
        } else if(active !== i) {
          menus[active].css({ display: 'none' });
          menus[i].css({ display: 'inline-block' });
          active = i;
        } else {
          menus[active].css({ display: 'none' });
          active = -1;
        }

        e.stopPropagation();
      });

      $title.hover((e) => {
        if(active !== -1) {
          let i = Number(e.target.dataset.id);

          menus[active].css({ display: 'none' });
          menus[i].css({ display: 'inline-block' });
          active = i;
        }
      });
    }

    $bar.append($titles);
  };

  let createMenus=()=>{
    for(let i=0; i<menuData.length; i++) {
      let $menus = $('<ul class="menus"></ul>'),
          items = menuData[i].menuItems;

      for(let j=0; j<items.length; j++) {
        if(items[j].title === 'hr') {
          let $hr = $('<li class="menu-hr"></li>');
          $menus.append($hr);
          continue;
        }

        let $menu = $('<li class="menu-item"></li>');

        $menu.html(items[j].title);
        $menu.attr('data-x', i);
        $menu.attr('data-y', j);

        if(items[j].shortcut !== '') {
          let $shorcut = $('<span class="shortcut"></span>');

          $shorcut.html(items[j].shortcut);
          $menu.append($shorcut);
        }

        if(!items[j].enabled) $menu.addClass('disabled');

        $menus.append($menu);
        if(items[j].title === '字体(F)...' || items[j].title === '查找(F)...' || items[j].title === '状态栏(S)'){
          $menu.click((e)=>{
            e.stopPropagation();
            if($(e.target).hasClass('disabled')) return;
            let i = e.target.dataset.x,
                j = e.target.dataset.y;
            menuData[i].menuItems[j].handler();
            menus[i].css({display:'none'});
            active = -1;
          })
        }
      }

      $menus.css({
        width: menuData[i].width,
        left: menuData[i].left,
        display: 'none'
      });

      $bar.append($menus);
      menus.push($menus);
    }
  };

  let checked = (row, col, isChecked) => {
    let menuItem = menus[row].find('.menu-item')[col];

    if(isChecked) {
      $(menuItem).prepend($('<span class="checked">✓</span>')[0]);
    } else {
      $(menuItem).find('.checked').remove();
    }
  };

  let enabled = (row, col, isEnabled) => {
    let menuItem = menus[row].find('.menu-item')[col];


    if(isEnabled) {
      $(menuItem).removeClass('disabled');
    } else {
      $(menuItem).addClass('disabled');
    }
  };

  let hideMenu = () => {
    if(active === -1) return;

    menus[active].css({display: 'none'});
    active = -1;
  };

  let show = (data) => {
    menuData = data;
    init();
  };
  let init=()=>{
    createMenuTitle();
    createMenus();

    $('body').append($bar);
  };
  return {
    show,
    checked,
    enabled,
    hideMenu
  };
})();
