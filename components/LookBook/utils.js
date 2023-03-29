import imagesLoaded from 'imagesloaded';

const map = (x, a, b, c, d) => (x - a) * (d - c) / (b - a) + c;

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        imagesLoaded(document.querySelectorAll(selector), { background: true }, resolve);
    });
};

const getTranslationDistance = (element1, element2, spread = 80, maxDistance = 500) => {
    const elCenter = { x: element1.offsetLeft + element1.offsetWidth / 2, y: element1.offsetTop + element1.offsetHeight / 2 };
    const elCenter2 = { x: element2.offsetLeft + element2.offsetWidth / 2, y: element2.offsetTop + element2.offsetHeight / 2 };

    spread = Math.max(map(getDistance(element1, element2), 0, maxDistance, spread, 0), 0);

    const angle = Math.atan2(Math.abs(elCenter2.y - elCenter.y), Math.abs(elCenter2.x - elCenter.x));

    let x = Math.abs(Math.cos(angle) * spread);
    let y = Math.abs(Math.sin(angle) * spread);

    return {
        x: elCenter.x < elCenter2.x ? x * -1 : x,
        y: elCenter.y < elCenter2.y ? y * -1 : y
    };
};

const getDistance = (element1, element2) => {
    const elCenter = { x: element1.offsetLeft + element1.offsetWidth / 2, y: element1.offsetTop + element1.offsetHeight / 2 };
    const elCenter2 = { x: element2.offsetLeft + element2.offsetWidth / 2, y: element2.offsetTop + element2.offsetHeight / 2 };
    return Math.hypot(elCenter.x - elCenter2.x, elCenter.y - elCenter2.y);
}

export {
    map,
    preloadImages,
    getTranslationDistance,
    getDistance
};