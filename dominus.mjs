var v = Object.defineProperty;
var h = (b, e, s) => e in b ? v(b, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : b[e] = s;
var m = (b, e, s) => h(b, typeof e != "symbol" ? e + "" : e, s);
const t = class t {
  // Method to switch between Bootswatch themes at runtime
  static switchTheme(e = "darkly") {
    const s = `https://cdn.jsdelivr.net/npm/bootswatch@5/dist/${e}/bootstrap.min.css`;
    t.currentThemeLink ? t.currentThemeLink.href = s : t.currentThemeLink = t.stylesheet(s, "bootswatch-theme");
  }
  static stylesheet(e, s) {
    let a = document.getElementById(s);
    return a ? a.href = e : (a = document.createElement("link"), a.id = s, a.rel = "stylesheet", a.href = e, t.head.appendChild(a)), a;
  }
  static get head() {
    return document.head;
  }
  static get body() {
    return document.body;
  }
  static element(e, s = {}) {
    const { parent: a, classes: r, text: n, html: l, attributes: c, events: i, children: d } = s, o = document.createElement(e);
    return n && (o.textContent = n), l && (o.innerHTML = l), r && t.addClasses(o, r), c && t.addAttributes(o, c), i && t.addEvents(o, i), d && d.forEach((u) => {
      t.append(u, o);
    }), a && t.append(o, a), o;
  }
  static addAttributes(e, s) {
    Object.keys(s).forEach((a) => {
      e.setAttribute(a, s[a]);
    });
  }
  static addEvents(e, s) {
    Object.keys(s).forEach((a) => {
      e.addEventListener(a, s[a]);
    });
  }
  static addClasses(e, s) {
    Array.isArray(s) ? e.classList.add(...s) : s && e.classList.add(s);
  }
  static append(e, s) {
    (s || t.body).appendChild(e);
  }
  static remove(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  // Utility method for Bootstrap utilities
  static utilityClasses(e = {}) {
    return [];
  }
  // Layout Components
  static container(e = {}) {
    const { fluid: s } = e, a = ["container"];
    return s && a.push("container-fluid"), t.element("div", { ...e, classes: a });
  }
  static row(e = {}) {
    const s = ["row", ...e.classes || []];
    return t.element("div", { ...e, classes: s });
  }
  static col(e = {}) {
    const { size: s } = e, a = s ? [`col-${s}`] : ["col"];
    return e.classes && a.push(...e.classes), t.element("div", { ...e, classes: a });
  }
  // Content Components
  static typography(e, s = {}) {
    return t.element(e, s);
  }
  static image(e = {}) {
    const { src: s, alt: a, classes: r } = e;
    return t.element("img", {
      ...e,
      classes: ["img-fluid", ...r || []],
      attributes: { src: s, alt: a }
    });
  }
  static table(e = {}) {
    const s = ["table", ...e.classes || []];
    return t.element("table", { ...e, classes: s });
  }
  static figure(e = {}) {
    return t.element("figure", e);
  }
  // Forms
  static form(e = {}) {
    return t.element("form", e);
  }
  static formGroup(e = {}) {
    return t.element("div", { ...e, classes: ["mb-3", ...e.classes || []] });
  }
  static input(e = {}) {
    const { type: s = "text", value: a, placeholder: r, name: n, id: l } = e;
    return t.element("input", {
      ...e,
      attributes: { type: s, value: a, placeholder: r, name: n, id: l },
      classes: ["form-control", ...e.classes || []]
    });
  }
  static select(e = {}) {
    return t.element("select", {
      ...e,
      classes: ["form-select", ...e.classes || []]
    });
  }
  static option(e = {}) {
    const { value: s, text: a, selected: r } = e, n = { value: s };
    return r && (n.selected = "selected"), t.element("option", {
      ...e,
      text: a,
      attributes: n
    });
  }
  static textarea(e = {}) {
    const { placeholder: s, name: a, id: r, rows: n } = e;
    return t.element("textarea", {
      ...e,
      attributes: { placeholder: s, name: a, id: r, rows: n },
      classes: ["form-control", ...e.classes || []]
    });
  }
  static checkbox(e = {}) {
    const { labelText: s, name: a, id: r, checked: n } = e, l = t.element("div", { classes: ["form-check"] }), c = t.element("input", {
      parent: l,
      attributes: { type: "checkbox", name: a, id: r },
      classes: ["form-check-input"]
    });
    return n && (c.checked = !0), t.element("label", {
      parent: l,
      attributes: { for: r },
      classes: ["form-check-label"],
      text: s
    }), l;
  }
  static radio(e = {}) {
    const { labelText: s, name: a, id: r, value: n, checked: l } = e, c = t.element("div", { classes: ["form-check"] }), i = t.element("input", {
      parent: c,
      attributes: { type: "radio", name: a, id: r, value: n },
      classes: ["form-check-input"]
    });
    return l && (i.checked = !0), t.element("label", {
      parent: c,
      attributes: { for: r },
      classes: ["form-check-label"],
      text: s
    }), c;
  }
  static inputGroup(e = {}) {
    return t.element("div", { ...e, classes: ["input-group", ...e.classes || []] });
  }
  static floatingLabel(e = {}) {
    const { labelText: s, inputElement: a } = e, r = t.element("div", { classes: ["form-floating"] });
    return a && t.append(a, r), t.element("label", { parent: r, text: s }), r;
  }
  // Components
  static alert(e = {}) {
    const { text: s, dismissible: a } = e, r = ["alert", "alert-warning", ...e.classes || []];
    a && r.push("alert-dismissible", "fade", "show");
    const n = t.element("div", { ...e, classes: r, text: s });
    return a && t.element("button", {
      parent: n,
      classes: ["btn-close"],
      attributes: { type: "button", "data-bs-dismiss": "alert", "aria-label": "Close" }
    }), n;
  }
  static badge(e = {}) {
    const { text: s } = e, a = ["badge", "bg-primary", ...e.classes || []];
    return t.element("span", { ...e, classes: a, text: s });
  }
  static breadcrumb(e = {}) {
    const s = t.element("nav", { attributes: { "aria-label": "breadcrumb" }, ...e }), a = t.element("ol", { parent: s, classes: ["breadcrumb"] });
    return e.items && Array.isArray(e.items) && e.items.forEach((r) => {
      const n = ["breadcrumb-item"];
      r.active && n.push("active");
      const l = t.element("li", { parent: a, classes: n });
      r.href ? t.element("a", { parent: l, attributes: { href: r.href }, text: r.text }) : l.textContent = r.text;
    }), s;
  }
  static button(e = {}) {
    const s = ["btn", ...e.classes || ["btn-primary"]];
    return t.element("button", { ...e, classes: s });
  }
  static buttonGroup(e = {}) {
    const s = ["btn-group", ...e.classes || []], a = { role: "group", ...e.attributes || {} };
    return t.element("div", { ...e, classes: s, attributes: a });
  }
  static card(e = {}) {
    return t.element("div", { ...e, classes: ["card", ...e.classes || []] });
  }
  static carousel(e = {}) {
    const { id: s, items: a, controls: r, indicators: n } = e, l = t.element("div", {
      classes: ["carousel", "slide"],
      attributes: { "data-bs-ride": "carousel", id: s }
    });
    if (n && a && a.length > 0) {
      const i = t.element("ol", { parent: l, classes: ["carousel-indicators"] });
      a.forEach((d, o) => {
        t.element("li", {
          parent: i,
          attributes: {
            "data-bs-target": `#${s}`,
            "data-bs-slide-to": o
          },
          classes: o === 0 ? ["active"] : []
        });
      });
    }
    const c = t.element("div", { parent: l, classes: ["carousel-inner"] });
    return a && a.length > 0 && a.forEach((i, d) => {
      const o = ["carousel-item"];
      d === 0 && o.push("active");
      const u = t.element("div", { parent: c, classes: o });
      if (i.imgSrc && t.element("img", {
        parent: u,
        classes: ["d-block", "w-100"],
        attributes: { src: i.imgSrc, alt: i.alt }
      }), i.caption) {
        const f = t.element("div", { parent: u, classes: ["carousel-caption"] });
        f.innerHTML = i.caption;
      }
    }), r && (t.element("a", {
      parent: l,
      classes: ["carousel-control-prev"],
      attributes: {
        href: `#${s}`,
        role: "button",
        "data-bs-slide": "prev"
      },
      children: [
        t.element("span", { classes: ["carousel-control-prev-icon"], attributes: { "aria-hidden": "true" } }),
        t.element("span", { classes: ["visually-hidden"], text: "Previous" })
      ]
    }), t.element("a", {
      parent: l,
      classes: ["carousel-control-next"],
      attributes: {
        href: `#${s}`,
        role: "button",
        "data-bs-slide": "next"
      },
      children: [
        t.element("span", { classes: ["carousel-control-next-icon"], attributes: { "aria-hidden": "true" } }),
        t.element("span", { classes: ["visually-hidden"], text: "Next" })
      ]
    })), l;
  }
  static collapse(e = {}) {
    const { targetId: s, toggleText: a } = e, r = t.button({
      text: a || "Toggle",
      attributes: { "data-bs-toggle": "collapse", "data-bs-target": `#${s}`, "aria-expanded": "false", "aria-controls": s }
    }), n = t.element("div", {
      classes: ["collapse"],
      attributes: { id: s },
      ...e
    });
    return { button: r, content: n };
  }
  static dropdown(e = {}) {
    const { buttonText: s, menuItems: a } = e, r = t.element("div", { classes: ["dropdown", ...e.classes || []] });
    t.button({
      parent: r,
      text: s,
      classes: ["btn", "dropdown-toggle"],
      attributes: { "data-bs-toggle": "dropdown", "aria-expanded": "false" }
    });
    const n = t.element("ul", { parent: r, classes: ["dropdown-menu"] });
    return a.forEach((l) => {
      const c = t.element("li", { parent: n });
      t.element("a", { parent: c, classes: ["dropdown-item"], attributes: { href: l.href }, text: l.text });
    }), r;
  }
  static listGroup(e = {}) {
    const s = t.element("ul", { classes: ["list-group", ...e.classes || []], ...e });
    return e.items && Array.isArray(e.items) && e.items.forEach((a) => {
      const r = ["list-group-item"];
      a.active && r.push("active"), t.element("li", { parent: s, classes: r, text: a.text });
    }), s;
  }
  static modal(e = {}) {
    const { id: s, title: a, bodyContent: r, footerContent: n, onClose: l } = e, c = t.element("div", {
      classes: ["modal", "fade"],
      attributes: { id: s, tabindex: "-1", "aria-labelledby": `${s}Label`, "aria-hidden": "true" }
    }), i = t.element("div", {
      parent: c,
      classes: ["modal-dialog"]
    }), d = t.element("div", {
      parent: i,
      classes: ["modal-content"]
    });
    if (a) {
      const u = t.element("div", {
        parent: d,
        classes: ["modal-header"]
      });
      t.element("h5", {
        parent: u,
        classes: ["modal-title"],
        attributes: { id: `${s}Label` },
        text: a
      }), t.element("button", {
        parent: u,
        classes: ["btn-close"],
        attributes: { type: "button", "data-bs-dismiss": "modal", "aria-label": "Close" }
      });
    }
    return r && t.element("div", {
      parent: d,
      classes: ["modal-body"],
      html: r
    }), n && t.element("div", {
      parent: d,
      classes: ["modal-footer"],
      html: n
    }), t.append(c, document.body), l && c.addEventListener("hidden.bs.modal", l), new bootstrap.Modal(c).show(), c;
  }
  static nav(e = {}) {
    const { items: s, tabs: a, pills: r } = e, n = ["nav", ...e.classes || []];
    a && n.push("nav-tabs"), r && n.push("nav-pills");
    const l = t.element("ul", { classes: n, ...e });
    return s && Array.isArray(s) && s.forEach((c) => {
      const i = ["nav-item"], d = t.element("li", { parent: l, classes: i });
      t.element("a", {
        parent: d,
        classes: ["nav-link", ...c.active ? ["active"] : []],
        attributes: { href: c.href },
        text: c.text
      });
    }), l;
  }
  static navbar(e = {}) {
    const { brandText: s, brandHref: a, items: r } = e, n = t.element("nav", { classes: ["navbar", "navbar-expand-lg", "navbar-light", "bg-light"] }), l = t.container({ parent: n });
    s && t.element("a", {
      parent: l,
      classes: ["navbar-brand"],
      attributes: { href: a || "#" },
      text: s
    }), t.element("button", {
      parent: l,
      classes: ["navbar-toggler"],
      attributes: {
        type: "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation"
      },
      children: [t.element("span", { classes: ["navbar-toggler-icon"] })]
    });
    const c = t.element("div", {
      parent: l,
      classes: ["collapse", "navbar-collapse"],
      attributes: { id: "navbarSupportedContent" }
    });
    if (r && Array.isArray(r)) {
      const i = t.element("ul", { parent: c, classes: ["navbar-nav", "me-auto", "mb-2", "mb-lg-0"] });
      r.forEach((d) => {
        const o = t.element("li", { parent: i, classes: ["nav-item"] });
        t.element("a", {
          parent: o,
          classes: ["nav-link", ...d.active ? ["active"] : []],
          attributes: { href: d.href },
          text: d.text
        });
      });
    }
    return n;
  }
  static pagination(e = {}) {
    const { pages: s, currentPage: a } = e, r = t.element("ul", { classes: ["pagination", ...e.classes || []], ...e });
    for (let n = 1; n <= s; n++) {
      const l = ["page-item"];
      n === a && l.push("active");
      const c = t.element("li", { parent: r, classes: l });
      t.element("a", {
        parent: c,
        classes: ["page-link"],
        attributes: { href: "#", "data-page": n },
        text: n.toString(),
        events: e.pageClick ? { click: e.pageClick } : {}
      });
    }
    return r;
  }
  static progress(e = {}) {
    const { value: s, max: a } = e, r = t.element("div", { classes: ["progress"], ...e });
    return t.element("div", {
      parent: r,
      classes: ["progress-bar"],
      attributes: { role: "progressbar", style: `width: ${s / a * 100}%`, "aria-valuenow": s, "aria-valuemin": "0", "aria-valuemax": a }
    }), r;
  }
  static spinner(e = {}) {
    const { type: s = "border", text: a } = e, r = [`spinner-${s}`, ...e.classes || []], n = t.element("div", { classes: r, attributes: { role: "status" }, ...e });
    return a && t.element("span", { parent: n, classes: ["visually-hidden"], text: a }), n;
  }
  static toast(e = {}) {
    const { headerText: s, bodyText: a, delay: r = 5e3 } = e, n = t.element("div", {
      classes: ["toast", "fade", "show"],
      attributes: { role: "alert", "aria-live": "assertive", "aria-atomic": "true" },
      ...e
    }), l = t.element("div", { parent: n, classes: ["toast-header"] });
    t.element("strong", { parent: l, classes: ["me-auto"], text: s }), t.element("small", { parent: l, text: "Just now" }), t.element("button", {
      parent: l,
      classes: ["btn-close"],
      attributes: { type: "button", "data-bs-dismiss": "toast", "aria-label": "Close" }
    }), t.element("div", { parent: n, classes: ["toast-body"], text: a });
    const c = document.querySelector(".toast-container") || t.element("div", { classes: ["toast-container", "position-fixed", "bottom-0", "end-0", "p-3"], parent: t.body });
    return t.append(n, c), new bootstrap.Toast(n, { delay: r }).show(), n;
  }
  static tooltip(e, s = {}) {
    const { title: a, placement: r } = s;
    return e.setAttribute("data-bs-toggle", "tooltip"), e.setAttribute("data-bs-placement", r || "top"), e.setAttribute("title", a), new bootstrap.Tooltip(e);
  }
  static popover(e, s = {}) {
    const { title: a, content: r, placement: n } = s;
    return e.setAttribute("data-bs-toggle", "popover"), e.setAttribute("data-bs-placement", n || "top"), e.setAttribute("title", a), e.setAttribute("data-bs-content", r), new bootstrap.Popover(e);
  }
  // Additional methods can be added for other components following this pattern
};
// Stores the current theme stylesheet element
m(t, "currentThemeLink", null);
let p = t;
export {
  p as DOM
};
