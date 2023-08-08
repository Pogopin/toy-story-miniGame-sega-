export default class Info {
    constructor() {
        const info = document.createElement('div');
        info.classList.add('info');
        info.innerHTML =`
            <p>Нажимайте стрелки: <span> ВЛЕВО, ВПРАВО, ВНИЗ, ВВЕРХ </span> -- для управлением прицелом</p>
            <p><span> ENTER </span> для выстрела</p>
        `;
        document.querySelector('.container').append(info);

    }
}