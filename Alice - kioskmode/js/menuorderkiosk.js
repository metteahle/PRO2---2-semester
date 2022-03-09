
let sum = 0

//let gem = sessionStorage.setItem("test",23)

    onionringsstarter.addEventListener('click',
    function(){
      //bestillinger.innerHTML += "<p>Suppe</p>" /*Denne får "bare" teksten suppe frem under bestillinger*/
      bestillinger.innerHTML += onionrings.innerHTML /*Denne får hele div med id soup ind under bestillinger*/
      sum = sum + 30
      ialt.innerHTML = sum;
      //bestillinger.innerHTML += parseInt( sessionStorage.getItem("test")) + parseInt( sessionStorage.getItem("test"))
    })


    soupdish.addEventListener('click',
    function(){
      bestillinger.innerHTML += soup.innerHTML
      sum = sum + 45
      ialt.innerHTML = sum;
    })

    lasagnemeal.addEventListener('click',
    function(){
      bestillinger.innerHTML += lasagne.innerHTML
      sum = sum + 70
      ialt.innerHTML = sum;
    })

    roastporkmeal.addEventListener('click',
    function(){
      bestillinger.innerHTML += roastpork.innerHTML
      sum = sum + 119
      ialt.innerHTML = sum;
    })

    lemonpiedessert.addEventListener('click',
    function(){
      bestillinger.innerHTML += lemonpie.innerHTML
      sum = sum + 40
      ialt.innerHTML = sum;
    })

    sorbetdessert.addEventListener('click',
    function(){
      bestillinger.innerHTML += sorbet.innerHTML
      sum = sum + 35
      ialt.innerHTML = sum;
    })

    //betal knap
    betal.addEventListener('click', function(){
      localStorage.setItem("liste", bestillinger.innerHTML)

    })
