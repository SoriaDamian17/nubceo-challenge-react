import { Spinner } from "../../components/atoms/Spinner";
import Typography from "../../components/atoms/Typography";
import Card from "../../components/molecules/Card";
import BasicTemplate from "../../components/Template/BasicTemplate";
import { useBands } from "../../hook/useBands";
import { IBand } from "../../interface";
import { formatGenreOptions, getCover } from "../../shared/utils";
import Grid from '@mui/material/Grid'
import { useGenre } from "../../hook/useGenre";
import Select from "../../components/molecules/Select";
import { useEffect, useState } from "react";
import { Band, HeaderBand } from "./styles";
import { useNavigate } from "react-router-dom";

const SORT_BANDS = [
    {
        id: 'asc',
        value: 'sort asc',
    },
    {
        id: 'desc',
        value: 'sort desc',
    }
];

const token = localStorage.getItem('NubToken');
const Home = () => {
    const navigate = useNavigate()
    const [genre, setGenre] = useState<string>('All')
    const [sort, setSort] = useState<string>('asc')
    const {
        data: fetchBands,
        isLoading,
        refetch,
    } = useBands(token, '', {
        genre: genre,
        sort: sort
    })
    const {
        data: fetchGenre
    } = useGenre('token');
    
    function handleClick(id: number | string) {
        navigate(`/view/${id}`)
    }

    function handleGenreSelected(value: string) {
        setGenre(value)
    }

    function handleSortSelected(value: string) {
        setSort(value)
    }

    useEffect(() => {
        refetch()
    }, [genre, sort])

    return (
        <BasicTemplate sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 1rem',
            maxWidth: '62rem',
        }}>
            {isLoading && <Spinner />}
            <HeaderBand>
                <div>
                    <Typography variant="h1" color="secondary">
                        Bands
                    </Typography>
                </div>
                <div>
                    <Select
                        onChange={handleSortSelected}
                        options={SORT_BANDS}
                        valueSelected={sort}
                    />
                    <Select
                        onChange={handleGenreSelected}
                        options={fetchGenre ? formatGenreOptions(fetchGenre.data) : []}
                        valueSelected={genre}
                    />
                </div>
            </HeaderBand>
            <Grid container gap={2} display="flex">
                {fetchBands?.data.length && fetchBands?.data.map(
                    (band: IBand) =>
                    <Band item key={band.id} className={`band ${band.genreCode}`}>
                        <Card
                            onClick={handleClick}
                            src={getCover(band.name)}
                            title={band.name}
                            {...band}
                        />
                    </Band>
                )}
            </Grid>
        </BasicTemplate>
    );
}

export default Home;