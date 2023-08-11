export default class LifeInfo {
    heart = 3;

    constructor() {        
        this.lifePanel = document.createElement('div');
        this.lifePanel.classList.add('lifeInfo');        
        document.querySelector('.container').append(this.lifePanel);
    }

    update(totalStars) {        
        this.lifePanel.innerHTML =`
            <p>Осталось звезд:<span>    ${totalStars}</span></p>
            
        `;
    }
}