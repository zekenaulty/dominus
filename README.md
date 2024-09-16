# dom.js

A lightweight and comprehensive HTML5 DOM wrapper for building Bootstrap 5 components with ease. `dom.js` simplifies DOM manipulation and allows you to create dynamic, themeable web applications without writing verbose HTML.

## Features

- Simplifies DOM manipulation with a clean, consistent API.
- Supports all Bootstrap 5 components.
- Allows runtime switching between Bootswatch themes.
- Facilitates the creation of complex UIs with minimal code.
- **Includes `DomEvaluator` for reactive data binding and dynamic content updates.**
- No dependencies other than Bootstrap and Bootswatch.

## Installation
(beta)
Install via npm:

```bash
npm install dominus-api
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

### Including dom.js and domEvaluator.js

Include `dom.js`, `domEvaluator.js`, and your `main.js` in your `index.html`:

```html
<!-- dom.js -->
<script type="module" src="./dom.js"></script>
<!-- domEvaluator.js -->
<script type="module" src="./domEvaluator.js"></script>
<!-- main.js -->
<script type="module" src="./main.js"></script>
```

---

## Examples

Below are examples demonstrating how to use `dom.js` and `domEvaluator.js` to create Bootstrap components, from simple buttons to complex forms with reactive data binding.

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

### Example 2: Creating a Form with Reactive Data Binding

#### index.html

_Same as in Example 1._

#### main.js

```javascript
import { DOM } from './dom.js';
import { DomEvaluator } from './domEvaluator.js';

// Set default theme
DOM.switchTheme('darkly');

// Initialize reactive data object
const data = {
  user: {
    name: '',
    email: ''
  }
};

// Create an instance of DomEvaluator
const evaluator = DomEvaluator.getInstance();
evaluator.setData(data);

// Create a container
const container = DOM.container({ parent: DOM.body, classes: ['mt-5'] });

// Create a form
const form = DOM.form({ parent: container });

// Name input
const nameGroup = DOM.formGroup({ parent: form });
DOM.element('label', { parent: nameGroup, text: 'Name', attributes: { for: 'inputName' } });
DOM.input({
  parent: nameGroup,
  attributes: {
    type: 'text',
    id: 'inputName',
    placeholder: 'Enter your name',
    value: data.user.name,
  },
  events: {
    input: (e) => {
      data.user.name = e.target.value;
    },
  },
});

// Email input
const emailGroup = DOM.formGroup({ parent: form });
DOM.element('label', { parent: emailGroup, text: 'Email address', attributes: { for: 'inputEmail' } });
DOM.input({
  parent: emailGroup,
  attributes: {
    type: 'email',
    id: 'inputEmail',
    placeholder: 'Enter email',
    value: data.user.email,
  },
  events: {
    input: (e) => {
      data.user.email = e.target.value;
    },
  },
});

// Display the data using {expressions}
DOM.typography('h4', { parent: container, text: 'Live Preview', classes: ['mt-4'] });
DOM.typography('p', { parent: container, text: 'Name: {user.name}' });
DOM.typography('p', { parent: container, text: 'Email: {user.email}' });

// Initial evaluation
evaluator.evaluate();
```

**Explanation:**

- **DomEvaluator**: Used for reactive data binding.
- **Reactive Inputs**: Input fields update the `data` object on input events.
- **Live Preview**: Displays data using `{expressions}`, which are updated automatically when `data` changes.
- **evaluator.evaluate()**: Processes the DOM to replace `{expressions}` with actual data.

---

### Example 3: Creating a Navbar with Dynamic Data

#### index.html

_Same as in Example 1._

#### main.js

```javascript
import { DOM } from './dom.js';
import { DomEvaluator } from './domEvaluator.js';

// Set default theme
DOM.switchTheme('cerulean');

// Initialize reactive data object
const data = {
  user: {
    name: 'John Doe'
  }
};

// Create an instance of DomEvaluator
const evaluator = DomEvaluator.getInstance();
evaluator.setData(data);

// Create a navbar
const navbar = DOM.navbar({
  parent: DOM.body,
  brandText: '{user.name}',
  brandHref: '#',
  classes: ['navbar', 'navbar-expand-lg', 'navbar-dark', 'bg-dark'],
  items: [
    { text: 'Home', href: '#', active: true },
    { text: 'Profile', href: '#' },
    { text: 'Settings', href: '#' },
  ],
});

// Initial evaluation
evaluator.evaluate();

