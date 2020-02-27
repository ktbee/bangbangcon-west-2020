const IMAGES = {
    'agc-memory-modules': {
        attributionLink:
            'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText:
            'Image courtesy: Draper',
        location: '/static/agc-memory-modules.jpg'
    },
    'apollo-12-lightning': {
        attributionLink: 'https://wehackthemoon.com/missions/apollo-12-struck-lightning',
        attributionText: 'Image courtesy: NASA',
        location: '/static/apollo-12-lightning.jpg'
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
    'current-working-conditions': {
        attributionLink: 'https://www.wired.com/2015/04/inside-chinese-factories/',
        attributionText: 'WIRED, April 6th, 2015',
        location: '/static/current-working-conditions.png'
    },
    'final-core-rope-memory': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Draper',
        location: '/static/final-core-rope-memory.jpg'
    },
    'finishing-core-rope-memory': {
        attributionLink: 'https://infinitehistory.mit.edu/video/mit-science-reporter%E2%80%94computer-apollo-1965',
        attributionText: 'MIT Science Reporter — "Computer for Apollo" (1965)',
        location: '/static/gif/finishing-core-rope-memory.gif'
    },
    'load-magnetic-cores': {
        attributionLink: 'https://infinitehistory.mit.edu/video/mit-science-reporter%E2%80%94computer-apollo-1965',
        attributionText: 'MIT Science Reporter — "Computer for Apollo" (1965)',
        location: '/static/load-magnetic-cores.png'
    },
    'margaret-hamilton-software': {
        attributionLink: 'https://en.wikipedia.org/wiki/Margaret_Hamilton_(software_engineer)',
        attributionText: 'Wikipedia',
        location: '/static/margaret-hamilton-software.jpg'
    },
    'raytheon-strike': {
        attributionLink: 'https://www.bostonglobe.com/',
        attributionText: 'Boston Globe, Nov 14th, 1966',
        location: '/static/raytheon-strike.png'
    },
    'rope-memory-installation': {
        attributionLink:
            'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText:
            'Image courtsey: Draper',
        location: '/static/rope-memory-installation.jpg'
    },
    'solo-weaver-b-w': {
        attributionLink: 'https://www.apollopresskits.com/apollo-presskit-directory',
        attributionText: 'Raytheon Apollo Press Kit, David Meerman Scott',
        location: '/static/solo-weaver-b-w.png'
    },
    'waltham-watch-company': {
        attributionLink: 'https://en.wikipedia.org/wiki/Waltham_Watch_Company',
        attributionText: 'Image courtesy: Wikipedia',
        location: '/static/waltham-watch-company.jpg'
    },
    'weaving-core-rope-memory': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Draper',
        location: '/static/weaving-core-rope-memory.jpg'
    },
    'weaving-close-up': {
        attributionLink: 'https://en.wikipedia.org/wiki/Moon_Machines',
        attributionText: 'Moon Machines: The Navigation Computer',
        location: '/static/gif/weaving-close-up.gif'
    },
    'woman-demoing-finished-rope': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Draper',
        location: '/static/woman-demoing-finished-rope.jpg'

    },
    'woman-weaving-solo': {
        attributionLink: 'https://en.wikipedia.org/wiki/Moon_Machines',
        attributionText: 'Moon Machines: The Navigation Computer',
        location: '/static/gif/woman-weaving-solo.gif'

    },
    'women-weaving-color': {
        attributionLink: 'https://en.wikipedia.org/wiki/Moon_Machines',
        attributionText: 'Moon Machines: The Navigation Computer',
        location: '/static/gif/women-weaving-color.gif'
    },
    'woman-weaving-core-memory': {
        attributionLink: 'https://wehackthemoon.com/tech/core-rope-memory-when-computer-science-meets-girl-power',
        attributionText: 'Image courtsey: Draper',
        location: '/static/woman-weaving-core-memory.jpg'
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
