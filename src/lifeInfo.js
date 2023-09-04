export default class LifeInfo {
    heart;
    total = 20;
    constructor() {        
        this.lifePanel = document.createElement('div');
        this.lifePanel.classList.add('lifeInfo');        
        this.image = document.createElement('img');
        this.image.src = './assets/free.png';

        this.lifePanel.innerHTML =`            
            <p>Осталось звезд:<span>${this.total}</span></p>
            <div class="life">                
                <img class="life__img" src="${this.image.src}" alt="">
                <img class="life__img" src="${this.image.src}" alt="">
                <img class="life__img" src="${this.image.src}" alt="">                
            </div>   
        `;        
        document.querySelector('.container').append(this.lifePanel);        
    }
    update(totalStars, life) {                         
        this.total = totalStars;
        this.heart = life;        
        document.querySelector('.lifeInfo > p > span').innerHTML = totalStars;   
        this.removeHearts();
    }

    removeHearts() {
        // console.log('life', this.heart);
        const lifeImg = document.querySelectorAll('.life__img');        
        if(lifeImg[this.heart + 1]) lifeImg[this.heart + 1].remove();        
    }
}