// Simulate data change after 2 seconds
setTimeout(() => {
  data.user.name = 'Jane Smith';
  evaluator.evaluate();
}, 2000);
```

**Explanation:**

- **Dynamic Brand Text**: The navbar brand text uses `{user.name}` to display the user's name.
- **DomEvaluator**: Updates the DOM when `data.user.name` changes.
- **Simulated Data Change**: After 2 seconds, the user's name changes, and the navbar updates accordingly.

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

### Example 5: Dynamic Content with domEvaluator.js

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
import { DomEvaluator } from './domEvaluator.js';

// Set default theme
DOM.switchTheme('darkly');

// Initialize reactive data object
const data = {
  theme: 'darkly',
  dynamicItems: ['Item 1', 'Item 2', 'Item 3'],
};

// Create an instance of DomEvaluator
const evaluator = DomEvaluator.getInstance();
evaluator.setData(data);

// Handle theme switching
const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', (e) => {
  data.theme = e.target.value;
  DOM.switchTheme(data.theme);
});

// Create a container
const container = DOM.container({ parent: DOM.body, classes: ['mt-4'] });

// Add header
DOM.typography('h1', {
  parent: container,
  text: 'Dynamic Content Example',
  classes: ['text-center', 'mb-4'],
});

// Dynamic list rendering
const listContainer = DOM.element('ul', { parent: container, classes: ['list-group', 'mb-3'] });

function renderList() {
  listContainer.innerHTML = '';
  data.dynamicItems.forEach((item) => {
    DOM.element('li', {
      parent: listContainer,
      classes: ['list-group-item'],
      text: item,
    });
  });
  evaluator.evaluate(listContainer);
}

renderList();

// Add item button
DOM.button({
  parent: container,
  text: 'Add Item',
  classes: ['btn', 'btn-primary', 'me-2'],
  events: {
    click: () => {
      const newItem = `Item ${data.dynamicItems.length + 1}`;
      data.dynamicItems.push(newItem);
      renderList();
    },
  },
});

// Remove item button
DOM.button({
  parent: container,
  text: 'Remove Item',
  classes: ['btn', 'btn-secondary'],
  events: {
    click: () => {
      data.dynamicItems.pop();
      renderList();
    },
  },
});
```

**Explanation:**

- **Theme Switching**: Allows users to switch between Bootswatch themes at runtime.
- **Reactive Data Binding**: Uses `domEvaluator.js` to reactively update the list when items are added or removed.
- **Dynamic List Rendering**: The `renderList` function re-renders the list whenever `data.dynamicItems` changes.

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
- **DOM.typography(tag, options)**: Creates typography elements like headings, paragraphs, etc.

### Theme Management

- **DOM.switchTheme(themeName)**: Switches the Bootswatch theme at runtime.

---

## DomEvaluator

`domEvaluator.js` provides a way to integrate dynamic data into your DOM using `{}` placeholders, similar to templating in Angular or React.

### Features

- **Reactive Data Binding**: Automatically updates the DOM when data changes.
- **On-Demand Updates**: Manually trigger DOM updates when needed.
- **Singleton Instance**: Ensures only one instance of `DomEvaluator` exists.
- **Safe Expression Evaluation**: Evaluates expressions within the scope of the provided data object.

### Usage

#### Importing DomEvaluator

```javascript
import { DomEvaluator } from './domEvaluator.js';
```

#### Setting Up Reactive Data

```javascript
// Initialize reactive data object
const data = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
  },
};

// Get the singleton instance of DomEvaluator
const evaluator = DomEvaluator.getInstance();

// Set the data in the evaluator (makes it reactive)
evaluator.setData(data);
```

#### Using {expressions} in Your DOM

```javascript
// Create elements with placeholders
DOM.typography('h1', {
  parent: DOM.body,
  text: 'Hello, {user.name}!',
});

DOM.typography('p', {
  parent: DOM.body,
  text: 'Email: {user.email}',
});

// Initial evaluation
evaluator.evaluate();
```

#### Reactive Updates

When you change the data object, the DOM updates automatically.

```javascript
data.user.name = 'Jane Smith';
data.user.email = 'jane.smith@example.com';
// The DOM automatically reflects these changes
```

---

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on GitHub.

## License

This project is licensed under the MIT License.

---

## Conclusion

`dom.js` provides a powerful and flexible way to build dynamic, themeable web applications using Bootstrap 5 components. By abstracting the DOM manipulation and Bootstrap component creation into simple methods, it allows developers to focus on building features rather than writing repetitive HTML and JavaScript code.

With the addition of `domEvaluator.js`, you can now integrate reactive data binding into your applications, enabling dynamic content updates and a more interactive user experience.

---
