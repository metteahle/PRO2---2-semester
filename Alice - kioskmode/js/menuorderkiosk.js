
// Kilde: https://michalsnik.github.io/aos/
//billeder der flipper rundt
AOS.init({
	duration: 850,
})


//let sum = 0

//let gem = sessionStorage.setItem("test",23)

let orders = 0
ialt.innerHTML = orders


function cancel(amount){
	orders -= amount
  ialt.innerHTML = orders
}

//Indkøbskurv
onionringsstarter.addEventListener('click',
function(){
  //bestillinger.innerHTML += "<p>Suppe</p>" /*Denne får "bare" teksten suppe frem under bestillinger*/
  bestillinger.innerHTML += onionrings.innerHTML /*Denne får hele div med id soup ind under bestillinger*/
  orders = orders + 30
  ialt.innerHTML = orders;
  //bestillinger.innerHTML += parseInt( sessionStorage.getItem("test")) + parseInt( sessionStorage.getItem("test"))
})

soupdish.addEventListener('click',
function(){
  bestillinger.innerHTML += soup.innerHTML
  orders = orders + 45
  ialt.innerHTML = orders;
})

lasagnemeal.addEventListener('click',
function(){
  bestillinger.innerHTML += lasagne.innerHTML
  orders = orders + 70
  ialt.innerHTML = orders;
})

roastporkmeal.addEventListener('click',
function(){
  bestillinger.innerHTML += roastpork.innerHTML
  orders = orders + 119
  ialt.innerHTML = orders;
})

lemonpiedessert.addEventListener('click',
function(){
  bestillinger.innerHTML += lemonpie.innerHTML
  orders = orders + 40
  ialt.innerHTML = orders;
})

sorbetdessert.addEventListener('click',
function(){
  bestillinger.innerHTML += sorbet.innerHTML
  orders = orders + 35
  ialt.innerHTML = orders;
})


    //betal knap
    betal.addEventListener('click', function(){
      localStorage.setItem("liste", bestillinger.innerHTML)

    })
