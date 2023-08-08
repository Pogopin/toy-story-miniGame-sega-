import Star from './star.js';
export default class Map {

    cells = [];
    constructor() {        
        const table = document.createElement('table');            

        for(let x = 0; x < 3; x++) {
            const tr = document.createElement('tr');
            tr.dataset.x = x;
            const row = [];

            for(let y = 0; y < 3; y++) {
                const td = document.createElement('td');                
                // td.dataset.x = x;
                // td.dataset.y = y;
                Object.assign(td.dataset, { x, y });                 
                td.append(new Star().image);

                tr.append(td);
                row.push(td);

            }
            table.append(tr);
            this.cells.push(row);
        }        
       
        document.querySelector('.container').append(table);
       
                
    }
}
