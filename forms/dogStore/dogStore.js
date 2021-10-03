let products = ["Doy treats $12.00", "Dog leash $ 15.00", "Dog medicine $200.00"]

btnProducts.onclick=function(){
  let display = lblItem.value
  lblItem.value = products
}

let wish = []

btnWish.onclick=function(){
  let newAdd = inptWish.value
  wish.push(inptWish.value)
  lblWish.value = wish
}
