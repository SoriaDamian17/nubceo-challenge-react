import { useQuery } from 'react-query'
import { AlbumsApi } from '../service/Albums';

const Key = 'albums';

export function useAlbums(token?: string, id?: string | number) {
    return useQuery(
        [Key, token],
        () => AlbumsApi.get('/albums', id, {
            'authorization': `Bearer ${token}`
        }),
    )
}