
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="index.js" defer></script>
</head>
<body>
    
</body>
</html>
```function calculaPrecoTotal(quantidade) {
    let precoUmaD = 1;
    let precoMenosDeUd = 1.3;
    let resultado = 0 ;
    if(quantidade<12){
      resultado = quantidade*precoMenosDeUd
    }else if(quantidade>12){
      resultado = quantidade*precoUmaD
    }else{
      resultado = resultado
    }
    return resultado;
}
calculaPrecoTotal(2)```

