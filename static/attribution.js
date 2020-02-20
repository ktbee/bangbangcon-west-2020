const IMAGES = {
    'core-memory-close-up.jpg': {
        attributionLink:
            'http://www.ricomputermuseum.org/Home/interesting_computer_items/magnetic-core-memory',
        attributionText:
            'Rhode Island Computer History Museum',
        location: '/static/core-memory-close-up.jpg'
    },
    'core-rope-memory-close-up': {
        attributionLink:
            'https://authors.library.caltech.edu/5456/1/hrst.mit.edu/hrs/apollo/public/visual3.htm',
        attributionText:
            'Photograph © Raytheon, from the files of JackPoundstone',
        location: '/static/core-rope-memory-close-up.jpg'
    },
    'core-rope-memory-in-progress': {
        attributionLink:
            'https://wehackthemoon.com/people/dan-lickly-computer-engineering',
        attributionText: 'Image courtsey: Draper/Raytheon',
        location: '/static/core-rope-memory-in-progress.jpg'
    }
};

const imgElements = Array.from(document.getElementsByTagName('img'));

for (const img of imgElements) {
    if (img.id) {
        img.src = IMAGES[img.id].location;
        const span = document.createElement('span');
        span.className = 'attribution';
        span.innerHTML = `<a href=${IMAGES[img.id].attributionLink}>${
            IMAGES[img.id].attributionText
        }</a>`;
        img.parentNode.append(span);
    }
}
