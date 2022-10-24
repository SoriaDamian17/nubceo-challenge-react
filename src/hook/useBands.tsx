import { useQuery } from 'react-query'
import { BandsApi } from '../service/Bands';

const Key = 'bands';

export function useBands(token?: string) {
    return useQuery(
        [Key, token],
        () => BandsApi.get('/bands'),
    )
}