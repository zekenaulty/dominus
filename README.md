# dom.js

A lightweight and comprehensive HTML5 DOM wrapper for building Bootstrap 5 components with ease. `dom.js` simplifies DOM manipulation and allows you to create dynamic, themeable web applications without writing verbose HTML.

## Features

- Simplifies DOM manipulation with a clean, consistent API.
- Supports all Bootstrap 5 components.
- Allows runtime switching between Bootswatch themes.
- Facilitates the creation of complex UIs with minimal code.
- No dependencies other than Bootstrap and Bootswatch.

## Installation

Install via npm:

```bash
npm install dom.js
```

Alternatively, you can include `dom.js` directly in your project by downloading the `dom.js` file and referencing it in your HTML.

## Getting Started

To get started, include `dom.js` in your project and use it to build your web application's UI.

### Including Bootstrap and Bootswatch

Ensure that you include Bootstrap and the Bootswatch theme of your choice via CDN in your `index.html`:

```html
<!-- Bootstrap CSS (will be overridden by Bootswatch theme) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css" rel="stylesheet">
<!-- Bootswatch Theme Placeholder -->
<link id="bootswatch-theme" rel="stylesheet" href="">
```

### Including dom.js

Include `dom.js` and your `main.js` in your `index.html`:

```html
<!-- dom.js -->
<script type="module" src="./dom.js"></script>
<!-- main.js -->
<script type="module" src="./main.js"></script>
```

---

## Examples

Below are examples demonstrating how to use `dom.js` to create Bootstrap components, from simple buttons to complex navigation tabs.

### Example 1: Creating a Simple Button

#### index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>dom.js Button Example</title>
  <!-- Bootstrap CSS -->
  <link id="bootswatch-theme" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/css/bootstrap.min.css">
</head>
<body>
  <!-- Content will be injected by main.js -->
  <!-- Bootstrap JS Bundle -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5/dist/js/bootstrap.bundle.min.js"></script>
  <!-- dom.js -->
  <script type="module" src="./dom.js"></script>
  <!-- main.js -->
  <script type="module" src="./main.js"></script>
</body>
</html>
```

#### main.js

```javascript
import { DOM } from './dom.js';

// Set default theme
DOM.switchTheme('flatly');

// Create a container
const container = DOM.container({ parent: DOM.body, classes: ['mt-5'] });

// Create a button
const button = DOM.button({
  parent: container,
  text: 'Click Me',
  classes: ['btn', 'btn-primary'],
  events: {
    click: () => alert('Button clicked!')
  }
});
```

**Explanation:**

- **DOM.switchTheme('flatly')**: Sets the Bootswatch theme to 'Flatly'.
- **DOM.container**: Creates a Bootstrap container.
- **DOM.button**: Creates a Bootstrap button with text and an event listener.

---

### Example 2: Creating a Form

#### index.html

_Same as in Example 1._

#### main.js

```javascript
import { DOM } from './dom.js';

// Set default theme
DOM.switchTheme('darkly');

// Create a container
const container = DOM.container({ parent: DOM.body, classes: ['mt-5'] });

// Create a form
const form = DOM.form({ parent: container });

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
const checkbox = DOM.checkbox({ parent: form, labelText: 'Remember me', id: 'rememberMe' });

// Submit button
DOM.button({
  parent: form,
  text: 'Submit',
  classes: ['btn', 'btn-primary'],
  attributes: { type: 'submit' },
});
```

**Explanation:**

- **DOM.form**: Creates a form element.
- **DOM.formGroup**: Wraps inputs in a Bootstrap form group.
- **DOM.input**: Creates input elements for email and password.
- **DOM.checkbox**: Creates a checkbox input.
- **DOM.button**: Adds a submit button to the form.

---

### Example 3: Creating a Navbar

#### index.html

_Same as in Example 1._

#### main.js

```javascript
import { DOM } from './dom.js';

// Set default theme
DOM.switchTheme('cerulean');

// Create a container
const container = DOM.container({ parent: DOM.body });

