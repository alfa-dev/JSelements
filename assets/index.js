import { render } from './JSElements.js';
import { getStartCode, settingProperties, firstComponent } from './snippets.js'
import { codeSnippet } from './components.js'

import './head.js'

render(document.body,
  header({id: 'main'},
    h1('JS',
      strong('Elements')
    ),
    p('2kb Javascript Framework'),
  ),
  section(
    article(
      h2('Get Start'),
      codeSnippet(getStartCode)
    ),

    article(
      h2('Setting tag properties'),
      codeSnippet(settingProperties)
    ),

    article(
      h2('Create your own component'),
      codeSnippet(firstComponent)
    )
  )
)
