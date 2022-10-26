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

export function formatGenreOptions(options: any) {
    const formatOptions = options.map((option: any) => {
        return { id: option.code, value: option.name }
    })

    console.log('formatGenre', [
        ...formatOptions,
        {
            id: 'All',
            value: 'All bands'
        }
    ])
    return [
        ...formatOptions,
        {
            id: 'All',
            value: 'All bands'
        }
    ]
}