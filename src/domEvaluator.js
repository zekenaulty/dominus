// domEvaluator.js

class DomEvaluator {
    constructor() {
      if (DomEvaluator.instance) {
        return DomEvaluator.instance;
      }
  
      this.data = {};
      this.isDirty = false;
      this.updateQueue = [];
      this.isUpdating = false;
      DomEvaluator.instance = this;
    }
  
    // Factory method to get the singleton instance
    static getInstance() {
      if (!DomEvaluator.instance) {
        DomEvaluator.instance = new DomEvaluator();
      }
      return DomEvaluator.instance;
    }
  
    // Method to set the data object and make it reactive
    setData(data) {
      this.data = this.makeReactive(data);
      this.evaluate(); // Initial evaluation
    }
  
    // Method to evaluate the DOM
    evaluate(element = document.body) {
      const walker = document.createTreeWalker(
        element,
        NodeFilter.SHOW_TEXT,
        null,
        false
      );
  
      let node;
      const textNodes = [];
  
      while ((node = walker.nextNode())) {
        if (node.nodeValue.includes('{')) {
          textNodes.push(node);
        }
      }
  
      textNodes.forEach((textNode) => {
        const originalText = textNode.nodeValue;
        const parsedText = this.parseText(originalText);
        if (parsedText !== originalText) {
          textNode.nodeValue = parsedText;
        }
      });
    }
  
    // Parse text nodes and replace expressions
    parseText(text) {
      const regex = /{([^{}]+)}/g;
      let match;
      let result = text;
  
      while ((match = regex.exec(text)) !== null) {
        const expression = match[1].trim();
        const value = this.resolveExpression(expression);
        result = result.replace(match[0], value !== undefined ? value : '');
      }
  
      return result;
    }
  
    // Resolve expressions using the data object
    resolveExpression(expression) {
      try {
        // Only allow property access on the data object
        const func = new Function('data', `with(data) { return ${expression}; }`);
        return func(this.data);
      } catch (error) {
        console.warn(`Failed to evaluate expression: ${expression}`, error);
        return '';
      }
    }
  
    // Make data object reactive using Proxy
    makeReactive(obj) {
      const self = this;
  
      function createReactive(target) {
        return new Proxy(target, {
          get(target, prop, receiver) {
            const value = Reflect.get(target, prop, receiver);
            if (typeof value === 'object' && value !== null) {
              return createReactive(value); // Recursive for nested objects
            }
            return value;
          },
          set(target, prop, value, receiver) {
            const oldValue = target[prop];
            const result = Reflect.set(target, prop, value, receiver);
            if (oldValue !== value) {
              self.markDirty();
            }
            return result;
          },
        });
      }
  
      return createReactive(obj);
    }
  
    // Mark the evaluator as dirty and queue an update
    markDirty() {
      if (!this.isDirty) {
        this.isDirty = true;
        this.queueUpdate();
      }
    }
  
    // Queue an update using setTimeout
    queueUpdate() {
      if (!this.isUpdating) {
        this.isUpdating = true;
        setTimeout(() => {
          this.digest();
        }, 0);
      }
    }
  
    // Perform the DOM update
    digest() {
      if (this.isDirty) {
        this.evaluate();
        this.isDirty = false;
      }
      this.isUpdating = false;
    }
  
    // Manual method to trigger an update
    update() {
      this.markDirty();
    }
  }
  
  export { DomEvaluator };
  