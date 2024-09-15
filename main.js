// main.js
import { DOM } from './src/dom.js';

// Set default theme
DOM.switchTheme('darkly');

// Handle theme switching
const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  DOM.switchTheme(selectedTheme);
});

// Create main container
const container = DOM.container({ parent: DOM.body, classes: ['mt-4'] });

// Add page header
DOM.typography('h1', {
  parent: container,
  text: 'dom.js Complete Demo',
  classes: ['text-center', 'mb-4'],
});

// Create tabs
const tabsNav = DOM.element('ul', {
  parent: container,
  classes: ['nav', 'nav-tabs'],
  attributes: { role: 'tablist' },
});

// Tab content container
const tabContent = DOM.element('div', {
  parent: container,
  classes: ['tab-content'],
});

// Define tabs
const tabs = [
  { id: 'overview', title: 'Overview', content: createOverviewContent },
  { id: 'buttons', title: 'Buttons', content: createButtonsContent },
  { id: 'forms', title: 'Forms', content: createFormsContent },
  { id: 'navigation', title: 'Navigation', content: createNavigationContent },
  { id: 'modals', title: 'Modals', content: createModalsContent },
  { id: 'components', title: 'Components', content: createComponentsContent },
  { id: 'theme-switching', title: 'Theme Switching', content: createThemeSwitchingContent },
  { id: 'dynamic-content', title: 'Dynamic Content', content: createDynamicContent },
];

// Create tabs and content
tabs.forEach((tab, index) => {
  // Create tab nav item
  const navItem = DOM.element('li', {
    parent: tabsNav,
    classes: ['nav-item'],
    attributes: { role: 'presentation' },
  });

  const navLink = DOM.element('button', {
    parent: navItem,
    classes: ['nav-link', ...(index === 0 ? ['active'] : [])],
    attributes: {
      id: `${tab.id}-tab`,
      'data-bs-toggle': 'tab',
      'data-bs-target': `#${tab.id}`,
      type: 'button',
      role: 'tab',
      'aria-controls': tab.id,
      'aria-selected': index === 0 ? 'true' : 'false',
    },
    text: tab.title,
  });

  // Create tab pane
  const tabPane = DOM.element('div', {
    parent: tabContent,
    classes: ['tab-pane', 'fade', ...(index === 0 ? ['show', 'active'] : [])],
    attributes: {
      id: tab.id,
      role: 'tabpanel',
      'aria-labelledby': `${tab.id}-tab`,
    },
  });

  // Generate content for the tab
  tab.content(tabPane);
});

// Functions to create content for each tab

function createOverviewContent(parent) {
  DOM.typography('h3', { parent, text: 'Welcome to dom.js', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'dom.js is a lightweight and comprehensive HTML5 DOM wrapper for building Bootstrap 5 components with ease.',
  });
  DOM.typography('p', {
    parent,
    text: 'This demo showcases various components and features available in dom.js.',
  });
}

function createButtonsContent(parent) {
  DOM.typography('h3', { parent, text: 'Buttons', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Create Bootstrap buttons easily using dom.js.',
  });

  // Button examples
  const buttonGroup = DOM.buttonGroup({ parent });
  ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'].forEach((type) => {
    const btnClass = `btn-${type.toLowerCase()}`;
    DOM.button({
      parent: buttonGroup,
      text: type,
      classes: ['btn', btnClass],
      attributes: { type: 'button' },
    });
  });

  // Code sample
  const codeSample = `
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
  `;
  displayCodeSample(parent, codeSample);
}

function createFormsContent(parent) {
  DOM.typography('h3', { parent, text: 'Forms', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Create forms and form elements with dom.js.',
  });

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

  // Code sample
  const codeSample = `
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
  `;
  displayCodeSample(parent, codeSample);
}

function createNavigationContent(parent) {
  DOM.typography('h3', { parent, text: 'Navigation', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Create navbars and tabs using dom.js.',
  });

  // Navbar example
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

  // Tabs example
  const tabsContainer = DOM.element('div', { parent, classes: ['mt-4'] });

  const tabsNav = DOM.element('ul', {
    parent: tabsContainer,
    classes: ['nav', 'nav-tabs'],
    attributes: { role: 'tablist' },
  });

  const tabContent = DOM.element('div', {
    parent: tabsContainer,
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
        id: `${tab.id}-tab`,
        'data-bs-toggle': 'tab',
        'data-bs-target': `#${tab.id}`,
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
        'aria-labelledby': `${tab.id}-tab`,
      },
      html: tab.content,
    });
  });

  // Code sample
  const codeSample = `
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
  `;
  displayCodeSample(parent, codeSample);
}

function createModalsContent(parent) {
  DOM.typography('h3', { parent, text: 'Modals', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Create and control modals using dom.js.',
  });

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

  // Code sample
  const codeSample = `
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
  `;
  displayCodeSample(parent, codeSample);
}

function createComponentsContent(parent) {
  DOM.typography('h3', { parent, text: 'Components', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Create various Bootstrap components using dom.js.',
  });

  // Card example
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

  // Alert example
  DOM.alert({
    parent,
    text: 'This is a success alert—check it out!',
    classes: ['alert-success', 'mt-4'],
  });

  // Code sample
  const codeSample = `
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
  `;
  displayCodeSample(parent, codeSample);
}

function createThemeSwitchingContent(parent) {
  DOM.typography('h3', { parent, text: 'Theme Switching', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Switch between different Bootswatch themes at runtime.',
  });

  DOM.typography('p', {
    parent,
    text: 'Use the theme selector at the top right to change themes.',
  });

  // Code sample
  const codeSample = `
// Handle theme switching
const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', (e) => {
  const selectedTheme = e.target.value;
  DOM.switchTheme(selectedTheme);
});
  `;
  displayCodeSample(parent, codeSample);
}

function createDynamicContent(parent) {
  DOM.typography('h3', { parent, text: 'Dynamic Content', classes: ['mb-3'] });
  DOM.typography('p', {
    parent,
    text: 'Add and remove elements dynamically using dom.js.',
  });

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

  // Code sample
  const codeSample = `
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
  `;
  displayCodeSample(parent, codeSample);
}

// Utility function to display code samples
function displayCodeSample(parent, code) {
  const pre = DOM.element('pre', { parent, classes: ['code-sample'] });
  const codeElement = DOM.element('code', {
    parent: pre,
    classes: ['language-javascript'],
    text: code.trim(),
  });
  // Highlight the code using Prism.js
  Prism.highlightElement(codeElement);
}
