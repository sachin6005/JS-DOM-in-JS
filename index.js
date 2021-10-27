var countdownElement = document.getElementById('countdown')

var initialval = countdownElement.innerHTML

console.log(initialval)

var form = document.getElementById('register-form')

var submitBtn = document.getElementById('submit')

var textArea = document.getElementById('text-area')


setInterval(function(){
    initialval = initialval > 0 ? initialval-1 : 0
    countdownElement.innerHTML = initialval
       var color = initialval % 2 === 0 ? 'blue' : 'green'
       document.body.style.backgroundColor = color
    //  var wid = initialval % 2 === 0 ? '300px' : '500px'
    //  form.style.width = wid
       var color = initialval % 2 === 0 ? 'blue' : 'green'
       form.style.backgroundColor = color
},1000)

submitBtn.addEventListener('click',function(){
    alert('please fill all the required fields')
})

form.onmouseover = function(){
    form.style.backgroundColor = 'yellow'
    textArea.classList.add('box')
}
form.onmouseout = function(){
    form.style.backgroundColor = 'coral'
    textArea.classList.remove('box')
}




