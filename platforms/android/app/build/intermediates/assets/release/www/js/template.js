<<<<<<< HEAD
var slideout;
var app = {
    initialize: function() {
           slideout = new Slideout({
            'panel': document.getElementById('panel'),
            'menu': document.getElementById('sidenav'),
            'padding': 256,
            'tolerance': 70
        });
        $("#sidenav").load("inc.sidenav.html");
        $("#header").load("inc.topbar.html");
        this.bindEvents();
        document.addEventListener('deviceready', this.onDeviceReady, false);
  
    },
    bindEvents: function() {

    },

    onDeviceReady: function() {
       
        
    },
    receivedEvent: function(id) {
        

    },
    toggleMenu: function() {
        slideout.toggle();
        
        if (slideout.isOpen()){
            $(".menubutton").prop("class", "menubutton menubutton-open");
        }
    },
	onLogout: function(){
		localStorage.setItem("remember","false");
	}
};
=======
var _0x1db3=['onDeviceReady','toggle','.menubutton','prop','class','menubutton\x20menubutton-open','setItem','false','getElementById','panel','sidenav','#sidenav','load','inc.sidenav.html','#header','inc.topbar.html','bindEvents','addEventListener','deviceready'];(function(_0x18e347,_0x352276){var _0x21516f=function(_0x2cf74a){while(--_0x2cf74a){_0x18e347['push'](_0x18e347['shift']());}};_0x21516f(++_0x352276);}(_0x1db3,0x7a));var _0x4ce8=function(_0x367819,_0x4d7478){_0x367819=_0x367819-0x0;var _0x29dfe7=_0x1db3[_0x367819];return _0x29dfe7;};var slideout;var app={'initialize':function(){slideout=new Slideout({'panel':document[_0x4ce8('0x0')](_0x4ce8('0x1')),'menu':document[_0x4ce8('0x0')](_0x4ce8('0x2')),'padding':0x100,'tolerance':0x46});$(_0x4ce8('0x3'))[_0x4ce8('0x4')](_0x4ce8('0x5'));$(_0x4ce8('0x6'))[_0x4ce8('0x4')](_0x4ce8('0x7'));this[_0x4ce8('0x8')]();document[_0x4ce8('0x9')](_0x4ce8('0xa'),this[_0x4ce8('0xb')],![]);},'bindEvents':function(){},'onDeviceReady':function(){},'receivedEvent':function(_0x56b87a){},'toggleMenu':function(){slideout[_0x4ce8('0xc')]();if(slideout['isOpen']()){$(_0x4ce8('0xd'))[_0x4ce8('0xe')](_0x4ce8('0xf'),_0x4ce8('0x10'));}},'onLogout':function(){localStorage[_0x4ce8('0x11')]('remember',_0x4ce8('0x12'));}};
>>>>>>> f7b06d37a675843cbbc2208eec2030b36122c75d
