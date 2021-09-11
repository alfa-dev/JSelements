export const getStartCode = `render(
  section(
    h1('Hello World')
  )
)`

export const settingProperties = `
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

export const firstComponent = `let myAwesomeComponent = (content) => {
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
