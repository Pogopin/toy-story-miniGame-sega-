export default class Game {
    constructor({ map, aim, star, info, life }) {
        this.map = map;
        this.aim = aim;
        this.star = star;
        this.info = info;
        this.life = life;

        this.activeKeys = new Set();
        this.loop = this.loop.bind(this);
    }
    async init() {
        //get input        
        
        document.addEventListener('keydown', (event)=> {
            event.preventDefault();    
            // console.log(event.code)
            switch(event.code) {
                case 'ArrowUp':
                case 'ArrowRight':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'Enter':                
                    this.activeKeys.add(event.code);                                        
            }
        });
        document.addEventListener('keyup', (event)=> {            
            event.preventDefault();
           
            switch(event.code) {
                case 'ArrowUp':
                case 'ArrowRight':
                case 'ArrowDown':
                case 'ArrowLeft':
                case 'Enter':               
                    this.activeKeys.delete(event.code);
            }
        })
        // this.star.render();
    }
    hitTest(isFiring, aimPositionX, aimPositionY) {        
        // console.log('hitX--' + aimPositionX, 'HitY--' + aimPositionY)
        if(isFiring) {
            if(this.star.is) {
                if(aimPositionX == this.star.x && aimPositionY == this.star.y) {
                    console.log('HIT!!!!!!!!!!!!!');                
                    clearTimeout(this.star.tr);
                    clearTimeout(this.star.tr2);
                    this.star.contentStar = 5;
        
                    document.querySelector('.star--active').classList.remove('star--active');
                    this.star.num.remove();
                    this.star.is = false;
                    setTimeout(() => this.star.render(), 1500);                      
                    return;                    
                }
            }
        }        
    }

    start() {
        requestAnimationFrame(this.loop);
    }
    loop() {
        // console.log('loop');
        this.aim.update(this.activeKeys);
        this.life.update(this.star.totalStars);
        // this.star.hitTest(this.aim.isFiring, this.aim.hitPositionX, this.aim.hitPositionY);
        this.hitTest(this.aim.isFiring, this.aim.hitPositionX, this.aim.hitPositionY);

        requestAnimationFrame(this.loop);
    }
}