
const buttons= document.querySelectorAll('.button');
const body=document.body
buttons.forEach((btn)=>{

    console.log(btn);
    btn.addEventListener('click',function(e){
      body.style.backgroundColor=e.target.id
    })
})