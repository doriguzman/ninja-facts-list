var submit=document.querySelector('#button')

submit.addEventListener('click', function(event){
    event.preventDefault();
    var list= document.querySelector('ol')

    var newListElement = document.createElement('li')
    var input= document.querySelector('#textbox')
    newListElement.innerHTML= input.value
    list.appendChild(newListElement)

    input.value= ''
})



document.addEventListener('click', function(event){
console.log(event.target.className)
   
    if(event.target.tagName === 'LI' && event.target.className ==='uppercase'){
        console.log('trying to make it lowercase')
        var clicked= event.target
        event.target.classList.remove('uppercase') 
        clicked.style.textTransform = 'lowercase'   
        console.log(clicked.style)
       
    }else if (event.target.tagName==='LI'){
        var clicked= event.target
        clicked.style.textTransform = 'uppercase'   
        event.target.classList.add('uppercase')     
    }

})




// var button = document.querySelector('#button')
// button.addEventListener('click', function(event){
//     var list= document.querySelector('ol')
//     var input= document.querySelector('#textbox').value
//    var newnew= document.createElement('LI')
//    newnew.innerText=input
//    list.appendChild(newnew)
//    input= ''
// })

