const IMAGES = {
    'agc-memory-modules': {
        attributionLink:
            'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText:
            'Image courtesy: Draper',
        location: '/static/agc-memory-modules.jpg'
    },
    'core-memory-close-up': {
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
    'core-rope-memory-diagram': {
        attributionLink:
            'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText:
            'Image courtesy: Draper',
        location: '/static/core-rope-memory-diagram.jpg'
    },
    'core-rope-memory-in-progress': {
        attributionLink:
            'https://wehackthemoon.com/people/dan-lickly-computer-engineering',
        attributionText: 'Image courtsey: Draper/Raytheon',
        location: '/static/core-rope-memory-in-progress.jpg'
    },
    'margaret-hamilton-software': {
        attributionLink: 'https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)',
        attributionText: 'Wikipedia',
        location: '/static/margaret-hamilton-software.jpg'
    },
    'rope-memory-installation': {
        attributionLink:
            'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText:
            'Image courtsey: Draper',
        location: '/static/rope-memory-installation.jpg'
    },
    'weaving-core-rope-memory': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Draper',
        location: '/static/weaving-core-rope-memory.jpg'
    },
    'woman-demoing-finished-rope': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Draper',
        location: '/static/woman-demoing-finished-rope.jpg'

    },
    'woman-weaving-memory-1': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Raytheon',
        location: '/static/woman-weaving-memory-1.jpg'
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
