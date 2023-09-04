import { gameSuccessTable } from './constants.js';
export default class Star {
    life = 2;//количество жизней
    contentStar = 5;
    starsCounter = 0;
    totalStars = 20;
    timer = 1100;
    tr;
    tr2;
    is = true;
    constructor() {
        this.image = document.createElement('img');
        this.image.classList.add('star');
        this.image.src = './assets/star.svg';

        this.num = document.createElement('span');
        this.num.classList.add('num');         
    }    
    random(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
    render() {                     
        if(this.life < 0) return //выход из рекурсии - нет жизней

        this.is = true;
        this.x = this.random(0, 2);		
		this.y = this.random(0, 2);

        const targetElement = document.querySelector(`td[data-x="${this.x}"][data-y="${this.y}"]`);
        targetElement.children[0].classList.add('star--active');
        
        this.timer = this.timer - 50;    

        if(this.starsCounter === 20) {

            this.starsCounter = 0;            
            document.querySelector('.star--active').classList.remove('star--active');
            this.num.remove();

            gameSuccessTable.classList.remove('none');
            // console.log('выйграл')
            return;
        }    
        this.starsCounter ++;
        this.totalStars --;        
        
        this.starsTimer (targetElement, this.timer);        
    }    

    starsTimer (targetElement, timer) {       
        try{
            if(this.contentStar < 0) {                
                this.life -= 1;// счетчик жизней, уменьшается, если игрок не успел выстрелись и таймер звезды закончился!

                this.contentStar = 5;                    
                document.querySelector('.star--active').classList.remove('star--active');
                this.num.remove();                  
                                         
                setTimeout(() => this.render(), 1500);                    
                return;            
            } 
            targetElement.append(this.num);
            this.num.innerText = this.contentStar;
                       
            this.contentStar --;
                
            this.tr = setTimeout(() => this.num.remove(), timer);        
            this.tr2 = setTimeout(() => this.starsTimer(targetElement, timer), timer);
        } 
        catch {
            console.log('error');
        }           
    }    
}