import Game from './src/game.js';
import Map from './src/map.js';
import Aim from './src/aim.js';
import Star from './src/star.js';
import Info from './src/info.js';
import LifeInfo from './src/lifeInfo.js';

import { startBtn } from './src/constants.js';

const game = new Game({
    info: new Info(),
    map: new Map(),
    aim: new Aim(),
    star: new Star(),
    life: new LifeInfo()
    
})
window.addEventListener('load', ()=> {    
    const cont = document.querySelector('.container');
    cont.append(game.aim.image);    
})
startBtn.addEventListener('click', (event)=> {    
    game.init();
    game.start();
    startBtn.classList.add('none');
});
// console.log(game)



