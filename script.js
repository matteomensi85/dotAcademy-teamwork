var image = document.getElementById('img')
var rewardBtn = document.getElementById('reward-btn')


rewardBtn.addEventListener('click', () =>{
    if(image.style.display == 'block'){
        image.style.display = 'none'
    }else{
        image.style.display = 'block'
    }

})
