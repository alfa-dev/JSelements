import { render } from './JSElements.js';

let metaTags = document.createDocumentFragment()

metaTags.appendChild(meta({'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}))
metaTags.appendChild(meta({name: 'viewport', content: 'width=device-width, initial-scale=1.0'}))

let googleapis      = link({rel: "preconnect", href: "https://fonts.googleapis.com"})
let gstatic         = link({rel: "https://fonts.gstatic.com", href: "https://fonts.googleapis.com", crossorigin: true})
let googleFontGlory = link({href: "https://fonts.googleapis.com/css2?family=Glory:wght@200;600&display=swap", rel: "stylesheet"})

let highlight       = script({src: './assets/vendor/highlight.min.js', onload: 'hljs.highlightAll();'})
let highlightTheme  = link({href: './assets/vendor/dracula.min.css', rel: 'stylesheet'})

let mainStyle       = link({href: './assets/mainStyle.less', type: 'text/css', rel:'stylesheet/less'})
let less            = script({src: 'https://cdn.jsdelivr.net/npm/less@4.1.1',  type: 'text/javascript'})

render(document.head,
  metaTags,

  googleapis,
  gstatic,
  googleFontGlory,

  mainStyle,
  less,

  highlight,
  highlightTheme
)
