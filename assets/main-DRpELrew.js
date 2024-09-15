var v=Object.defineProperty;var y=(l,t,e)=>t in l?v(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var f=(l,t,e)=>y(l,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const a=class a{static switchTheme(t="darkly"){const e=`https://cdn.jsdelivr.net/npm/bootswatch@5/dist/${t}/bootstrap.min.css`;a.currentThemeLink?a.currentThemeLink.href=e:a.currentThemeLink=a.stylesheet(e,"bootswatch-theme")}static stylesheet(t,e){let s=document.getElementById(e);return s?s.href=t:(s=document.createElement("link"),s.id=e,s.rel="stylesheet",s.href=t,a.head.appendChild(s)),s}static get head(){return document.head}static get body(){return document.body}static element(t,e={}){const{parent:s,classes:n,text:r,html:c,attributes:i,events:d,children:p}=e,m=document.createElement(t);return r&&(m.textContent=r),c&&(m.innerHTML=c),n&&a.addClasses(m,n),i&&a.addAttributes(m,i),d&&a.addEvents(m,d),p&&p.forEach(b=>{a.append(b,m)}),s&&a.append(m,s),m}static addAttributes(t,e){Object.keys(e).forEach(s=>{t.setAttribute(s,e[s])})}static addEvents(t,e){Object.keys(e).forEach(s=>{t.addEventListener(s,e[s])})}static addClasses(t,e){Array.isArray(e)?t.classList.add(...e):e&&t.classList.add(e)}static append(t,e){(e||a.body).appendChild(t)}static remove(t){t&&t.parentNode&&t.parentNode.removeChild(t)}static utilityClasses(t={}){return[]}static container(t={}){const{fluid:e}=t,s=["container"];return e&&s.push("container-fluid"),a.element("div",{...t,classes:s})}static row(t={}){const e=["row",...t.classes||[]];return a.element("div",{...t,classes:e})}static col(t={}){const{size:e}=t,s=e?[`col-${e}`]:["col"];return t.classes&&s.push(...t.classes),a.element("div",{...t,classes:s})}static typography(t,e={}){return a.element(t,e)}static image(t={}){const{src:e,alt:s,classes:n}=t;return a.element("img",{...t,classes:["img-fluid",...n||[]],attributes:{src:e,alt:s}})}static table(t={}){const e=["table",...t.classes||[]];return a.element("table",{...t,classes:e})}static figure(t={}){return a.element("figure",t)}static form(t={}){return a.element("form",t)}static formGroup(t={}){return a.element("div",{...t,classes:["mb-3",...t.classes||[]]})}static input(t={}){const{type:e="text",value:s,placeholder:n,name:r,id:c}=t;return a.element("input",{...t,attributes:{type:e,value:s,placeholder:n,name:r,id:c},classes:["form-control",...t.classes||[]]})}static select(t={}){return a.element("select",{...t,classes:["form-select",...t.classes||[]]})}static option(t={}){const{value:e,text:s,selected:n}=t,r={value:e};return n&&(r.selected="selected"),a.element("option",{...t,text:s,attributes:r})}static textarea(t={}){const{placeholder:e,name:s,id:n,rows:r}=t;return a.element("textarea",{...t,attributes:{placeholder:e,name:s,id:n,rows:r},classes:["form-control",...t.classes||[]]})}static checkbox(t={}){const{labelText:e,name:s,id:n,checked:r}=t,c=a.element("div",{classes:["form-check"]}),i=a.element("input",{parent:c,attributes:{type:"checkbox",name:s,id:n},classes:["form-check-input"]});return r&&(i.checked=!0),a.element("label",{parent:c,attributes:{for:n},classes:["form-check-label"],text:e}),c}static radio(t={}){const{labelText:e,name:s,id:n,value:r,checked:c}=t,i=a.element("div",{classes:["form-check"]}),d=a.element("input",{parent:i,attributes:{type:"radio",name:s,id:n,value:r},classes:["form-check-input"]});return c&&(d.checked=!0),a.element("label",{parent:i,attributes:{for:n},classes:["form-check-label"],text:e}),i}static inputGroup(t={}){return a.element("div",{...t,classes:["input-group",...t.classes||[]]})}static floatingLabel(t={}){const{labelText:e,inputElement:s}=t,n=a.element("div",{classes:["form-floating"]});return s&&a.append(s,n),a.element("label",{parent:n,text:e}),n}static alert(t={}){const{text:e,dismissible:s}=t,n=["alert","alert-warning",...t.classes||[]];s&&n.push("alert-dismissible","fade","show");const r=a.element("div",{...t,classes:n,text:e});return s&&a.element("button",{parent:r,classes:["btn-close"],attributes:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}}),r}static badge(t={}){const{text:e}=t,s=["badge","bg-primary",...t.classes||[]];return a.element("span",{...t,classes:s,text:e})}static breadcrumb(t={}){const e=a.element("nav",{attributes:{"aria-label":"breadcrumb"},...t}),s=a.element("ol",{parent:e,classes:["breadcrumb"]});return t.items&&Array.isArray(t.items)&&t.items.forEach(n=>{const r=["breadcrumb-item"];n.active&&r.push("active");const c=a.element("li",{parent:s,classes:r});n.href?a.element("a",{parent:c,attributes:{href:n.href},text:n.text}):c.textContent=n.text}),e}static button(t={}){const e=["btn",...t.classes||["btn-primary"]];return a.element("button",{...t,classes:e})}static buttonGroup(t={}){const e=["btn-group",...t.classes||[]],s={role:"group",...t.attributes||{}};return a.element("div",{...t,classes:e,attributes:s})}static card(t={}){return a.element("div",{...t,classes:["card",...t.classes||[]]})}static carousel(t={}){const{id:e,items:s,controls:n,indicators:r}=t,c=a.element("div",{classes:["carousel","slide"],attributes:{"data-bs-ride":"carousel",id:e}});if(r&&s&&s.length>0){const d=a.element("ol",{parent:c,classes:["carousel-indicators"]});s.forEach((p,m)=>{a.element("li",{parent:d,attributes:{"data-bs-target":`#${e}`,"data-bs-slide-to":m},classes:m===0?["active"]:[]})})}const i=a.element("div",{parent:c,classes:["carousel-inner"]});return s&&s.length>0&&s.forEach((d,p)=>{const m=["carousel-item"];p===0&&m.push("active");const b=a.element("div",{parent:i,classes:m});if(d.imgSrc&&a.element("img",{parent:b,classes:["d-block","w-100"],attributes:{src:d.imgSrc,alt:d.alt}}),d.caption){const g=a.element("div",{parent:b,classes:["carousel-caption"]});g.innerHTML=d.caption}}),n&&(a.element("a",{parent:c,classes:["carousel-control-prev"],attributes:{href:`#${e}`,role:"button","data-bs-slide":"prev"},children:[a.element("span",{classes:["carousel-control-prev-icon"],attributes:{"aria-hidden":"true"}}),a.element("span",{classes:["visually-hidden"],text:"Previous"})]}),a.element("a",{parent:c,classes:["carousel-control-next"],attributes:{href:`#${e}`,role:"button","data-bs-slide":"next"},children:[a.element("span",{classes:["carousel-control-next-icon"],attributes:{"aria-hidden":"true"}}),a.element("span",{classes:["visually-hidden"],text:"Next"})]})),c}static collapse(t={}){const{targetId:e,toggleText:s}=t,n=a.button({text:s||"Toggle",attributes:{"data-bs-toggle":"collapse","data-bs-target":`#${e}`,"aria-expanded":"false","aria-controls":e}}),r=a.element("div",{classes:["collapse"],attributes:{id:e},...t});return{button:n,content:r}}static dropdown(t={}){const{buttonText:e,menuItems:s}=t,n=a.element("div",{classes:["dropdown",...t.classes||[]]});a.button({parent:n,text:e,classes:["btn","dropdown-toggle"],attributes:{"data-bs-toggle":"dropdown","aria-expanded":"false"}});const r=a.element("ul",{parent:n,classes:["dropdown-menu"]});return s.forEach(c=>{const i=a.element("li",{parent:r});a.element("a",{parent:i,classes:["dropdown-item"],attributes:{href:c.href},text:c.text})}),n}static listGroup(t={}){const e=a.element("ul",{classes:["list-group",...t.classes||[]],...t});return t.items&&Array.isArray(t.items)&&t.items.forEach(s=>{const n=["list-group-item"];s.active&&n.push("active"),a.element("li",{parent:e,classes:n,text:s.text})}),e}static modal(t={}){const{id:e,title:s,bodyContent:n,footerContent:r,onClose:c}=t,i=a.element("div",{classes:["modal","fade"],attributes:{id:e,tabindex:"-1","aria-labelledby":`${e}Label`,"aria-hidden":"true"}}),d=a.element("div",{parent:i,classes:["modal-dialog"]}),p=a.element("div",{parent:d,classes:["modal-content"]});if(s){const b=a.element("div",{parent:p,classes:["modal-header"]});a.element("h5",{parent:b,classes:["modal-title"],attributes:{id:`${e}Label`},text:s}),a.element("button",{parent:b,classes:["btn-close"],attributes:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})}return n&&a.element("div",{parent:p,classes:["modal-body"],html:n}),r&&a.element("div",{parent:p,classes:["modal-footer"],html:r}),a.append(i,document.body),c&&i.addEventListener("hidden.bs.modal",c),new bootstrap.Modal(i).show(),i}static nav(t={}){const{items:e,tabs:s,pills:n}=t,r=["nav",...t.classes||[]];s&&r.push("nav-tabs"),n&&r.push("nav-pills");const c=a.element("ul",{classes:r,...t});return e&&Array.isArray(e)&&e.forEach(i=>{const d=["nav-item"],p=a.element("li",{parent:c,classes:d});a.element("a",{parent:p,classes:["nav-link",...i.active?["active"]:[]],attributes:{href:i.href},text:i.text})}),c}static navbar(t={}){const{brandText:e,brandHref:s,items:n}=t,r=a.element("nav",{classes:["navbar","navbar-expand-lg","navbar-light","bg-light"]}),c=a.container({parent:r});e&&a.element("a",{parent:c,classes:["navbar-brand"],attributes:{href:s||"#"},text:e}),a.element("button",{parent:c,classes:["navbar-toggler"],attributes:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},children:[a.element("span",{classes:["navbar-toggler-icon"]})]});const i=a.element("div",{parent:c,classes:["collapse","navbar-collapse"],attributes:{id:"navbarSupportedContent"}});if(n&&Array.isArray(n)){const d=a.element("ul",{parent:i,classes:["navbar-nav","me-auto","mb-2","mb-lg-0"]});n.forEach(p=>{const m=a.element("li",{parent:d,classes:["nav-item"]});a.element("a",{parent:m,classes:["nav-link",...p.active?["active"]:[]],attributes:{href:p.href},text:p.text})})}return r}static pagination(t={}){const{pages:e,currentPage:s}=t,n=a.element("ul",{classes:["pagination",...t.classes||[]],...t});for(let r=1;r<=e;r++){const c=["page-item"];r===s&&c.push("active");const i=a.element("li",{parent:n,classes:c});a.element("a",{parent:i,classes:["page-link"],attributes:{href:"#","data-page":r},text:r.toString(),events:t.pageClick?{click:t.pageClick}:{}})}return n}static progress(t={}){const{value:e,max:s}=t,n=a.element("div",{classes:["progress"],...t});return a.element("div",{parent:n,classes:["progress-bar"],attributes:{role:"progressbar",style:`width: ${e/s*100}%`,"aria-valuenow":e,"aria-valuemin":"0","aria-valuemax":s}}),n}static spinner(t={}){const{type:e="border",text:s}=t,n=[`spinner-${e}`,...t.classes||[]],r=a.element("div",{classes:n,attributes:{role:"status"},...t});return s&&a.element("span",{parent:r,classes:["visually-hidden"],text:s}),r}static toast(t={}){const{headerText:e,bodyText:s,delay:n=5e3}=t,r=a.element("div",{classes:["toast","fade","show"],attributes:{role:"alert","aria-live":"assertive","aria-atomic":"true"},...t}),c=a.element("div",{parent:r,classes:["toast-header"]});a.element("strong",{parent:c,classes:["me-auto"],text:e}),a.element("small",{parent:c,text:"Just now"}),a.element("button",{parent:c,classes:["btn-close"],attributes:{type:"button","data-bs-dismiss":"toast","aria-label":"Close"}}),a.element("div",{parent:r,classes:["toast-body"],text:s});const i=document.querySelector(".toast-container")||a.element("div",{classes:["toast-container","position-fixed","bottom-0","end-0","p-3"],parent:a.body});return a.append(r,i),new bootstrap.Toast(r,{delay:n}).show(),r}static tooltip(t,e={}){const{title:s,placement:n}=e;return t.setAttribute("data-bs-toggle","tooltip"),t.setAttribute("data-bs-placement",n||"top"),t.setAttribute("title",s),new bootstrap.Tooltip(t)}static popover(t,e={}){const{title:s,content:n,placement:r}=e;return t.setAttribute("data-bs-toggle","popover"),t.setAttribute("data-bs-placement",r||"top"),t.setAttribute("title",s),t.setAttribute("data-bs-content",n),new bootstrap.Popover(t)}};f(a,"currentThemeLink",null);let o=a;o.switchTheme("darkly");const x=document.getElementById("theme-selector");x.addEventListener("change",l=>{const t=l.target.value;o.switchTheme(t)});const h=o.container({parent:o.body,classes:["mt-4"]});o.typography("h1",{parent:h,text:"dom.js Complete Demo",classes:["text-center","mb-4"]});const C=o.element("ul",{parent:h,classes:["nav","nav-tabs"],attributes:{role:"tablist"}}),w=o.element("div",{parent:h,classes:["tab-content"]}),M=[{id:"overview",title:"Overview",content:T},{id:"buttons",title:"Buttons",content:k},{id:"forms",title:"Forms",content:D},{id:"navigation",title:"Navigation",content:O},{id:"modals",title:"Modals",content:E},{id:"components",title:"Components",content:S},{id:"theme-switching",title:"Theme Switching",content:A},{id:"dynamic-content",title:"Dynamic Content",content:L}];M.forEach((l,t)=>{const e=o.element("li",{parent:C,classes:["nav-item"],attributes:{role:"presentation"}});o.element("button",{parent:e,classes:["nav-link",...t===0?["active"]:[]],attributes:{id:`${l.id}-tab`,"data-bs-toggle":"tab","data-bs-target":`#${l.id}`,type:"button",role:"tab","aria-controls":l.id,"aria-selected":t===0?"true":"false"},text:l.title});const s=o.element("div",{parent:w,classes:["tab-pane","fade",...t===0?["show","active"]:[]],attributes:{id:l.id,role:"tabpanel","aria-labelledby":`${l.id}-tab`}});l.content(s)});function T(l){o.typography("h3",{parent:l,text:"Welcome to dom.js",classes:["mb-3"]}),o.typography("p",{parent:l,text:"dom.js is a lightweight and comprehensive HTML5 DOM wrapper for building Bootstrap 5 components with ease."}),o.typography("p",{parent:l,text:"This demo showcases various components and features available in dom.js."})}function k(l){o.typography("h3",{parent:l,text:"Buttons",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Create Bootstrap buttons easily using dom.js."});const t=o.buttonGroup({parent:l});["Primary","Secondary","Success","Danger","Warning","Info","Light","Dark"].forEach(s=>{const n=`btn-${s.toLowerCase()}`;o.button({parent:t,text:s,classes:["btn",n],attributes:{type:"button"}})}),u(l,`
// Button examples
const buttonGroup = DOM.buttonGroup({ parent });
['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'].forEach((type) => {
  const btnClass = \`btn-\${type.toLowerCase()}\`;
  DOM.button({
    parent: buttonGroup,
    text: type,
    classes: ['btn', btnClass],
    attributes: { type: 'button' },
  });
});
  `)}function D(l){o.typography("h3",{parent:l,text:"Forms",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Create forms and form elements with dom.js."});const t=o.form({parent:l}),e=o.formGroup({parent:t});o.element("label",{parent:e,text:"Email address",attributes:{for:"inputEmail"}}),o.input({parent:e,attributes:{type:"email",id:"inputEmail",placeholder:"Enter email"}});const s=o.formGroup({parent:t});o.element("label",{parent:s,text:"Password",attributes:{for:"inputPassword"}}),o.input({parent:s,attributes:{type:"password",id:"inputPassword",placeholder:"Password"}}),o.checkbox({parent:t,labelText:"Remember me",id:"rememberMe"}),o.button({parent:t,text:"Submit",classes:["btn","btn-primary"],attributes:{type:"submit"}}),u(l,`
// Form example
const form = DOM.form({ parent });

// Email input
const emailGroup = DOM.formGroup({ parent: form });
DOM.element('label', { parent: emailGroup, text: 'Email address', attributes: { for: 'inputEmail' } });
DOM.input({
  parent: emailGroup,
  attributes: { type: 'email', id: 'inputEmail', placeholder: 'Enter email' },
});

// Password input
const passwordGroup = DOM.formGroup({ parent: form });
DOM.element('label', { parent: passwordGroup, text: 'Password', attributes: { for: 'inputPassword' } });
DOM.input({
  parent: passwordGroup,
  attributes: { type: 'password', id: 'inputPassword', placeholder: 'Password' },
});

// Checkbox
DOM.checkbox({ parent: form, labelText: 'Remember me', id: 'rememberMe' });

// Submit button
DOM.button({
  parent: form,
  text: 'Submit',
  classes: ['btn', 'btn-primary'],
  attributes: { type: 'submit' },
});
  `)}function O(l){o.typography("h3",{parent:l,text:"Navigation",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Create navbars and tabs using dom.js."}),o.navbar({parent:l,brandText:"MyApp",brandHref:"#",items:[{text:"Home",href:"#",active:!0},{text:"About",href:"#"},{text:"Contact",href:"#"}]});const t=o.element("div",{parent:l,classes:["mt-4"]}),e=o.element("ul",{parent:t,classes:["nav","nav-tabs"],attributes:{role:"tablist"}}),s=o.element("div",{parent:t,classes:["tab-content"]});[{id:"home",title:"Home",content:"<p>Home content goes here.</p>",active:!0},{id:"profile",title:"Profile",content:"<p>Profile content goes here.</p>"},{id:"messages",title:"Messages",content:"<p>Messages content goes here.</p>"}].forEach(c=>{const i=o.element("li",{parent:e,classes:["nav-item"],attributes:{role:"presentation"}});o.element("button",{parent:i,classes:["nav-link",...c.active?["active"]:[]],attributes:{id:`${c.id}-tab`,"data-bs-toggle":"tab","data-bs-target":`#${c.id}`,type:"button",role:"tab","aria-controls":c.id,"aria-selected":c.active?"true":"false"},text:c.title}),o.element("div",{parent:s,classes:["tab-pane","fade",...c.active?["show","active"]:[]],attributes:{id:c.id,role:"tabpanel","aria-labelledby":`${c.id}-tab`},html:c.content})}),u(l,`
// Navbar
DOM.navbar({
  parent,
  brandText: 'MyApp',
  brandHref: '#',
  items: [
    { text: 'Home', href: '#', active: true },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ],
});

// Tabs
const tabsNav = DOM.element('ul', {
  parent,
  classes: ['nav', 'nav-tabs'],
  attributes: { role: 'tablist' },
});

const tabContent = DOM.element('div', {
  parent,
  classes: ['tab-content'],
});

const tabItems = [
  { id: 'home', title: 'Home', content: '<p>Home content goes here.</p>', active: true },
  { id: 'profile', title: 'Profile', content: '<p>Profile content goes here.</p>' },
  { id: 'messages', title: 'Messages', content: '<p>Messages content goes here.</p>' },
];

tabItems.forEach((tab) => {
  // Nav link
  const navItem = DOM.element('li', {
    parent: tabsNav,
    classes: ['nav-item'],
    attributes: { role: 'presentation' },
  });
  const navLink = DOM.element('button', {
    parent: navItem,
    classes: ['nav-link', ...(tab.active ? ['active'] : [])],
    attributes: {
      id: \`\${tab.id}-tab\`,
      'data-bs-toggle': 'tab',
      'data-bs-target': \`#\${tab.id}\`,
      type: 'button',
      role: 'tab',
      'aria-controls': tab.id,
      'aria-selected': tab.active ? 'true' : 'false',
    },
    text: tab.title,
  });

  // Tab pane
  const tabPane = DOM.element('div', {
    parent: tabContent,
    classes: ['tab-pane', 'fade', ...(tab.active ? ['show', 'active'] : [])],
    attributes: {
      id: tab.id,
      role: 'tabpanel',
      'aria-labelledby': \`\${tab.id}-tab\`,
    },
    html: tab.content,
  });
});
  `)}function E(l){o.typography("h3",{parent:l,text:"Modals",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Create and control modals using dom.js."}),o.button({parent:l,text:"Launch Demo Modal",classes:["btn","btn-primary"],attributes:{"data-bs-toggle":"modal","data-bs-target":"#demoModal"}}),o.modal({id:"demoModal",title:"Modal Title",bodyContent:"<p>Modal body text goes here.</p>",footerContent:'<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>'}),u(l,`
// Modal trigger button
DOM.button({
  parent,
  text: 'Launch Demo Modal',
  classes: ['btn', 'btn-primary'],
  attributes: { 'data-bs-toggle': 'modal', 'data-bs-target': '#demoModal' },
});

// Modal
DOM.modal({
  id: 'demoModal',
  title: 'Modal Title',
  bodyContent: '<p>Modal body text goes here.</p>',
  footerContent: '<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>',
});
  `)}function S(l){o.typography("h3",{parent:l,text:"Components",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Create various Bootstrap components using dom.js."});const t=o.card({parent:l,classes:["mb-3"]});o.element("img",{parent:t,classes:["card-img-top"],attributes:{src:"https://via.placeholder.com/286x180",alt:"Card image cap"}});const e=o.element("div",{parent:t,classes:["card-body"]});o.typography("h5",{parent:e,text:"Card Title",classes:["card-title"]}),o.typography("p",{parent:e,text:"Some quick example text to build on the card title and make up the bulk of the card's content.",classes:["card-text"]}),o.button({parent:e,text:"Go somewhere",classes:["btn","btn-primary"]}),o.alert({parent:l,text:"This is a success alert—check it out!",classes:["alert-success","mt-4"]}),u(l,`
// Card
const card = DOM.card({ parent, classes: ['mb-3'] });
DOM.element('img', {
  parent: card,
  classes: ['card-img-top'],
  attributes: { src: 'https://via.placeholder.com/286x180', alt: 'Card image cap' },
});
const cardBody = DOM.element('div', { parent: card, classes: ['card-body'] });
DOM.typography('h5', { parent: cardBody, text: 'Card Title', classes: ['card-title'] });
DOM.typography('p', {
  parent: cardBody,
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  classes: ['card-text'],
});
DOM.button({ parent: cardBody, text: 'Go somewhere', classes: ['btn', 'btn-primary'] });

// Alert
DOM.alert({
  parent,
  text: 'This is a success alert—check it out!',
  classes: ['alert-success', 'mt-4'],
});
  `)}function A(l){o.typography("h3",{parent:l,text:"Theme Switching",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Switch between different Bootswatch themes at runtime."}),o.typography("p",{parent:l,text:"Use the theme selector at the top right to change themes."}),u(l,`
// Handle theme switching
const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  DOM.switchTheme(selectedTheme);
});
  `)}function L(l){o.typography("h3",{parent:l,text:"Dynamic Content",classes:["mb-3"]}),o.typography("p",{parent:l,text:"Add and remove elements dynamically using dom.js."});const t=o.element("div",{parent:l});o.button({parent:l,text:"Add Content",classes:["btn","btn-primary","me-2"],events:{click:()=>{o.element("p",{parent:t,text:"This is dynamically added content."})}}}),o.button({parent:l,text:"Clear Content",classes:["btn","btn-secondary"],events:{click:()=>{t.innerHTML=""}}}),u(l,`
// Container for dynamic content
const dynamicContainer = DOM.element('div', { parent });

// Add content button
DOM.button({
  parent,
  text: 'Add Content',
  classes: ['btn', 'btn-primary', 'me-2'],
  events: {
    click: () => {
      DOM.element('p', { parent: dynamicContainer, text: 'This is dynamically added content.' });
    },
  },
});

// Clear content button
DOM.button({
  parent,
  text: 'Clear Content',
  classes: ['btn', 'btn-secondary'],
  events: {
    click: () => {
      dynamicContainer.innerHTML = '';
    },
  },
});
  `)}function u(l,t){const e=o.element("pre",{parent:l,classes:["code-sample"]}),s=o.element("code",{parent:e,classes:["language-javascript"],text:t.trim()});Prism.highlightElement(s)}
