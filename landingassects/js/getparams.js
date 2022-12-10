var params=function(){function urldecode(str){return decodeURIComponent((str+'').replace(/\+/g,'%20'));}
function transformToAssocArray(prmstr){var params={};var prmarr=prmstr.split("&");for(var i=0;i<prmarr.length;i++){var tmparr=prmarr[i].split("=");params[tmparr[0]]=urldecode(tmparr[1]);}
console.log(params);return params;}
var prmstr=window.location.search.substr(1);return prmstr!=null&&prmstr!=""?transformToAssocArray(prmstr):{};}();var params2=function(){function urldecode(str){return decodeURIComponent((str+'').replace(/\+/g,'%20'));}
function transformToAssocArray(prmstr){var params='';var prmarr=prmstr.split("&");var tmparr=prmarr[0].split("=");params=tmparr[1];return params;}
var prmstr=window.location.search.substr(1);return prmstr!=null&&prmstr!=""?transformToAssocArray(prmstr):{};}();jQuery(document).ready(function($){if(params2==1)
{$(".traferurl").click();}});jQuery(document).ready(function($){$(".overlyclicks").click(function(){$(this).removeClass('overlyclicks');window.open('https://www.affforce.com/scripts/un981c6l?a_aid=a0a77753&a_bid=29cc11a7');});});