// Create a navbar
const navbar = DOM.navbar({
  parent: container,
  brandText: 'MyApp',
  brandHref: '#',
  items: [
    { text: 'Home', href: '#', active: true },
    { text: 'About', href: '#' },
    { text: 'Contact', href: '#' },
  ],
});
```

**Explanation:**

- **DOM.navbar**: Creates a responsive Bootstrap navbar with brand and navigation items.

---

### Example 4: Creating Tabs and Tab Content

#### index.html

_Same as in Example 1._

#### main.js

```javascript
import { DOM } from './dom.js';

// Set default theme
DOM.switchTheme('darkly');

// Create a container
const container = DOM.container({ parent: DOM.body, classes: ['mt-5'] });

// Create tabs
const tabs = DOM.nav({
  parent: container,
  tabs: true,
  items: [
    { text: 'Home', href: '#home', active: true },
    { text: 'Profile', href: '#profile' },
    { text: 'Messages', href: '#messages' },
  ],
  attributes: { id: 'myTab', role: 'tablist' },
});

// Create tab content container
const tabContent = DOM.element('div', {
  parent: container,
  classes: ['tab-content'],
  attributes: { id: 'myTabContent' },
});

// Tab panes
const homePane = DOM.element('div', {
  parent: tabContent,
  classes: ['tab-pane', 'fade', 'show', 'active'],
  attributes: { id: 'home', role: 'tabpanel', 'aria-labelledby': 'home-tab' },
  html: '<p>Home content goes here.</p>',
});

const profilePane = DOM.element('div', {
  parent: tabContent,
  classes: ['tab-pane', 'fade'],
  attributes: { id: 'profile', role: 'tabpanel', 'aria-labelledby': 'profile-tab' },
  html: '<p>Profile content goes here.</p>',
});

const messagesPane = DOM.element('div', {
  parent: tabContent,
  classes: ['tab-pane', 'fade'],
  attributes: { id: 'messages', role: 'tabpanel', 'aria-labelledby': 'messages-tab' },
  html: '<p>Messages content goes here.</p>',
});
```

**Explanation:**

- **DOM.nav**: Creates a navigation element with tabs.
- **DOM.element**: Used to create tab content panes.
- **Data Attributes**: Used for proper Bootstrap tab functionality.

---

### Example 5: Dynamic Tabs with Theme Switching

#### index.html

_Same as in Example 1, but include a theme selector:_

```html
<!-- Theme Selector -->
<div class="container mt-3">
  <div class="d-flex justify-content-end">
    <select id="theme-selector" class="form-select w-auto">
      <option value="darkly">Darkly</option>
      <option value="flatly">Flatly</option>
      <option value="cerulean">Cerulean</option>
      <!-- Add more themes as desired -->
    </select>
  </div>
</div>
```

#### main.js

```javascript
import { DOM } from './dom.js';

// Set default theme
DOM.switchTheme('darkly');

// Handle theme switching
const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  DOM.switchTheme(selectedTheme);
});

// Create a container
const container = DOM.container({ parent: DOM.body, classes: ['mt-4'] });

// Add header
DOM.typography('h1', {
  parent: container,
  text: 'Dynamic Tabs Example',
  classes: ['text-center', 'mb-4'],
});

// Create tabs and content
createDynamicTabsSection(container);

