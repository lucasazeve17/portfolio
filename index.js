let w = 0
const arrowLeft = document.querySelector('.arrow')
const slide = document.querySelector('.slide-body')

arrowLeft.addEventListener('click',function(){
    console.log('width', w)

    slide.scroll({
        top:0,
        left:w+200,
        behavior:'smooth'
    })
    w = w+200
    console.log('width', w)

    // alert('alou')
})