export default class Aim {
    positionX = 1;
    positionY = 1;   
    hitPositionX;
    hitPositionY; 
    isFiring = false;

    constructor() {
        this.image = document.createElement('img');
        this.image.classList.add('aim');
        this.image.src = './assets/aim.png';
        
    }
    update(keysCode) {
        this.move(keysCode)
    }
    move(keys) {        
    
        if(keys.has('ArrowUp')) {
            this.positionX = 0;            
            this.image.style.top = -1 + '%';            
        } 
        if(keys.has('ArrowRight')) {
            this.positionY = 2;
            this.image.style.left = 73 + '%';                
        } 
        if(keys.has('ArrowDown')) {
            this.positionX = 2;
            this.image.style.top = 51 + '%';                 
        } 
        if(keys.has('ArrowLeft')) {
            this.positionY = 0;
            this.image.style.left = 28 + '%';            
        } 
        if(keys.has('Enter')) {           
            this.isFiring = true;    
            this.hitPositionX = this.positionX;
            this.hitPositionY = this.positionY;
            // console.log('X= ', this.hitPositionX, 'Y= ', this.hitPositionY); 
        }        
        if(keys.size === 0) {
            this.isFiring = false;
            this.positionX = 1;
            this.positionY = 1;
            this.image.style.top = 25 + '%';
            this.image.style.left = 50 + '%';            
        }        
    }
}