function createDynamicTabsSection(parent) {
  // Container for tabs
  const tabsContainer = DOM.element('div', { parent });

  // Nav tabs
  const nav = DOM.element('ul', {
    parent: tabsContainer,
    classes: ['nav', 'nav-tabs'],
    attributes: { role: 'tablist' },
  });

  // Tab content
  const tabContent = DOM.element('div', { parent: tabsContainer, classes: ['tab-content'] });

  // Initial tab
  addNewTab('Tab 1', 'Content for Tab 1', true);

  // Add controls
  const controls = DOM.element('div', { parent, classes: ['mt-3'] });

  // Add tab button
  DOM.button({
    parent: controls,
    text: 'Add New Tab',
    classes: ['btn', 'btn-primary', 'me-2'],
    events: {
      click: () => {
        const tabCount = nav.children.length + 1;
        addNewTab(`Tab ${tabCount}`, `Content for Tab ${tabCount}`);
      },
    },
  });

  // Switch style button
  let isTabs = true;
  const switchButton = DOM.button({
    parent: controls,
    text: 'Switch to Pills',
    classes: ['btn', 'btn-secondary'],
    events: {
      click: () => {
        isTabs = !isTabs;
        nav.classList.toggle('nav-tabs', isTabs);
        nav.classList.toggle('nav-pills', !isTabs);
        switchButton.textContent = isTabs ? 'Switch to Pills' : 'Switch to Tabs';
      },
    },
  });

  function addNewTab(title, content, isActive = false) {
    const tabId = `tab-${nav.children.length + 1}`;

    // Deactivate other tabs if the new one is active
    if (isActive) {
      deactivateAllTabs();
    }

    // Create nav item
    const navItem = DOM.element('li', {
      parent: nav,
      classes: ['nav-item'],
      attributes: { role: 'presentation' },
    });

    // Create nav link
    const navLink = DOM.element('button', {
      parent: navItem,
      classes: ['nav-link', isActive ? 'active' : ''],
      attributes: {
        id: `${tabId}-tab`,
        'data-bs-toggle': 'tab',
        'data-bs-target': `#${tabId}`,
        type: 'button',
        role: 'tab',
        'aria-controls': tabId,
        'aria-selected': isActive ? 'true' : 'false',
      },
      text: title,
    });

    // Create tab pane
    const tabPane = DOM.element('div', {
      parent: tabContent,
      classes: ['tab-pane', 'fade', isActive ? 'show active' : ''],
      attributes: {
        id: tabId,
        role: 'tabpanel',
        'aria-labelledby': `${tabId}-tab`,
      },
      html: `<p>${content}</p>`,
    });
  }

  function deactivateAllTabs() {
    Array.from(nav.querySelectorAll('.nav-link')).forEach((link) => {
      link.classList.remove('active');
      link.setAttribute('aria-selected', 'false');
    });
    Array.from(tabContent.querySelectorAll('.tab-pane')).forEach((pane) => {
      pane.classList.remove('show', 'active');
    });
  }
}
```

**Explanation:**

- **Theme Switching**: Allows users to switch between Bootswatch themes at runtime.
- **Dynamic Tabs**: Users can add new tabs dynamically.
- **Switching Between Tabs and Pills**: Users can toggle the style of the navigation.

---

## API Reference

The `DOM` class provides methods to create and manipulate DOM elements easily.

### Common Methods

- **DOM.element(tag, options)**: Creates an HTML element.
- **DOM.classes(element, classes)**: Adds classes to an element.
- **DOM.attributes(element, attributes)**: Adds attributes to an element.
- **DOM.events(element, events)**: Adds event listeners to an element.
- **DOM.append(child, parent)**: Appends a child element to a parent.
- **DOM.remove(element)**: Removes an element from the DOM.

### Bootstrap-Specific Methods

- **DOM.container(options)**: Creates a Bootstrap container.
- **DOM.row(options)**: Creates a Bootstrap row.
- **DOM.col(options)**: Creates a Bootstrap column.
- **DOM.button(options)**: Creates a Bootstrap button.
- **DOM.navbar(options)**: Creates a Bootstrap navbar.
- **DOM.nav(options)**: Creates a Bootstrap nav (tabs or pills).
- **DOM.modal(options)**: Creates a Bootstrap modal.
- **DOM.alert(options)**: Creates a Bootstrap alert.
- **DOM.form(options)**: Creates a form element.
- **DOM.input(options)**: Creates an input element.
- **DOM.checkbox(options)**: Creates a checkbox input.
- **DOM.radio(options)**: Creates a radio input.

### Theme Management

- **DOM.switchTheme(themeName)**: Switches the Bootswatch theme at runtime.

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License.

---

## Conclusion

`dom.js` provides a powerful and flexible way to build dynamic, themeable web applications using Bootstrap 5 components. By abstracting the DOM manipulation and Bootstrap component creation into simple methods, it allows developers to focus on building features rather than writing repetitive HTML and JavaScript code.
