var x,area=$("#input");function Toast(e){$(".toast-content").html(e),$(".toast").show().delay(2e3).fadeOut(250)}$("#clean").on("click",function(){if(x="",x=area.val(),Remember(),$("#trim_yes").not(":disabled").prop("checked")&&(x=x.trim()),$("#trim_lead").not(":disabled").prop("checked")&&(x=x.replace(/^[^\S\r\n]+/gm,"")),$("#trim_trail").not(":disabled").prop("checked")&&(x=x.replace(/[^\S\r\n]+$/gm,"")),$("#spaces_tab").not(":disabled").prop("checked")){var e=$("#num_st").val();""==e&&(e=0,$("#num_st").val(0)),x=SpacestoTab(x,e)}if($("#tab_spaces").not(":disabled").prop("checked")){var u=$("#num_ts").val();""==u&&(u=0,$("#num_ts").val(0)),spce=repeatStr(" ",u),x=x.replace(/\t/gm,spce)}if($("#del_blank").not(":disabled").prop("checked")&&(x=x.split("\n").filter(function(e){return/\S/.test(e)}).join("\n")),$("#lb_space").not(":disabled").prop("checked")&&(x=x.replace(/\n/g," ")),$("#crunch_space").not(":disabled").prop("checked")&&(x=x.replace(/  +/g," ")),$("#crunch_line").not(":disabled").prop("checked")&&(x=x.replace(/\n\s*\n\s*\n/g,"\n\n")),$("#del_lb").not(":disabled").prop("checked")&&(x=x.replace(/\n/g,"")),$("#del_punc").not(":disabled").prop("checked")&&(x=x.replace(/[.,?!\'\":;\-\u2013\u2014\u2010\u2011\u2012\u2015\u2018\u2019\u201A\u201B\u201C\u201D\u201E\u201F\u2022\u2024\u2025\u2026\u2027\u2032\u2033\u2034\u2035\u2036\u2037\u2043\u2047\u2048\u2049\u205A]/g,"")),$("#del_emj").not(":disabled").prop("checked")&&(x=x.replace(/(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F/g,"")),$("#del_dia").not(":disabled").prop("checked")&&(x=removeDiacritics(x)),$("#normalize_letters").not(":disabled").prop("checked")&&("function"==typeof"".normalize?x=x.normalize("NFC").normalize("NFD").normalize("NFKC").normalize("NFKD"):$.getScript("https://textcleaner.net/js/modules/unorm.js",function(){x=unorm.nfd(x),x=unorm.nfc(x),x=unorm.nfkd(x),x=unorm.nfkc(x)})),$("#del_unk").not(":disabled").prop("checked")&&(x=x.replace(/\uFFFD/g,"")),$("#del_non_ascii").not(":disabled").prop("checked")&&(x=x.replace(/[^\x00-\x7F]/g,"")),$("#del_non_alphanum").not(":disabled").prop("checked")&&(x=x.replace(/[^\w\s]|_/g,"")),$("#del_mail").not(":disabled").prop("checked")&&(x=x.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi,"")),$("#del_bbcode").not(":disabled").prop("checked")&&(x=x.replace(/\[\/?(?:b|i|u|s|face|left|center|justify|right|quote|code|img|spoil|color|email|tag|tab|large|list|\*).*?\]/gi,"")),$("#unescape_html").not(":disabled").prop("checked")&&(x=unescapeHTML(x)),$("#strip_html").not(":disabled").prop("checked")&&(x=stripHTMLTags(x=(x=x.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi,"\n")).replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"\n"))),$("#strip_id").not(":disabled").prop("checked")&&(x=stripHTMLids(x)),$("#strip_class").not(":disabled").prop("checked")&&(x=stripHTMLclasses(x)),$("#strip_style").not(":disabled").prop("checked")&&(x=stripInlineStyles(x)),$("#decode_entities").not(":disabled").prop("checked")&&(x=decodeEntities(x)),$("#decode_uri").not(":disabled").prop("checked"))try{x=decodeURIComponent(x)}catch(e){alert('Failed to decode URL-encoded characters. Try replacing regular "%" with "%25" first.')}var t=/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gi;if($("#del_url").not(":disabled").prop("checked")&&(x=x.replace(t,"")),$("#urls_links").not(":disabled").prop("checked")&&(x=x.replace(t,'<a href="$&">$&</a>')),$("#curly_straight").not(":disabled").prop("checked")&&(x=StraightenQuotes(x)),$("#straight_curly").not(":disabled").prop("checked")&&(x=SmartenQuotes(x)),$("#del_dup_lines").not(":disabled").prop("checked")&&(x=uniqArray(x=x.split("\n")).join("\n")),$("#del_rep_words").not(":disabled").prop("checked")&&(x=x.split(" ").filter(function(e,u,t){return 0===u||e!==t[u-1]}).join(" ")),$("#del_char_left").not(":disabled").prop("checked")){x=x.split("\n");for(var r=0;r<x.length;r++)x[r]=x[r].slice($("#num_trim_left").val());x=x.join("\n")}if($("#del_char_right").not(":disabled").prop("checked")){x=x.split("\n");for(r=0;r<x.length;r++)x[r]=x[r].slice(0,-+$("#num_trim_right").val());x=x.join("\n")}if($("#fix_punc_space").not(":disabled").prop("checked")&&(x=x.replace(/([.,!?:;])(?=[^\s\d.])/g,"$1 ")),$("#text_short").not(":disabled").prop("checked")&&(x=x.split(" ").map(replaceSMS).join(" ")),$("#case_upper").not(":disabled").prop("checked")&&(x=x.toUpperCase()),$("#case_lower").not(":disabled").prop("checked")&&(x=x.toLowerCase()),$("#case_sentence").not(":disabled").prop("checked")){x=(x=x.toLowerCase()).replace(/(^|[.!?]\s+)([a-z])/g,function(e,u,t){return u+t.toUpperCase()})}if($("#case_capitalize").not(":disabled").prop("checked")&&(x=wordCase(x)),RegExp.escape=function(e){return String(e).replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")},0==$("#fnr_body").children().length)var n=0;else n=$("#fnr_body tr").last().attr("id").slice(9);var c=parseFloat(n)+1;for(r=1;r<c;r++)FindWhat=$("#findbox_"+r).val(),ReplaceWhat=$("#replacebox_"+r).val(),x=x.replace(new RegExp(RegExp.escape(FindWhat),"g"),ReplaceWhat);area.val(x),Remember(),Toast("Text Cleaned")}),area.on("change keyup",function(){Remember()}),$("#undo").on("click",function(){Undo()});var History=function(){var u=[],t=0;return{remember:function(e){u[t-1]!==e&&(u.splice(t,20),u.push(e),u.splice(0,u.length-20),t=u.length)},undo:function(){if(1<t)return u[--t-1]},forget:function(){u=[]}}}();function Remember(){var e=area.val();History.remember(e)}function Forget(){History.forget()}function Undo(){var e=History.undo();void 0!==e&&area.val(e)}function deselectCheckboxes(){$("input:checkbox").prop("checked",!1).removeAttr("disabled"),$("#case_none").prop("checked",!0)}function repeatStr(e,u){return 0==u?"":u<=1?e:e+repeatStr(e,u-1)}function SpacestoTab(e,u){for(var t="",r=0;r<u;r++)t+=" ";var n=new RegExp(t,"g");return delete t,e=e.replace(n,"\t")}function uniqArray(e){for(var u={},t=[],r=0,n=0;n<e.length;n++){var c=e[n];1!==u[c]&&(u[c]=1,t[r++]=c)}return t}function unescapeHTML(e){var u=document.createElement("textarea");return u.innerHTML=e,u.textContent}function stripHTMLTags(e){var u=$(document.createElement("div"));return u.html(e),u.text()}function stripHTMLids(e){var u=$(document.createElement("div"));return u.html(e),u.find("*").removeAttr("id"),u.html()}function stripHTMLclasses(e){var u=$(document.createElement("div"));return u.html(e),u.find("*").removeAttr("class"),u.html()}function stripInlineStyles(e){var u=$(document.createElement("div"));return u.html(e),u.find("*").removeAttr("style"),u.html()}function decodeEntities(e){var u=document.createElement("textarea");return u.innerHTML=e,u.value}function wordCase(e){var u=e.split(" "),t="";for(i=0;i<u.length;i++)lowerWord=u[i].toLowerCase(),lowerWord=lowerWord.trim(),capitalizedWord=lowerWord.slice(0,1).toUpperCase()+lowerWord.slice(1),t+=capitalizedWord,i!=u.length-1&&(t+=" ");return t[t.length-1]="",t}function StraightenQuotes(e){return e.replace(/‘|’/g,"'").replace(/“|”/g,'"').replace(/′/g,"'").replace(/″/g,'"').replace(/‴/g,"'''")}function SmartenQuotes(e){return e.replace(/(\W|^)"(\S)/g,"$1“$2").replace(/(“[^"]*)"([^"]*$|[^“"]*“)/g,"$1”$2").replace(/([^0-9])"/g,"$1”").replace(/(\W|^)'(\S)/g,"$1‘$2").replace(/([a-z])'([a-z])/gi,"$1’$2").replace(/((‘[^']*)|[a-z])'([^0-9]|$)/gi,"$1’$3").replace(/(‘)([0-9]{2}[^’]*)(‘([^0-9]|$)|$|’[a-z])/gi,"’$2$3").replace(/(\B|^)‘(?=([^’]*’\b)*([^’‘]*\W[’‘]\b|[^’‘]*$))/gi,"$1’").replace(/'''/g,"‴").replace(/("|'')/g,"″").replace(/'/g,"′")}function load_fnr(){for(var e=0;e<localStorage.length;e++)if("fnr_item_"==localStorage.key(e).substring(0,9)){var u=localStorage.key(e).slice(9),t=JSON.parse(localStorage.getItem(localStorage.key(e)));$("#fnr_body").append('<tr id="fnr_item_'+u+'"><td><input id="findbox_'+u+'" class="form-control form-control-sm w-100" value="'+t.find+'" type="text"></td><td><i class="oct i-arrow"></i></td><td><input id="replacebox_'+u+'" class="form-control form-control-sm w-100" value="'+t.replace+'" type="text"></td><td><button class="btn btn-light btn-sm" type="button"><i class="oct i-remove"></i></button></td></tr>')}}function save_config(){var t=[];$("input").each(function(e,u){$(this).is(":checkbox")||$(this).is(":radio")?t.push(u.checked):$(this).is('input[type="number"]')&&t.push(u.value)}),localStorage.setItem("config",JSON.stringify(t))}function load_config(){var t=$.parseJSON(localStorage.getItem("config"));$("input").each(function(e,u){$(this).is(":checkbox")||$(this).is(":radio")?u.checked=t[e]:$(this).is('input[type="number"]')&&(u.value=t[e])})}function default_config(){$("#trim_yes, #trim_lead, #trim_trail, #crunch_space, #crunch_line, #del_emj, #normalize_letters, #del_non_ascii, #del_unk, #unescape_html, #decode_entities, #curly_straight, #fix_punc_space").prop("checked",!0),$("#straight_curly").attr("disabled","disabled"),$("#case_sentence").prop("checked",!0),$("#num_st").val(4),$("#num_ts").val(1),$("#num_trim_left, #num_trim_right").val(3)}function toggleWrap(){$("#isWrap").prop("checked")?area.removeClass("wrap-off"):area.addClass("wrap-off")}$(".grouped input:checkbox").on("change",function(){$(this).is(":checked")?$(this).parent().siblings().children("input:checkbox").attr("disabled","disabled").attr("checked",!1):$(this).parent().siblings().children("input:checkbox").removeAttr("disabled")}),$("#select_all").on("click",function(){$("input:checkbox").prop("checked",!0),$(".grouped .checkbox:not(:first-child)").children("input:checkbox").attr("disabled","disabled"),$("#case_sentence").prop("checked",!0)}),$("#select_none").on("click",function(){deselectCheckboxes()}),$("#select_default").on("click",function(){deselectCheckboxes(),default_config()}),$(".clipboard").on("click",function(){area.select().focus(),document.execCommand("copy"),$(this).attr("aria-label","Copied")}),$(".clipboard").on("mouseenter",function(){$(this).attr("aria-label","Copy to clipboard")}),$("#fnr_add").on("click",function(){if(0==$("#fnr_body").children().length)var e=0;else e=$("#fnr_body").children().last().attr("id").slice(9);var u=parseFloat(e)+1,t={find:"",replace:""};localStorage.setItem("fnr_item_"+u,JSON.stringify(t)),$("#fnr_body").append('<tr id="fnr_item_'+u+'"><td><input id="findbox_'+u+'" class="form-control form-control-sm w-100" value="" type="text"></td><td><i class="oct i-arrow"></i></td><td><input id="replacebox_'+u+'" class="form-control form-control-sm w-100" value="" type="text"></td><td><button class="btn btn-light btn-sm" type="button"><i class="oct i-remove"></i></button></td></tr>')}),$(document).ready(function(){$("#fnr_body").on("click",".btn",function(){$(this).parents("tr").remove();var e=$(this).parents("tr").attr("id");localStorage.removeItem(e)})}),$(document).ready(function(){$("#fnr_body").on("keyup","input",function(){var e=$(this).parents("tr").attr("id"),u=e.slice(9),t={find:$("#findbox_"+u).val(),replace:$("#replacebox_"+u).val()};localStorage.setItem(e,JSON.stringify(t))})}),load_fnr(),localStorage.getItem("config")?load_config():default_config(),$("input").on("change keyup",function(){save_config()}),$("#select_all, #select_none, #select_default").on("click",function(){save_config()}),toggleWrap(),$("#isWrap").on("click",function(){toggleWrap()});
