(function(t){function e(e){for(var n,s,l=e[0],o=e[1],c=e[2],p=0,u=[];p<l.length;p++)s=l[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var o=a[l];0!==r[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("div",{staticClass:"card p-3 shadow-sm"},[a("div",{staticClass:"form-group"},[a("label",[t._v("Title")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"form-control",attrs:{type:"text",id:"id_title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Description")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",id:"id_description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",[t._v("Link")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.link,expression:"link"}],staticClass:"form-control",attrs:{type:"text",id:"id_link"},domProps:{value:t.link},on:{input:function(e){e.target.composing||(t.link=e.target.value)}}})]),a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"form-check-input",attrs:{type:"checkbox",value:"internal_link",id:"defaultCheck1"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,"internal_link")>-1:t.checked},on:{change:function(e){var a=t.checked,n=e.target,r=!!n.checked;if(Array.isArray(a)){var i="internal_link",s=t._i(a,i);n.checked?s<0&&(t.checked=a.concat([i])):s>-1&&(t.checked=a.slice(0,s).concat(a.slice(s+1)))}else t.checked=r}}}),a("label",{staticClass:"form-check-label",attrs:{for:"defaultCheck1"}},[t._v(" Internal Link ")])]),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary mr-1",on:{click:t.addName}},[t._v("Add Link")]),a("button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:'<table class=" table table-valign-middle table-sm table-hover">\n\t<tbody>'+t.paragraph+"\t</tbody>\n</table>\n",expression:"\n                        '<table class=\" table table-valign-middle table-sm table-hover\">\\n' + '\\t<tbody>' + paragraph + '\\t</tbody>\\n' + '</table>\\n'",arg:"copy"}],staticClass:"btn btn-secondary"},[t._v(" Copy Text ")])])])]),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card shadow-sm p-3 mb-3"},[a("label",[t._v("HTML Result")]),a("hr"),a("pre",{attrs:{id:"code"}},[t._v('<table class="table table-valign-middle table-sm table-hover">\n\t<tbody>\n                        '),a("hr"),t._v("\n"+t._s(t.paragraph)+"\n                        "),a("hr"),t._v("\n\t</tbody>\n</table>")])]),a("div",{staticClass:"alert alert-info"},[t._v(" Each link goes between <tr> or 'table row' tags, while all links go between one <table> and <body> tag. (should this helptext be moved to the top so that it's always visible when undergrads scroll back up to copy-paste? ")])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center py-5"},[a("h1",[t._v("Download-Link Generator")])])])}],s=(a("a4d3"),a("e01a"),a("9911"),{name:"App",mounted:function(){},methods:{addName:function(){1==this.checked?this.paragraph+='\n\t\t<tr class="no-border">\n\t\t<td class="text-muted download-td"><i class="fa fa-file-text-o"></i></td>\n\t\t<th>\n\t\t\t'+this.title+'\n\t\t\t<div>\n\t\t\t\t<a class="text-sm text-muted font-normal" href="/'+this.link+'">'+this.description+'</a>\n\t\t\t</div>\n\t\t</th>\n\t\t<td class="text-right"><a href="/'+this.link+'" class="btn btn-primary"><i class="fa fa-download"></i></a></td>\n\t\t</tr>\n':this.paragraph+='\n\t\t<tr class="no-border">\n\t\t<td class="text-muted download-td"><i class="fa fa-file-text-o"></i></td>\n\t\t<th>\n\t\t\t<a href="'+this.link+'">'+this.title+'</a>\n\t\t\t<div>\n\t\t\t\t<a class="text-sm text-muted font-normal" href="'+this.link+'">'+this.description+'</a>\n\t\t\t</div>\n\t\t</th>\n\t\t<td class="text-right"><a href="'+this.link+'" class="btn btn-primary"><i class="fa fa-download"></i></a></td>\n\t\t</tr>\n'}},data:function(){return{title:"",description:"",link:"",paragraph:"",checked:""}}}),l=s,o=(a("034f"),a("2877")),c=Object(o["a"])(l,r,i,!1,null,null,null),d=c.exports,p=a("3664"),u=a.n(p);n["a"].use(u.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(d)}}).$mount("#root")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.24611eb4.js.map