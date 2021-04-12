/* global np,
          $dlgAbout,
          $menubar,
          $statusBar,
          $editor,
          $dlgSave,
          $dlgFont,
          $searchDlg,
          $dlgReplace,
          $dlgGoto: true */
/* eslint no-console: ["error", { allow: ["log"]  }] */
np.menuData = [{
  title: '文件(F)',
  menuItems: [{
    title: '新建(N)',
    shortcut: 'Ctrl+N',
    enabled: true,
    handler: null,
  },{
    title: '打开(O)...',
    shortcut: 'Ctrl+O',
    enabled: true,
    handler: null,
  },{
    title: '保存(S)',
    shortcut: 'Ctrl+S',
    enabled: true,
    handler: null,
  }, {
    title: '另存为(A)...',
    shortcut: '',
    enabled: true,
    handler: null,
  }, {
    title: 'hr',
    shortcut: '',
    enabled: true,
    handler: null
  }, {
    title: '页面设置(U)...',
    shortcut: '',
    enabled: true,
    handler: null,
  }, {
    title: '打印(P)...',
    shortcut: 'Ctrl+P',
    enabled: true,
    handler: null,
  }, {
    title: 'hr',
    shortcut: '',
    enabled: true,
    handler: null
  }, {
    title: '退出(X)',
    shortcut: '',
    enabled: true,
    handler: null,
  }],
  width: '202px',
  left: '0px'
}, {
  title: '编辑(E)',
  menuItems: [{
    title: '撤销(U)',
    shortcut: 'Ctrl+Z',
    enabled: false,
    handler: null,
  }, {
    title: 'hr',
    shortcut: '',
    enabled: true,
    handler: null
  }, {
    title: '剪切(T)',
    shortcut: 'Ctrl+X',
    enabled: true,
    handler: null,
  }, {
    title: '复制(C)',
    shortcut: 'Ctrl+C',
    enabled: false,
    handler: null,
  }, {
    title: '粘贴(P)',
    shortcut: 'Ctrl+V',
    enabled: false,
    handler: null,
  }, {
    title: '删除(L)',
    shortcut: 'Del',
    enabled: false,
    handler: null,
  }, {
    title: 'hr',
    shortcut: '',
    enabled: true,
    handler: null
  }, {
    title: '使用 Bing 搜索...',
    shortcut: 'Ctrl+E',
    enabled: true,
    handler: null,
  }, {
    title: '查找(F)...',
    shortcut: 'Ctrl+F',
    enabled: false,
    handler: () => $dlgSearch.show((srch) => $editor.search(srch))
  }, {
    title: '查找下一个(N)',
    shortcut: 'F3',
    enabled: false,
    handler: null,
  }, {
    title: '替换(R)...',
    shortcut: 'Ctrl+H',
    enabled: true,
    handler: null,
  }, {
    title: '转到(G)...',
    shortcut: 'Ctrl+G',
    enabled: true,
    handler:null, 
  }, {
    title: 'hr',
    shortcut: '',
    enabled: true,
    handler: null
  }, {
    title: '全选(A)',
    shortcut: 'Ctrl+A',
    enabled: true,
    handler: null,
  }, {
    title: '时间/日期(D)',
    shortcut: 'F5',
    enabled: true,
    handler: null,
  }],
  width: '218px',
  left: '52px'
}, {
  title: '格式(O)',
  menuItems: [{
    title: '自动换行(W)',
    shortcut: '',
    enabled: true,
    handler: null,
   /*handler: () => {
      np.bWrap = !np.bWrap;
      localStorage.setItem('bWrap', np.bWrap);

      if(np.bWrap) {
        $statusBar.display(false);
        $editor.resize(false);
        $menubar.enabled(3, 0, false);   // [查看]-[状态栏]菜单禁用
        $menubar.enabled(1, 9, false);   // [编辑]-[转到]菜单禁用
      } else {
        $statusBar.display(np.bShowStatusBar);
        $editor.resize(np.bShowStatusBar);
        $menubar.enabled(3, 0, true);     // [查看]-[状态栏]菜单启用
        $menubar.enabled(1, 9, true);     // [编辑]-[转到]菜单启用
        $menubar.checked(3, 0, np.bShowStatusBar);
      }

      $menubar.checked(2, 0, np.bWrap);
      $editor.setWrap(np.bWrap);
    }*/
  }, {
    title: '字体(F)...',
    shortcut: '',
    enabled: true,
    handler: () => $dlgFont.show({
      family: np.fontFamily,
      style: np.fontStyle,
      size: np.fontSize,
      okHandler: np.fontHandler
    })
  }],
  width: '156px',
  left: '106px'
}, {
  title: '查看(V)',
  menuItems: [{
    title: '状态栏(S)',
    shortcut: '',
    enabled: true,
    handler: () => {
      np.bShowStatusBar = !(typeof(np.bShowStatusBar) === 'boolean' ?
        np.bShowStatusBar  :
        np.bShowStatusBar === 'true') ;
      localStorage.setItem('bShowStatusBar', 'true');
      $statusBar.display(np.bShowStatusBar);
      $menubar.checked(3, 0, np.bShowStatusBar);
      $editor.resize(np.bShowStatusBar);
    }
  }],
  width: '138px',
  left: '162px'
}, {
  title: '帮助(H)',
  menuItems: [{
    title: '查看帮助(H)',
    shortcut: '',
    enabled: true,
    handler: null,
  }, {
    title: '关于记事本(A)',
    shortcut: '',
    enabled: true,
    handler: null,
  }],
  width: '166px',
  left: '216px'
}];
