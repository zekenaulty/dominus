// domEvaluator.js

export class DomEvaluator {
    constructor(data = {}) {
      this.data = data;
    }
  
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
  
    setData(newData) {
      this.data = newData;
    }
  }
  