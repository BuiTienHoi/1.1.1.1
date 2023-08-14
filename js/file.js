var content = document.querySelector('.content')
var input = document.querySelector('.content input')
var btnRemoeAll = document.querySelector('.remove-all')

var tags =[]
function createTags(){
    content.innerHTML = ''
    for(let i =0; i<tags.length; i++){
        const tag = tags[i];
        content.innerHTML += `<li>
                                ${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
                            </li>
                            `
    }

    content.appendChild(input)
    input.focus()
}
createTags()
input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
       tags.push(input.value.trim()) 
       createTags()
    }
})

function removeTag(index){
    tags.splice(index,1)
    createTags()
}

btnRemoeAll.addEventListener('click', function(){
    tags = []
    createTags()
})