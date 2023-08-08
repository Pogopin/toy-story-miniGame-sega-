import Game from './src/game.js';
import Map from './src/map.js';
import Aim from './src/aim.js';
import Star from './src/star.js';
import Info from './src/info.js';

const game = new Game({
    info: new Info(),
    map: new Map(),
    aim: new Aim(),
    star: new Star(),
    
})

window.addEventListener('load', ()=> {    
    const cont = document.querySelector('.container');
    cont.append(game.aim.image);    
})
game.init();
game.start();

console.log(game)



