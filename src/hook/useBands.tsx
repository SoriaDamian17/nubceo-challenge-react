import { useQuery } from 'react-query'
import { BandsApi } from '../service/Bands';

const Key = 'bands';

export function useBands(token?: string | null, id?: string, filter?: any) {
    return useQuery(
        [Key, token],
        () => BandsApi.get('/bands', id, filter, {
            'authorization': `Bearer ${token}`
        }),
    )
}