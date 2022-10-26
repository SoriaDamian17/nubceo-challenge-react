import { useQuery } from 'react-query'
import { GenreApi } from '../service/Genre';

const Key = 'genre';

export function useGenre(token?: string) {
    return useQuery(
        [Key, token],
        () => GenreApi.get('/genre', {
            'authorization': `Bearer ${token}`
        }),
    )
}