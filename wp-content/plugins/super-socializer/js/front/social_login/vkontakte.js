function theChampInitializeVKLogin(){VK.Auth.login(function(a){a.session.mid&&VK.Api.call("getProfiles",{uids:a.session.mid,fields:"uid, first_name, last_name, nickname, photo, photo_big"},function(a){a.response[0].uid&&theChampCallAjax(function(){1==heateorMSEnabled&&(a.response[0].mc_subscribe=1),theChampAjaxUserAuth(a.response[0],"vkontakte")})})})}window.vkAsyncInit=function(){VK.init({apiId:theChampVkKey}),theChampDisplayLoginIcon(document,["theChampVkontakteButton","theChampVkontakteLogin"])},setTimeout(function(){var a=document.getElementsByTagName("head")[0],b=document.createElement("script");b.type="text/javascript",b.src="https://vk.com/js/api/openapi.js",b.async=!0,a.appendChild(b)},0);