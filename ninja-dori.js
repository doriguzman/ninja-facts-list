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
    if (event.target.tagName==='LI'){
        var clicked= event.target
        clicked.style.textTransform = 'uppercase'        
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

