import {tags} from './tags.js';

tags.map( function(e){
  window[e] = function(props, content){
    var element = document.createElement(e);

    if(!content) {
      content = props;
      props = null;
    }

    if(!content)
      return element;

    if(content.constructor === Array){
      content.map(insertContentAtElement.bind(this, element));
    } else {
      insertContentAtElement(element, content);
    }

    if(!!props) {
      for (var prop in props) {
        element.setAttribute(prop, props[prop]);
      }
    }

    function insertContentAtElement(element, content) {
      if(content.constructor === String) {
        element.innerText = content;
      } else {
        element.appendChild(content);
      }
    }

    return element;
  };
});

window['render'] = function(...content) {
  content.map(function(e) {
    document.body.appendChild(e);
  });
}