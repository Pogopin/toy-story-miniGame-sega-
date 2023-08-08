export default class Game {
    constructor({ map, aim, star, info }) {
        this.map = map;
        this.aim = aim;
        this.star = star;
        this.info = info

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
        this.star.render();
    }
    start() {
        requestAnimationFrame(this.loop);
    }
    loop() {
        // console.log('loop');
        this.aim.update(this.activeKeys);
        this.star.hitTest(this.aim.isFiring, this.aim.hitPositionX, this.aim.hitPositionY);

        requestAnimationFrame(this.loop);
    }
}