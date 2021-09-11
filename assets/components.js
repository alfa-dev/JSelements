export const codeSnippet = (content) => {
  return pre(
    code({class: 'language-javaScript shadow'}, content)
  )
}
