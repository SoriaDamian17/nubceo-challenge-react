export type IMember = {
    name:string
}

export type IBand = {
    id: number,
    name: string,
    genreCode: string,
    year: number,
    country: string,
    members: IMember[]
}

export type IGenre = {
    code: string,
    name: string,
}

export type IAlbums = {
    id: number,
    bandId: number,
    name: string,
    year: number
}