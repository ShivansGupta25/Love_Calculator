let form=document.querySelector("form")

form.addEventListener("submit",(e)=>{
    const Boy = document.getElementById("Boy")
    const Girl = document.getElementById("Girl")

    /////////// For taking the value that user as put we can access it by (Boy.value)

    const l1= Boy.value.length
    const l2= Girl.value.length

    const result=Math.pow(l1+l2,3)%101

    let fresult = document.querySelector("h2")
    fresult.textContent=`Result :- ${result}% Love`

    /////////////// Value will not stable means the form data will directly submit.By default. so for stoping this we can use (e.preventDefault)

    e.preventDefault()



    ///////// Agar 1 bar calculation hogaye then if we have to again calculate we need to clear form manually . For automatically we use (form.reset())
    form.reset()

})