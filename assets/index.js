let googleapis      = link({rel: "preconnect", href: "https://fonts.googleapis.com"})
let gstatic         = link({rel: "https://fonts.gstatic.com", href: "https://fonts.googleapis.com", crossorigin: true})
let googleFontGlory = link({href: "https://fonts.googleapis.com/css2?family=Glory:wght@200;600&display=swap", rel: "stylesheet"})

let highlight = script({src: './assets/vendor/highlight.min.js', onload: 'hljs.highlightAll();'})
let highlightTheme = link({href: "./assets/vendor/dracula.min.css", rel: "stylesheet"})

let lightGray = '#4d4f68';
let gray      = '#323346';

head(
  googleapis,
  gstatic,
  googleFontGlory,

  highlight,
  highlightTheme,

  style(`
    body {
      margin: 0px;
      font-family: 'Glory', sans-serif;
      font-size: 14px;
    }

    code {
      border-radius: .5em;
    }

    section {
      margin: .5em auto;
      width: 80%;
      max-width: 60em;
      margin-bottom: 4em;
    }

    #main {
      position: relative;
      overflow: auto;
      background: linear-gradient(130deg, ${lightGray}, ${gray});
      height: 50vh;
      width: 100%;
      max-width: unset;
      color: white;
      margin: 0px 0px 4em;
      text-align: center;
    }

    #main header {
      position: absolute;
      top: 50%;
      width: 100%;
      transform: translateY(-50%);
    }

    #main h1, #main p {
      margin: 0px;
      font-size: 4em;
      font-weight: normal;
      text-shadow: 2px 2px 3px rgba(0,0,0, .4);
    }

    #main p {
      font-size: 1.5em;
    }

    #main p:last-of-type {
      font-size: 1em;
      margin-top: .3em;
    }

    #main h1 strong {
      margin-left: .2em;
    }

    .shadow {
      box-shadow: -0.0625rem 0 0.625rem 0 rgb(0 0 0 / 7%),
              0.3125rem 1.25rem 2.5rem 0 rgb(0 0 0 / 4%),
              0.2em 0.2em 0.4em rgb(0 0 0 / 30%)
    }
  `)
)

let codeSnippet = (content) => {
  return pre(
    code({class: 'language-javaScript shadow'}, content)
  )
}

let getStartCode = `render(
  section(
    h1('Hello World')
  )
)`

let settingProperties = `
div(
  {id: 'item_1', class: 'item', 'aria-label': 'First item' },
  'First item'
),

/* -- The order doesn't matter -- */
div(
  'Second item',
  {id: 'item_2', class: 'item', 'aria-label': 'Second item' }
)
`

let firstComponent = `let myAwesomeComponent = (content) => {
  return div(
    'My content is',
    content
  )
}

/* -- Using the component -- */
render(
  myAwesomeComponent('First Content'),
  myAwesomeComponent('Second Content')
)
`

render(
 section({id: 'main'},
    header(
      h1('JS',
        strong('Elements')
      ),
      p('2kb Javascript Framework'),
      p({id: 'timeCounter'})
    )
  ),
  section(
    h2('Get Start'),
    codeSnippet(getStartCode)
  ),

  section(
    h2('Setting tag properties'),
    codeSnippet(settingProperties)
  ),

  section(
    h2('Create your own component'),
    codeSnippet(firstComponent)
  )
)

var timeEnd = performance.now()
var result = Math.round(performance.now() - timeStart, 2)

document.getElementById('timeCounter').innerHTML =  `${result}ms to render the entire page`
