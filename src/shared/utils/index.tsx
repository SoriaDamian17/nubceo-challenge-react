const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px',
}

export const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
}

export function getCover(name: string) {
    const folder:string = 'bands';
    const covers: any = {
        'Kiss': 'Kiss.jpg',
        'Aerosmith': 'Aerosmith.jpg',
        'Angra': 'Angra.jpg',
        'Cradle of Filth': 'Cradle-of-Filth.jpg',
        'Dream Theater': 'dream-theater.jpg',
        'Iron Maiden': 'iron-maiden.jpg',
        'Metallica': 'Metallica.jpg',
        'Pearl Jam': 'pearl-jam.jpg',
        'Queen': 'Queen.jpg',
        'Rhapsody of Fire': 'Rhapsody-of-Fire.jpg',
        'The Beatles': 'the-beatles.jpg',
        'Within Temptation': 'within-temptation.jpg',
    }

    const imgCover:string = covers[name] ?? '';
    return `${folder}/${imgCover}`
}

export function getSpotifyIdTrack(name: string) {
    const tracks = [
        {
            id: 'Aerosmith',
            value: '74irxdVWstNlEQjsvArITq',
        },
        {
            id: 'Aerosmith',
            value: '74irxdVWstNlEQjsvArITq',
        },
        {
            id: 'Angra',
            value: '1hEVuE88R6SC3Q8ogis00B',
        },
        {
            id: 'Cradle of Filth',
            value: '6WuqJLVZcyJklg7lIozAO8',
        },
        {
            id: 'Dream Theater',
            value: '5CPXR6lDTvngxtmMZxnWmC',
        },
        {
            id: 'Iron Maiden',
            value: '4OROzZUy6gOWN4UGQVaZMF',
        },
        {
            id: 'Metallica',
            value: '2MuWTIM3b0YEAskbeeFE1i',
        },
        {
            id: 'Pearl Jam',
            value: '6QewNVIDKdSl8Y3ycuHIei',
        },
        {
            id: 'Queen',
            value: '4u7EnebtmKWzUH433cf5Qv',
        },
        {
            id: 'Rhapsody of Fire',
            value: '5W5riPbci6HLF2TkTd2VyA',
        },
        {
            id: 'The Beatles',
            value: '6dGnYIeXmHdcikdzNNDMm2',
        },
        {
            id: 'Within Temptation',
            value: '4XBtYPGMAYJkuJu2w4pmYl',
        },
    ];

    const trackId = tracks.find((track) => track.id === name);
    return trackId ? trackId.value : '';
}  
export function formatGenreOptions(options: any) {
    const formatOptions = options.map((option: any) => {
        return { id: option.code, value: option.name }
    })

    return [
        ...formatOptions,
        {
            id: 'All',
            value: 'All bands'
        }
    ]
}

export function generate_token(length: number){
    //edit the token allowed characters
    var a: any = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b: any = [];  
    for (var i=0; i<length; i++) {
        var j = (Math.random() * (a.length-1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}