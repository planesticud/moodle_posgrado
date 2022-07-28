YUI.add("moodle-mod_bigbluebuttonbn-recordings",function(a,t){M.mod_bigbluebuttonbn=M.mod_bigbluebuttonbn||{},M.mod_bigbluebuttonbn.recordings={datasource:null,datatable:{},locale:"en",windowVideoPlay:null,table:null,bbbid:0,init:function(t){var e,i=t&&t.hide_table&&!0===t.hide_table;this.bbbid=t.bbbid,this.datasource=new a.DataSource.Get({source:M.cfg.wwwroot+"/mod/bigbluebuttonbn/bbb_ajax.php?sesskey="+M.cfg.sesskey+"&"}),(e=this).datasource.sendRequest({request:"id="+this.bbbid+"&action=recording_list_table",callback:{success:function(t){t=t.data;i||!1!==t.recordings_html||-1==t.profile_features.indexOf("all")&&-1==t.profile_features.indexOf("showrecordings")||(e.locale=t.locale,e.datatable.columns=t.data.columns,e.datatable.data=e.datatableInitFormatDates(t.data.data),e.datatableInit())}}}),(t=a.one("#bigbluebuttonbn_recordings_searchform"))&&t.delegate("click",function(t){t.preventDefault(),t.stopPropagation();var e=null;"searchsubmit"==t.target.get("id")?e=a.one("#searchtext").get("value"):a.one("#searchtext").set("value",""),this.filterByText(e)},"input[type=submit]",this),M.mod_bigbluebuttonbn.helpers.init()},datatableInitFormatDates:function(t){for(var e,i=0;i<t.length;i++)e=new Date(t[i].date),t[i].date=e.toLocaleDateString(this.locale,{weekday:"long",year:"numeric",month:"long",day:"numeric"});return t},initExtraLanguage:function(t){t.Intl.add("datatable-paginator",t.config.lang,{first:M.util.get_string("view_recording_yui_first","bigbluebuttonbn"),prev:M.util.get_string("view_recording_yui_prev","bigbluebuttonbn"),next:M.util.get_string("view_recording_yui_next","bigbluebuttonbn"),last:M.util.get_string("view_recording_yui_last","bigbluebuttonbn"),goToLabel:M.util.get_string("view_recording_yui_page","bigbluebuttonbn"),goToAction:M.util.get_string("view_recording_yui_go","bigbluebuttonbn"),perPage:M.util.get_string("view_recording_yui_rows","bigbluebuttonbn"),showAll:M.util.get_string("view_recording_yui_show_all","bigbluebuttonbn")})},escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filterByText:function(t){var e,i;this.table&&(this.table.set("data",this.datatable.data),t&&(e=this.table.data,i=new RegExp("<span>.*?"+this.escapeRegex(t)+".*?</span>","i"),t=e.filter({asList:!0},function(t){var e=t.get("recording"),t=t.get("description");return e&&i.test(e)||t&&i.test(t)}),this.table.set("data",t)))},datatableInit:function(){var e=this.datatable.columns,i=this.datatable.data,n=this.initExtraLanguage;YUI({lang:this.locale}).use("intl","datatable","datatable-sort","datatable-paginator","datatype-number",function(t){n(t);t=new t.DataTable({width:"1195px",columns:e,data:i,rowsPerPage:10,paginatorLocation:["header","footer"]}).render("#bigbluebuttonbn_recordings_table");return M.mod_bigbluebuttonbn.recordings.table=t})},recordingElementPayload:function(t){var t=a.one(t),e=t.ancestor("div");return{action:t.getAttribute("data-action"),recordingid:e.getAttribute("data-recordingid"),meetingid:e.getAttribute("data-meetingid")}},recordingAction:function(t,e,i){var n,o=this.recordingElementPayload(t);for(n in i)o[n]=i[n];e?new M.core.confirm({modal:!0,centered:!0,question:this.recordingConfirmationMessage(o)}).on("complete-yes",function(){this.recordingActionPerform(o)},this):this.recordingActionPerform(o)},recordingActionPerform:function(t){M.mod_bigbluebuttonbn.helpers.toggleSpinningWheelOn(t),M.mod_bigbluebuttonbn.broker.recordingActionPerform(t);var e=this;this.datasource.sendRequest({request:"&id="+this.bbbid+"&action=recording_list_table",callback:{success:function(t){t=t.data;!1!==t.recordings_html||-1==t.profile_features.indexOf("all")&&-1==t.profile_features.indexOf("showrecordings")||(e.locale=t.locale,e.datatable.columns=t.data.columns,e.datatable.data=e.datatableInitFormatDates(t.data.data))}}})},recordingPublish:function(t){this.recordingAction(t,!1,{source:"published",goalstate:"true"})},recordingUnpublish:function(t){this.recordingAction(t,!1,{source:"published",goalstate:"false"})},recordingProtect:function(t){this.recordingAction(t,!1,{source:"protected",goalstate:"true"})},recordingUnprotect:function(t){this.recordingAction(t,!1,{source:"protected",goalstate:"false"})},recordingDelete:function(t){var e={source:"found",goalstate:!1},i=!0;this.recordingIsImported(t)&&(i=!1,e.source="status",e.goalstate=!0,e.attempts=1),this.recordingAction(t,i,e)},recordingImport:function(t){this.recordingAction(t,!0,{})},recordingUpdate:function(t){var e=a.one(t),i=e.ancestor("div"),i={target:i.getAttribute("data-target"),source:i.getAttribute("data-source"),goalstate:e.getAttribute("data-goalstate")};this.recordingAction(t,!1,i)},recordingEdit:function(t){var e,t=a.one(t),i=t.ancestor("div"),n=i.one("> span");n.hide(),t.hide(),(e=a.Node.create('<input type="text" class="form-control"></input>')).setAttribute("id",t.getAttribute("id")),e.setAttribute("value",n.getHTML()),e.setAttribute("data-value",n.getHTML()),e.on("keydown",M.mod_bigbluebuttonbn.recordings.recordingEditKeydown),e.on("focusout",M.mod_bigbluebuttonbn.recordings.recordingEditOnfocusout),i.append(e),e.focus().select()},recordingEditKeydown:function(t){var e=t.which||t.keyCode;13!=e?27==e&&M.mod_bigbluebuttonbn.recordings.recordingEditOnfocusout(t.currentTarget):M.mod_bigbluebuttonbn.recordings.recordingEditPerform(t.currentTarget)},recordingEditOnfocusout:function(t){var e=t.ancestor("div");t.hide(),e.one("> span").show(),e.one("> a").show()},recordingEditPerform:function(t){var e=t.ancestor("div"),i=t.get("value").trim();t.setAttribute("data-action","edit"),t.setAttribute("data-goalstate",i),t.hide(),this.recordingUpdate(t.getDOMNode()),e.one("> span").setHTML(i).show(),e.one("> a").show()},recordingEditCompletion:function(t,e){var i=M.mod_bigbluebuttonbn.helpers.elementId(t.action,t.target),i=a.one("a#"+i+"-"+t.recordingid),t=i.ancestor("div"),i=t.one("> span");void 0!==i&&(t=t.one("> input"),e&&i.setHTML(t.getAttribute("data-value")),t.remove())},recordingPlay:function(t){var e=a.one(t);
""!==e.getAttribute("data-href")?(e={target:e.getAttribute("data-target"),source:"published",goalstate:"true",attempts:1,dataset:e.getData()},this.windowVideoPlay=window.open("","_blank"),this.windowVideoPlay.opener=null,this.recordingAction(t,!1,e)):M.mod_bigbluebuttonbn.helpers.alertError(M.util.get_string("view_recording_format_errror_unreachable","bigbluebuttonbn"))},recordingConfirmationMessage:function(t){var e,i,n=M.util.get_string("view_recording_"+t.action+"_confirmation","bigbluebuttonbn");return void 0===n?"":(e=M.util.get_string("view_recording","bigbluebuttonbn"),"true"===a.one("#playbacks-"+t.recordingid).get("dataset").imported&&(e=M.util.get_string("view_recording_link","bigbluebuttonbn")),n=n.replace("{$a}",e),"import"===t.action?n:(e=M.mod_bigbluebuttonbn.helpers.elementId(t.action,t.target),0===(e=a.one("a#"+e+"-"+t.recordingid).get("dataset").links)?n:(i=M.util.get_string("view_recording_"+t.action+"_confirmation_warning_p","bigbluebuttonbn"),(i=(i=1==e?M.util.get_string("view_recording_"+t.action+"_confirmation_warning_s","bigbluebuttonbn"):i).replace("{$a}",e)+". ")+"\n\n"+n)))},recordingActionCompletion:function(t){var e,i;if("delete"==t.action)return 1==(i=a.one("div#recording-actionbar-"+t.recordingid).ancestor("td").ancestor("tr")).ancestor("tbody").all("tr").size()?((e=a.one("#bigbluebuttonbn_view_recordings_content")).prepend("<span>"+M.util.get_string("view_message_norecordings","bigbluebuttonbn")+"</span>"),void e.one("#bigbluebuttonbn_recordings_table").remove()):void i.remove();if("import"!=t.action){if("play"==t.action)return M.mod_bigbluebuttonbn.helpers.toggleSpinningWheelOff(t),void(this.windowVideoPlay.location.href=t.dataset.href);M.mod_bigbluebuttonbn.helpers.updateData(t),M.mod_bigbluebuttonbn.helpers.toggleSpinningWheelOff(t),M.mod_bigbluebuttonbn.helpers.updateId(t),"publish"!==t.action?"unpublish"===t.action&&this.recordingUnpublishCompletion(t.recordingid):this.recordingPublishCompletion(t.recordingid)}else(i=a.one("div#recording-actionbar-"+t.recordingid).ancestor("td").ancestor("tr")).remove()},recordingActionFailover:function(t){M.mod_bigbluebuttonbn.helpers.alertError(t.message),M.mod_bigbluebuttonbn.helpers.toggleSpinningWheelOff(t),"edit"===t.action&&this.recordingEditCompletion(t,!0)},recordingPublishCompletion:function(t){var e=a.one("#playbacks-"+t);e.show(),null!==(e=a.one("#preview-"+t))&&(e.show(),M.mod_bigbluebuttonbn.helpers.reloadPreview(t))},recordingUnpublishCompletion:function(t){var e=a.one("#playbacks-"+t);e.hide(),null!==(e=a.one("#preview-"+t))&&e.hide()},recordingIsImported:function(t){t=a.one(t),t=t.ancestor("tr");return"true"===t.getAttribute("data-imported")}},M.mod_bigbluebuttonbn=M.mod_bigbluebuttonbn||{},M.mod_bigbluebuttonbn.helpers={elementTag:{},elementFaClass:{},elementActionReversed:{},init:function(){this.elementTag=this.initElementTag(),this.elementFaClass=this.initElementFAClass(),this.elementActionReversed=this.initElementActionReversed()},toggleSpinningWheelOn:function(t){var e=this.elementId(t.action,t.target),i=M.util.get_string("view_recording_list_action_"+t.action,"bigbluebuttonbn"),e=a.one("a#"+e+"-"+t.recordingid);e.setAttribute("data-onclick",e.getAttribute("onclick")),e.setAttribute("onclick",""),null!==(t=e.one("> i"))?(t.setAttribute("data-aria-label",t.getAttribute("aria-label")),t.setAttribute("aria-label",i),t.setAttribute("data-title",t.getAttribute("title")),t.setAttribute("title",i),t.setAttribute("data-class",t.getAttribute("class")),t.setAttribute("class",this.elementFaClass.process)):this.toggleSpinningWheelOnCompatible(e,i)},toggleSpinningWheelOnCompatible:function(t,e){t=t.one("> img");null!==t&&(t.setAttribute("data-alt",t.getAttribute("alt")),t.setAttribute("alt",e),t.setAttribute("data-title",t.getAttribute("title")),t.setAttribute("title",e),t.setAttribute("data-src",t.getAttribute("src")),t.setAttribute("src","pix/i/processing16.gif"))},toggleSpinningWheelOff:function(t){var e=this.elementId(t.action,t.target),e=a.one("a#"+e+"-"+t.recordingid);e.setAttribute("onclick",e.getAttribute("data-onclick")),e.removeAttribute("data-onclick"),null!==(t=e.one("> i"))?(t.setAttribute("aria-label",t.getAttribute("data-aria-label")),t.removeAttribute("data-aria-label"),t.setAttribute("title",t.getAttribute("data-title")),t.removeAttribute("data-title"),t.setAttribute("class",t.getAttribute("data-class")),t.removeAttribute("data-class")):this.toggleSpinningWheelOffCompatible(e.one("> img"))},toggleSpinningWheelOffCompatible:function(t){null!==t&&(t.setAttribute("alt",t.getAttribute("data-alt")),t.removeAttribute("data-alt"),t.setAttribute("title",t.getAttribute("data-title")),t.removeAttribute("data-title"),t.setAttribute("src",t.getAttribute("data-src")),t.removeAttribute("data-src"))},updateData:function(t){var e,i,n,o,r=this.elementActionReversed[t.action];r!==t.action&&(e=this.elementId(t.action,t.target),(e=a.one("a#"+e+"-"+t.recordingid)).setAttribute("data-action",r),n=e.getAttribute("data-onclick").replace(this.capitalize(t.action),this.capitalize(r)),e.setAttribute("data-onclick",n),n=M.util.get_string("view_recording_list_actionbar_"+r,"bigbluebuttonbn"),o=this.elementTag[r],null!==(i=e.one("> i"))?(i.setAttribute("data-aria-label",n),i.setAttribute("data-title",n),i.setAttribute("data-class",this.elementFaClass[r])):this.updateDataCompatible(e.one("> img"),this.elementTag[t.action],o,n))},updateDataCompatible:function(t,e,i,n){var o;null!==t&&(o=t.getAttribute("data-src"),t.setAttribute("data-alt",n),t.setAttribute("data-title",n),t.setAttribute("data-src",o.replace(i,e)))},updateId:function(t){var e,i,n=this.elementActionReversed[t.action];n!==t.action&&(i=this.elementId(t.action,t.target),e=a.one("a#"+i+"-"+t.recordingid),n=i.replace(t.action,n)+"-"+t.recordingid,e.setAttribute("id",n),(i=null===(i=e.one("> i"))?e.one("> img"):i).removeAttribute("id"))},elementId:function(t,e){t="recording-"+t;return void 0!==e&&(t+="-"+e),t},initElementTag:function(){var t={play:"play",
publish:"hide",unpublish:"show",protect:"lock",unprotect:"unlock",edit:"edit",process:"process","import":"import","delete":"delete"};return t},initElementFAClass:function(){var t={publish:"icon fa fa-eye-slash fa-fw iconsmall",unpublish:"icon fa fa-eye fa-fw iconsmall",protect:"icon fa fa-unlock fa-fw iconsmall",unprotect:"icon fa fa-lock fa-fw iconsmall",edit:"icon fa fa-pencil fa-fw iconsmall",process:"icon fa fa-spinner fa-spin iconsmall","import":"icon fa fa-download fa-fw iconsmall","delete":"icon fa fa-trash fa-fw iconsmall"};return t},initElementActionReversed:function(){var t={play:"play",publish:"unpublish",unpublish:"publish",protect:"unprotect",unprotect:"protect",edit:"edit","import":"import","delete":"delete"};return t},reloadPreview:function(t){a.one("#preview-"+t).all("> img").each(function(t){var e=(e=t.getAttribute("src")).substring(0,e.indexOf("?"));e+="?"+(new Date).getTime(),t.setAttribute("src",e)})},capitalize:function(t){return t.charAt(0).toUpperCase()+t.slice(1)},alertError:function(t,e){void 0===e&&(e="error"),new M.core.alert({title:M.util.get_string(e,"moodle"),message:t}).show()}}},"@VERSION@",{requires:["base","node","datasource-get","datasource-jsonschema","datasource-polling","moodle-core-notification"]});