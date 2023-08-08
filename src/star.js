export default class Star {

    contentStar = 5;
    starsCounter = 0;
    totalStars = 5;
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
    hitTest(isFiring, aimPositionX, aimPositionY) {
        
        // console.log('hitX--' + aimPositionX, 'HitY--' + aimPositionY)
        if(isFiring) {
            if(this.is) {
                if(aimPositionX == this.x && aimPositionY == this.y) {
                    console.log('HIT!!!!!!!!!!!!!');                
                    clearTimeout(this.tr);
                    clearTimeout(this.tr2);
                    this.contentStar = 5;
        
                    document.querySelector('.star--active').classList.remove('star--active');
                    this.num.remove();
                    this.is = false;
                    setTimeout(() => this.render(), 1500);                      
                    return;
                    
                }
            }
        }        
    }
    random(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
    render() {
        this.is = true;
        this.x = this.random(0, 2);		
		this.y = this.random(0, 2);

        console.log(this.x, this.y)

        const targetElement = document.querySelector(`td[data-x="${this.x}"][data-y="${this.y}"]`);
        targetElement.children[0].classList.add('star--active');
        
        this.timer = this.timer - 50;    

        if(this.starsCounter === 5) {

            this.starsCounter = 0;            
            document.querySelector('.star--active').classList.remove('star--active');
            this.num.remove();
            return;
        }    
        this.starsCounter ++;
        // totalStars --;        
        
        this.starsTimer (targetElement, this.timer);        
    }    

    starsTimer (targetElement, timer) {       
        try{
            if(this.contentStar < 0) {
    
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
            console.log(345);
        }           
    }    
}