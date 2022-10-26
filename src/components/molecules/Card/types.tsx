import { IAlbums } from "../../../interface"

export type ICard = {
    id: number | string,
    src: string,
    title: string,
    genreCode: string,
    onClick: (id: string | number) => void
}