# JSelements

https://alfa-dev.github.io/JSelements/


## How to use
```

let tableLine = (color) => {
  return tr(
    td(color.color),
    td({style: `color: ${color.code.hex}`}, color.code.hex)
  )
}

render(
 section(
    header(
      h2('Exemplo de tabela de Cores')
    ),

    table(
      thead(
        tr(
          th('Name'), th('Hex')
        )
      ),
      colors.map(tableLine)
    )
  )
)
```


### Result
```
<section>
   <header>
      <h2>Exemplo de tabela de Cores</h2>
   </header>
   <table>
      <thead>
         <tr>
            <th>Name</th>
            <th>Hex</th>
         </tr>
      </thead>
      <tr>
         <td>black</td>
         <td style="color: #000">#000</td>
      </tr>
      <tr>
         <td>white</td>
         <td style="color: #FFF">#FFF</td>
      </tr>
      <tr>
         <td>red</td>
         <td style="color: #FF0">#FF0</td>
      </tr>
      <tr>
         <td>blue</td>
         <td style="color: #00F">#00F</td>
      </tr>
      <tr>
         <td>yellow</td>
         <td style="color: #FF0">#FF0</td>
      </tr>
      <tr>
         <td>green</td>
         <td style="color: #0F0">#0F0</td>
      </tr>
   </table>
</section>
```
