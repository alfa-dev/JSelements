import {tags} from './tags.js';

tags.map(function(e) {
  window[e] = function(...args) {
    const ELEMENT = document.createElement(e)

    args.map(insertContentAtElement)
      .filter( child => !!child )
      .map((child) => {
        ELEMENT.appendChild(child)
      })

    function insertContentAtElement(content) {
      if(content === undefined) return

      if(isElement(content))
        return content
      else if(content.constructor === String)
        return document.createTextNode(content)
      else if(content.constructor === Array) {
        let container = document.createDocumentFragment()

        content.map(insertContentAtElement)
          .map((element) => {
            container.appendChild(element)
          })

        return container
      }
      else if(content.constructor === Object) {
        for (var prop in content) {
          ELEMENT.setAttribute(prop, content[prop]);
        }

        return;
      }
    }

    function isElement(obj) {
      try {
        //Using W3 DOM2 (works for FF, Opera and Chrome)
        return obj instanceof HTMLElement;
      }
      catch(e){
        //Browsers not supporting W3 DOM2 don't have HTMLElement and
        //an exception is thrown and we end up here. Testing some
        //properties that all elements have (works on IE7)
        return (typeof obj==="object") &&
          (obj.nodeType===1) && (typeof obj.style === "object") &&
          (typeof obj.ownerDocument ==="object");
      }
    }

    return ELEMENT;
  };
});

window['render'] = function(...content) {
  content.map(function(e) {
    document.body.appendChild(e);
  });
}
