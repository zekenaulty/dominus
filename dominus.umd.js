(function(b,d){typeof exports=="object"&&typeof module<"u"?d(exports):typeof define=="function"&&define.amd?define(["exports"],d):(b=typeof globalThis<"u"?globalThis:b||self,d(b.DOMINUS={}))})(this,function(b){"use strict";var h=Object.defineProperty;var v=(b,d,t)=>d in b?h(b,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):b[d]=t;var p=(b,d,t)=>v(b,typeof d!="symbol"?d+"":d,t);const t=class t{static switchTheme(e="darkly"){const s=`https://cdn.jsdelivr.net/npm/bootswatch@5/dist/${e}/bootstrap.min.css`;t.currentThemeLink?t.currentThemeLink.href=s:t.currentThemeLink=t.stylesheet(s,"bootswatch-theme")}static stylesheet(e,s){let a=document.getElementById(s);return a?a.href=e:(a=document.createElement("link"),a.id=s,a.rel="stylesheet",a.href=e,t.head.appendChild(a)),a}static get head(){return document.head}static get body(){return document.body}static element(e,s={}){const{parent:a,classes:n,text:r,html:l,attributes:c,events:i,children:u}=s,o=document.createElement(e);return r&&(o.textContent=r),l&&(o.innerHTML=l),n&&t.addClasses(o,n),c&&t.addAttributes(o,c),i&&t.addEvents(o,i),u&&u.forEach(m=>{t.append(m,o)}),a&&t.append(o,a),o}static addAttributes(e,s){Object.keys(s).forEach(a=>{e.setAttribute(a,s[a])})}static addEvents(e,s){Object.keys(s).forEach(a=>{e.addEventListener(a,s[a])})}static addClasses(e,s){Array.isArray(s)?e.classList.add(...s):s&&e.classList.add(s)}static append(e,s){(s||t.body).appendChild(e)}static remove(e){e&&e.parentNode&&e.parentNode.removeChild(e)}static utilityClasses(e={}){return[]}static container(e={}){const{fluid:s}=e,a=["container"];return s&&a.push("container-fluid"),t.element("div",{...e,classes:a})}static row(e={}){const s=["row",...e.classes||[]];return t.element("div",{...e,classes:s})}static col(e={}){const{size:s}=e,a=s?[`col-${s}`]:["col"];return e.classes&&a.push(...e.classes),t.element("div",{...e,classes:a})}static typography(e,s={}){return t.element(e,s)}static image(e={}){const{src:s,alt:a,classes:n}=e;return t.element("img",{...e,classes:["img-fluid",...n||[]],attributes:{src:s,alt:a}})}static table(e={}){const s=["table",...e.classes||[]];return t.element("table",{...e,classes:s})}static figure(e={}){return t.element("figure",e)}static form(e={}){return t.element("form",e)}static formGroup(e={}){return t.element("div",{...e,classes:["mb-3",...e.classes||[]]})}static input(e={}){const{type:s="text",value:a,placeholder:n,name:r,id:l}=e;return t.element("input",{...e,attributes:{type:s,value:a,placeholder:n,name:r,id:l},classes:["form-control",...e.classes||[]]})}static select(e={}){return t.element("select",{...e,classes:["form-select",...e.classes||[]]})}static option(e={}){const{value:s,text:a,selected:n}=e,r={value:s};return n&&(r.selected="selected"),t.element("option",{...e,text:a,attributes:r})}static textarea(e={}){const{placeholder:s,name:a,id:n,rows:r}=e;return t.element("textarea",{...e,attributes:{placeholder:s,name:a,id:n,rows:r},classes:["form-control",...e.classes||[]]})}static checkbox(e={}){const{labelText:s,name:a,id:n,checked:r}=e,l=t.element("div",{classes:["form-check"]}),c=t.element("input",{parent:l,attributes:{type:"checkbox",name:a,id:n},classes:["form-check-input"]});return r&&(c.checked=!0),t.element("label",{parent:l,attributes:{for:n},classes:["form-check-label"],text:s}),l}static radio(e={}){const{labelText:s,name:a,id:n,value:r,checked:l}=e,c=t.element("div",{classes:["form-check"]}),i=t.element("input",{parent:c,attributes:{type:"radio",name:a,id:n,value:r},classes:["form-check-input"]});return l&&(i.checked=!0),t.element("label",{parent:c,attributes:{for:n},classes:["form-check-label"],text:s}),c}static inputGroup(e={}){return t.element("div",{...e,classes:["input-group",...e.classes||[]]})}static floatingLabel(e={}){const{labelText:s,inputElement:a}=e,n=t.element("div",{classes:["form-floating"]});return a&&t.append(a,n),t.element("label",{parent:n,text:s}),n}static alert(e={}){const{text:s,dismissible:a}=e,n=["alert","alert-warning",...e.classes||[]];a&&n.push("alert-dismissible","fade","show");const r=t.element("div",{...e,classes:n,text:s});return a&&t.element("button",{parent:r,classes:["btn-close"],attributes:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}}),r}static badge(e={}){const{text:s}=e,a=["badge","bg-primary",...e.classes||[]];return t.element("span",{...e,classes:a,text:s})}static breadcrumb(e={}){const s=t.element("nav",{attributes:{"aria-label":"breadcrumb"},...e}),a=t.element("ol",{parent:s,classes:["breadcrumb"]});return e.items&&Array.isArray(e.items)&&e.items.forEach(n=>{const r=["breadcrumb-item"];n.active&&r.push("active");const l=t.element("li",{parent:a,classes:r});n.href?t.element("a",{parent:l,attributes:{href:n.href},text:n.text}):l.textContent=n.text}),s}static button(e={}){const s=["btn",...e.classes||["btn-primary"]];return t.element("button",{...e,classes:s})}static buttonGroup(e={}){const s=["btn-group",...e.classes||[]],a={role:"group",...e.attributes||{}};return t.element("div",{...e,classes:s,attributes:a})}static card(e={}){return t.element("div",{...e,classes:["card",...e.classes||[]]})}static carousel(e={}){const{id:s,items:a,controls:n,indicators:r}=e,l=t.element("div",{classes:["carousel","slide"],attributes:{"data-bs-ride":"carousel",id:s}});if(r&&a&&a.length>0){const i=t.element("ol",{parent:l,classes:["carousel-indicators"]});a.forEach((u,o)=>{t.element("li",{parent:i,attributes:{"data-bs-target":`#${s}`,"data-bs-slide-to":o},classes:o===0?["active"]:[]})})}const c=t.element("div",{parent:l,classes:["carousel-inner"]});return a&&a.length>0&&a.forEach((i,u)=>{const o=["carousel-item"];u===0&&o.push("active");const m=t.element("div",{parent:c,classes:o});if(i.imgSrc&&t.element("img",{parent:m,classes:["d-block","w-100"],attributes:{src:i.imgSrc,alt:i.alt}}),i.caption){const f=t.element("div",{parent:m,classes:["carousel-caption"]});f.innerHTML=i.caption}}),n&&(t.element("a",{parent:l,classes:["carousel-control-prev"],attributes:{href:`#${s}`,role:"button","data-bs-slide":"prev"},children:[t.element("span",{classes:["carousel-control-prev-icon"],attributes:{"aria-hidden":"true"}}),t.element("span",{classes:["visually-hidden"],text:"Previous"})]}),t.element("a",{parent:l,classes:["carousel-control-next"],attributes:{href:`#${s}`,role:"button","data-bs-slide":"next"},children:[t.element("span",{classes:["carousel-control-next-icon"],attributes:{"aria-hidden":"true"}}),t.element("span",{classes:["visually-hidden"],text:"Next"})]})),l}static collapse(e={}){const{targetId:s,toggleText:a}=e,n=t.button({text:a||"Toggle",attributes:{"data-bs-toggle":"collapse","data-bs-target":`#${s}`,"aria-expanded":"false","aria-controls":s}}),r=t.element("div",{classes:["collapse"],attributes:{id:s},...e});return{button:n,content:r}}static dropdown(e={}){const{buttonText:s,menuItems:a}=e,n=t.element("div",{classes:["dropdown",...e.classes||[]]});t.button({parent:n,text:s,classes:["btn","dropdown-toggle"],attributes:{"data-bs-toggle":"dropdown","aria-expanded":"false"}});const r=t.element("ul",{parent:n,classes:["dropdown-menu"]});return a.forEach(l=>{const c=t.element("li",{parent:r});t.element("a",{parent:c,classes:["dropdown-item"],attributes:{href:l.href},text:l.text})}),n}static listGroup(e={}){const s=t.element("ul",{classes:["list-group",...e.classes||[]],...e});return e.items&&Array.isArray(e.items)&&e.items.forEach(a=>{const n=["list-group-item"];a.active&&n.push("active"),t.element("li",{parent:s,classes:n,text:a.text})}),s}static modal(e={}){const{id:s,title:a,bodyContent:n,footerContent:r,onClose:l}=e,c=t.element("div",{classes:["modal","fade"],attributes:{id:s,tabindex:"-1","aria-labelledby":`${s}Label`,"aria-hidden":"true"}}),i=t.element("div",{parent:c,classes:["modal-dialog"]}),u=t.element("div",{parent:i,classes:["modal-content"]});if(a){const m=t.element("div",{parent:u,classes:["modal-header"]});t.element("h5",{parent:m,classes:["modal-title"],attributes:{id:`${s}Label`},text:a}),t.element("button",{parent:m,classes:["btn-close"],attributes:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})}return n&&t.element("div",{parent:u,classes:["modal-body"],html:n}),r&&t.element("div",{parent:u,classes:["modal-footer"],html:r}),t.append(c,document.body),l&&c.addEventListener("hidden.bs.modal",l),new bootstrap.Modal(c).show(),c}static nav(e={}){const{items:s,tabs:a,pills:n}=e,r=["nav",...e.classes||[]];a&&r.push("nav-tabs"),n&&r.push("nav-pills");const l=t.element("ul",{classes:r,...e});return s&&Array.isArray(s)&&s.forEach(c=>{const i=["nav-item"],u=t.element("li",{parent:l,classes:i});t.element("a",{parent:u,classes:["nav-link",...c.active?["active"]:[]],attributes:{href:c.href},text:c.text})}),l}static navbar(e={}){const{brandText:s,brandHref:a,items:n}=e,r=t.element("nav",{classes:["navbar","navbar-expand-lg","navbar-light","bg-light"]}),l=t.container({parent:r});s&&t.element("a",{parent:l,classes:["navbar-brand"],attributes:{href:a||"#"},text:s}),t.element("button",{parent:l,classes:["navbar-toggler"],attributes:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},children:[t.element("span",{classes:["navbar-toggler-icon"]})]});const c=t.element("div",{parent:l,classes:["collapse","navbar-collapse"],attributes:{id:"navbarSupportedContent"}});if(n&&Array.isArray(n)){const i=t.element("ul",{parent:c,classes:["navbar-nav","me-auto","mb-2","mb-lg-0"]});n.forEach(u=>{const o=t.element("li",{parent:i,classes:["nav-item"]});t.element("a",{parent:o,classes:["nav-link",...u.active?["active"]:[]],attributes:{href:u.href},text:u.text})})}return r}static pagination(e={}){const{pages:s,currentPage:a}=e,n=t.element("ul",{classes:["pagination",...e.classes||[]],...e});for(let r=1;r<=s;r++){const l=["page-item"];r===a&&l.push("active");const c=t.element("li",{parent:n,classes:l});t.element("a",{parent:c,classes:["page-link"],attributes:{href:"#","data-page":r},text:r.toString(),events:e.pageClick?{click:e.pageClick}:{}})}return n}static progress(e={}){const{value:s,max:a}=e,n=t.element("div",{classes:["progress"],...e});return t.element("div",{parent:n,classes:["progress-bar"],attributes:{role:"progressbar",style:`width: ${s/a*100}%`,"aria-valuenow":s,"aria-valuemin":"0","aria-valuemax":a}}),n}static spinner(e={}){const{type:s="border",text:a}=e,n=[`spinner-${s}`,...e.classes||[]],r=t.element("div",{classes:n,attributes:{role:"status"},...e});return a&&t.element("span",{parent:r,classes:["visually-hidden"],text:a}),r}static toast(e={}){const{headerText:s,bodyText:a,delay:n=5e3}=e,r=t.element("div",{classes:["toast","fade","show"],attributes:{role:"alert","aria-live":"assertive","aria-atomic":"true"},...e}),l=t.element("div",{parent:r,classes:["toast-header"]});t.element("strong",{parent:l,classes:["me-auto"],text:s}),t.element("small",{parent:l,text:"Just now"}),t.element("button",{parent:l,classes:["btn-close"],attributes:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"}}),t.element("div",{parent:r,classes:["toast-body"],text:a});const c=document.querySelector(".toast-container")||t.element("div",{classes:["toast-container","position-fixed","bottom-0","end-0","p-3"],parent:t.body});return t.append(r,c),new bootstrap.Toast(r,{delay:n}).show(),r}static tooltip(e,s={}){const{title:a,placement:n}=s;return e.setAttribute("data-bs-toggle","tooltip"),e.setAttribute("data-bs-placement",n||"top"),e.setAttribute("title",a),new bootstrap.Tooltip(e)}static popover(e,s={}){const{title:a,content:n,placement:r}=s;return e.setAttribute("data-bs-toggle","popover"),e.setAttribute("data-bs-placement",r||"top"),e.setAttribute("title",a),e.setAttribute("data-bs-content",n),new bootstrap.Popover(e)}};p(t,"currentThemeLink",null);let d=t;b.DOM=d,Object.defineProperty(b,Symbol.toStringTag,{value:"Module"})});
