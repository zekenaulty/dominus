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

// Create a container for the demo content
const container = DOM.container({ parent: DOM.body, classes: ['mt-4'] });

// Add a header
const header = DOM.typography('h1', {
  parent: container,
  text: 'Bootswatch Theme Demo',
  classes: ['text-center', 'mb-4'],
});

// Add a description
DOM.typography('p', {
  parent: container,
  text: 'This page demonstrates Bootstrap components using different Bootswatch themes. Use the selector above to switch themes.',
  classes: ['text-center'],
});

// Create a row for components
const componentsRow = DOM.row({ parent: container, classes: ['mt-5'] });

// Left column
const leftCol = DOM.col({ parent: componentsRow, size: 6 });

// Right column
const rightCol = DOM.col({ parent: componentsRow, size: 6 });

// Components in the left column
createButtonsSection(leftCol);
createAlertsSection(leftCol);
createCardSection(leftCol);

// Components in the right column
createFormSection(rightCol);
createModalSection(rightCol);
createProgressSection(rightCol);

// Create a new row for the Dynamic Tabs section
const tabsRow = DOM.row({ parent: container });

// Create a column that spans the full width
const tabsCol = DOM.col({ parent: tabsRow, size: 12 });

// Add the Dynamic Tabs section to the full-width column
createDynamicTabsSection(tabsCol);

// Function to create Buttons section
function createButtonsSection(parent) {
  const sectionHeader = DOM.typography('h2', { parent, text: 'Buttons', classes: ['mb-3'] });
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
}

// Function to create Alerts section
function createAlertsSection(parent) {
  const sectionHeader = DOM.typography('h2', { parent, text: 'Alerts', classes: ['mt-5', 'mb-3'] });
  ['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'].forEach((type) => {
    const alertClass = `alert-${type.toLowerCase()}`;
    DOM.alert({
      parent,
      text: `This is a ${type.toLowerCase()} alert—check it out!`,
      classes: [alertClass],
    });
  });
}

// Function to create Card section
function createCardSection(parent) {
  const sectionHeader = DOM.typography('h2', { parent, text: 'Card', classes: ['mt-5', 'mb-3'] });
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
}

// Function to create Form section
function createFormSection(parent) {
  const sectionHeader = DOM.typography('h2', { parent, text: 'Form', classes: ['mb-3'] });
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
  const checkbox = DOM.checkbox({ parent: form, labelText: 'Remember me', id: 'rememberMe' });
  // Submit button
  DOM.button({
    parent: form,
    text: 'Submit',
    classes: ['btn', 'btn-primary'],
    attributes: { type: 'submit' },
  });
}

// Function to create Modal section
function createModalSection(parent) {
  const sectionHeader = DOM.typography('h2', { parent, text: 'Modal', classes: ['mt-5', 'mb-3'] });
  // Trigger button
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
}

// Function to create Progress section
function createProgressSection(parent) {
  const sectionHeader = DOM.typography('h2', { parent, text: 'Progress', classes: ['mt-5', 'mb-3'] });
  const progress = DOM.progress({ parent, value: 50, max: 100 });
}

// Function to create Dynamic Tabs section
function createDynamicTabsSection(parent) {
  const sectionHeader = DOM.typography('h2', {
    parent,
    text: 'Dynamic Tabs',
    classes: ['mt-5', 'mb-3'],
  });

  // Container for the tabs and content
  const tabsContainer = DOM.element('div', { parent });

  let isTabsStyle = true; // Flag to track the current style (tabs or pills)

  // Create the nav element
  const nav = DOM.element('ul', {
    parent: tabsContainer,
    classes: ['nav', 'nav-tabs'],
    attributes: { role: 'tablist' },
  });

  // Tab content container
  const tabContent = DOM.element('div', { parent: tabsContainer, classes: ['tab-content'] });

  // Add initial tab
  addNewTab('Tab 1', 'This is the content of Tab 1.', true);

  // Controls to add new tabs and switch styles
  const controlsContainer = DOM.element('div', { parent, classes: ['mt-3'] });

  // Button to add a new tab
  const addTabButton = DOM.button({
    parent: controlsContainer,
    text: 'Add New Tab',
    classes: ['btn', 'btn-primary', 'me-2'],
    events: {
      click: () => {
        const tabCount = nav.children.length + 1;
        addNewTab(`Tab ${tabCount}`, `This is the content of Tab ${tabCount}.`);
      },
    },
  });

  // Button to switch between tabs and pills
  const switchStyleButton = DOM.button({
    parent: controlsContainer,
    text: 'Switch to Pills',
    classes: ['btn', 'btn-secondary'],
    events: {
      click: () => {
        isTabsStyle = !isTabsStyle;
        switchNavStyle(isTabsStyle);
        switchStyleButton.textContent = isTabsStyle ? 'Switch to Pills' : 'Switch to Tabs';
      },
    },
  });

  // Function to add a new tab
  function addNewTab(title, content, isActive = false) {
    const tabId = `tab-${nav.children.length + 1}`;

    // If the new tab is active, deactivate others
    if (isActive) {
      Array.from(nav.querySelectorAll('.nav-link')).forEach((link) => {
        link.classList.remove('active');
        link.setAttribute('aria-selected', 'false');
      });
      Array.from(tabContent.querySelectorAll('.tab-pane')).forEach((pane) => {
        pane.classList.remove('show', 'active');
      });
    }

    // Create nav item
    const navItem = DOM.element('li', {
      parent: nav,
      classes: ['nav-item'],
      attributes: { role: 'presentation' },
    });

    // Create nav link as a button
    const navLink = DOM.element('button', {
      parent: navItem,
      classes: ['nav-link'],
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

    // Set active class if needed
    if (isActive) {
      navLink.classList.add('active');
    }

    // Create tab pane
    const tabPane = DOM.element('div', {
      parent: tabContent,
      classes: ['tab-pane', 'fade'],
      attributes: {
        id: tabId,
        role: 'tabpanel',
        'aria-labelledby': `${tabId}-tab`,
      },
      html: `<p>${content}</p>`,
    });

    // Show the tab pane if it's active
    if (isActive) {
      tabPane.classList.add('show', 'active');
    }
  }

  // Function to switch between tabs and pills styles
  function switchNavStyle(isTabs) {
    nav.classList.remove('nav-tabs', 'nav-pills');
    nav.classList.add(isTabs ? 'nav-tabs' : 'nav-pills');
  }
}
