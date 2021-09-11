import { getStartCode, settingProperties, firstComponent } from './snippets.js'
import { codeSnippet } from './components.js'

import './head.js'

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
