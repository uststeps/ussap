<<<<<<< HEAD

var app = {
    initialize: function() {
		
		
		
        app.bindEvents();
    },
    
    bindEvents: function() {
        app.onDeviceReady();
    }, 

    onDeviceReady: function() {
		$("#forgotQuestion").html(localStorage.getItem("forgotQuestion"));
       
		
    }, 
    
    receivedEvent: function(id) {
		
    },
	
	submitReset: function() {
		if ($("#validationSSS").val() == localStorage.getItem("forgotSSS")){
			$("#divAlert2").hide();
			$("#validationSSS").attr("class", "form-control form-control-lg");
			
			if ($("#validationAnswer").val() == localStorage.getItem("forgotAnswer")){
				$("#divAlert2").hide();
				$("#validationAnswer").attr("class", "form-control form-control-lg border");
				
				$.ajax({
				url      : localStorage.getItem("server") + "account/resetpassword",
				type     : "POST",
				dataType : "json",
				beforeSend: function(xhr){ 
				   xhr.setRequestHeader('ecode'		, localStorage.getItem("ecode"));
				   xhr.setRequestHeader('empnumber'	,  localStorage.getItem("forgotEmpnum"));
				},
				success: function(msg) { 
			
				
					if (msg["response"] == "1") {
						
						localStorage.setItem("forgotQuestion", null);
						localStorage.setItem("forgotAnswer", null);
						localStorage.setItem("forgotSSS",null);
						localStorage.setItem("forgotEmpnum",null);
						window.location = "forgotpassword_result.html";
					} else {
						
						
						$("#divAlert2").html("There was an error processing request, please try again");
						$("#divAlert2").show();
					}
					  
				},
				error: function(jqXHR	, textStatus, errorThrown) {  
				 
				}
			});
				
			} else {
				$("#divAlert2").html("Secret question answer incorrect");
				$("#divAlert2").show();
				$("#validationAnswer").attr("class", "form-control form-control-lg border border-danger");
			}
		} else {
			$("#divAlert2").html("SSS Number is incorrect");
			$("#divAlert2").show();
			$("#validationSSS").attr("class", "form-control form-control-lg border border-danger");
		}
		
	},
	
	checkEmployeeNumber: function(){
		if ($("#searchEmpInput").val().length <= 0) {
			$("#divAlertHolder").show();
			$("#searchEmpInput").attr("class", "form-control text-center border border-danger");
		} else {
			$("#divAlertHolder").hide();
			$("#searchEmpInput").attr("class", "form-control text-center");
			$.ajax({
				url      : localStorage.getItem("server") + "account/secretquestion",
				type     : "POST",
				dataType : "json",
				beforeSend: function(xhr){ 
				   xhr.setRequestHeader('ecode'		,localStorage.getItem("ecode"));
				   xhr.setRequestHeader('empnumber'	,$("#searchEmpInput").val());
				},
				success: function(msg) { 
					if (msg["mysq"]["id"] == 0) {
						  $("#divAlert1").html("Invalid employee number");
						  $("#divAlertHolder").show();
						  $("#searchEmpInput").attr("class", "form-control text-center border border-danger");
					} else {
						  $("#divAlertHolder").hide();
						  $("#searchEmpInput").attr("class", "form-control text-center");
							
						  localStorage.setItem("forgotQuestion", msg["mysq"]["question"]);
						  localStorage.setItem("forgotAnswer", msg["mysq"]["answer"]);
						  localStorage.setItem("forgotSSS", msg["sss"]);
						  localStorage.setItem("forgotEmpnum", $("#searchEmpInput").val());
						  window.location = "forgotpassword2.html";
						
					}
					  
				},
				error: function(jqXHR	, textStatus, errorThrown) {  
				  $("#divAlert1").html("There was an error processing your request, please try again");
				  $("#divAlertHolder").show();
				 
				}
			});
			
			
		} 
		
		
	},
	onLogout: function(){
		localStorage.setItem("remember","false");
	}
};
=======
var _0x5666=['attr','class','#validationAnswer','hide','form-control\x20form-control-lg\x20border','server','account/resetpassword','POST','json','setRequestHeader','ecode','empnumber','response','setItem','location','forgotpassword_result.html','There\x20was\x20an\x20error\x20processing\x20request,\x20please\x20try\x20again','show','form-control\x20form-control-lg\x20border\x20border-danger','SSS\x20Number\x20is\x20incorrect','#searchEmpInput','length','form-control\x20text-center\x20border\x20border-danger','#divAlertHolder','form-control\x20text-center','ajax','mysq','#divAlert1','Invalid\x20employee\x20number','question','forgotAnswer','answer','sss','forgotEmpnum','remember','false','onDeviceReady','#forgotQuestion','html','forgotQuestion','#validationSSS','val','getItem','forgotSSS','#divAlert2'];(function(_0x26911f,_0x42ef24){var _0x3703e8=function(_0x2fab33){while(--_0x2fab33){_0x26911f['push'](_0x26911f['shift']());}};_0x3703e8(++_0x42ef24);}(_0x5666,0x105));var _0x20a7=function(_0x5cb684,_0x4532a8){_0x5cb684=_0x5cb684-0x0;var _0x16c6e1=_0x5666[_0x5cb684];return _0x16c6e1;};var app={'initialize':function(){app['bindEvents']();},'bindEvents':function(){app[_0x20a7('0x0')]();},'onDeviceReady':function(){$(_0x20a7('0x1'))[_0x20a7('0x2')](localStorage['getItem'](_0x20a7('0x3')));},'receivedEvent':function(_0x3b5476){},'submitReset':function(){if($(_0x20a7('0x4'))[_0x20a7('0x5')]()==localStorage[_0x20a7('0x6')](_0x20a7('0x7'))){$(_0x20a7('0x8'))['hide']();$('#validationSSS')[_0x20a7('0x9')](_0x20a7('0xa'),'form-control\x20form-control-lg');if($(_0x20a7('0xb'))['val']()==localStorage[_0x20a7('0x6')]('forgotAnswer')){$('#divAlert2')[_0x20a7('0xc')]();$(_0x20a7('0xb'))[_0x20a7('0x9')]('class',_0x20a7('0xd'));$['ajax']({'url':localStorage[_0x20a7('0x6')](_0x20a7('0xe'))+_0x20a7('0xf'),'type':_0x20a7('0x10'),'dataType':_0x20a7('0x11'),'beforeSend':function(_0x3001c6){_0x3001c6[_0x20a7('0x12')](_0x20a7('0x13'),localStorage[_0x20a7('0x6')](_0x20a7('0x13')));_0x3001c6[_0x20a7('0x12')](_0x20a7('0x14'),localStorage[_0x20a7('0x6')]('forgotEmpnum'));},'success':function(_0x1e684a){if(_0x1e684a[_0x20a7('0x15')]=='1'){localStorage[_0x20a7('0x16')](_0x20a7('0x3'),null);localStorage[_0x20a7('0x16')]('forgotAnswer',null);localStorage[_0x20a7('0x16')]('forgotSSS',null);localStorage[_0x20a7('0x16')]('forgotEmpnum',null);window[_0x20a7('0x17')]=_0x20a7('0x18');}else{$(_0x20a7('0x8'))[_0x20a7('0x2')](_0x20a7('0x19'));$(_0x20a7('0x8'))[_0x20a7('0x1a')]();}},'error':function(_0x4d8aee,_0x342c7f,_0x4bfac3){}});}else{$(_0x20a7('0x8'))['html']('Secret\x20question\x20answer\x20incorrect');$(_0x20a7('0x8'))[_0x20a7('0x1a')]();$(_0x20a7('0xb'))[_0x20a7('0x9')](_0x20a7('0xa'),_0x20a7('0x1b'));}}else{$(_0x20a7('0x8'))[_0x20a7('0x2')](_0x20a7('0x1c'));$(_0x20a7('0x8'))[_0x20a7('0x1a')]();$(_0x20a7('0x4'))['attr']('class','form-control\x20form-control-lg\x20border\x20border-danger');}},'checkEmployeeNumber':function(){if($(_0x20a7('0x1d'))[_0x20a7('0x5')]()[_0x20a7('0x1e')]<=0x0){$('#divAlertHolder')[_0x20a7('0x1a')]();$(_0x20a7('0x1d'))[_0x20a7('0x9')](_0x20a7('0xa'),_0x20a7('0x1f'));}else{$(_0x20a7('0x20'))[_0x20a7('0xc')]();$(_0x20a7('0x1d'))['attr'](_0x20a7('0xa'),_0x20a7('0x21'));$[_0x20a7('0x22')]({'url':localStorage['getItem'](_0x20a7('0xe'))+'account/secretquestion','type':_0x20a7('0x10'),'dataType':'json','beforeSend':function(_0x434735){_0x434735[_0x20a7('0x12')](_0x20a7('0x13'),localStorage[_0x20a7('0x6')](_0x20a7('0x13')));_0x434735[_0x20a7('0x12')](_0x20a7('0x14'),$(_0x20a7('0x1d'))[_0x20a7('0x5')]());},'success':function(_0x4366a4){if(_0x4366a4[_0x20a7('0x23')]['id']==0x0){$(_0x20a7('0x24'))[_0x20a7('0x2')](_0x20a7('0x25'));$(_0x20a7('0x20'))[_0x20a7('0x1a')]();$(_0x20a7('0x1d'))[_0x20a7('0x9')](_0x20a7('0xa'),_0x20a7('0x1f'));}else{$('#divAlertHolder')['hide']();$('#searchEmpInput')['attr']('class','form-control\x20text-center');localStorage[_0x20a7('0x16')]('forgotQuestion',_0x4366a4[_0x20a7('0x23')][_0x20a7('0x26')]);localStorage[_0x20a7('0x16')](_0x20a7('0x27'),_0x4366a4[_0x20a7('0x23')][_0x20a7('0x28')]);localStorage['setItem'](_0x20a7('0x7'),_0x4366a4[_0x20a7('0x29')]);localStorage[_0x20a7('0x16')](_0x20a7('0x2a'),$(_0x20a7('0x1d'))['val']());window['location']='forgotpassword2.html';}},'error':function(_0x257a11,_0x127569,_0x456dab){$(_0x20a7('0x24'))[_0x20a7('0x2')]('There\x20was\x20an\x20error\x20processing\x20your\x20request,\x20please\x20try\x20again');$(_0x20a7('0x20'))[_0x20a7('0x1a')]();}});}},'onLogout':function(){localStorage[_0x20a7('0x16')](_0x20a7('0x2b'),_0x20a7('0x2c'));}};
>>>>>>> f7b06d37a675843cbbc2208eec2030b36122c75d
