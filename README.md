# JSelements

https://alfa-dev.github.io/JSelements/


## How to use
```
 render(
    header(
      h1('JS Elements')
    ),
    main([
      h2('Exemplo de lista'),
      ul(colors['colors'].map(function(c){
          return li( c, c.color);
        })
      )
    ])
  );
```
