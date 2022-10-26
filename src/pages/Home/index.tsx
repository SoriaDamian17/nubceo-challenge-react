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
import { useState } from "react";
import { Band, HeaderBand } from "./styles";

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

const Home = () => {
    const [genre, setGenre] = useState<string>('All bands')
    const {
        data: fetchBands,
        isLoading
    } = useBands('token', '', {
        genre: genre,
        sort: 'asc'
    })
    const {
        data: fetchGenre
    } = useGenre('token');

    function handleSelected(value: string) {
        setGenre(value)
        const allBands = document.querySelectorAll('div.band');
        console.log('All bands', allBands);
    }

    return (
        <BasicTemplate>
            {isLoading && <Spinner />}
            <HeaderBand>
                <Typography variant="h1" color="secondary">
                    Bands
                </Typography>
                <Select
                    onChange={handleSelected}
                    options={SORT_BANDS}
                    valueSelected={'sort asc'}
                />
                <Select
                    onChange={handleSelected}
                    options={fetchGenre ? formatGenreOptions(fetchGenre.data) : []}
                    valueSelected={genre}
                />
            </HeaderBand>
            <Grid container gap={2}>
                {fetchBands?.data.length && fetchBands?.data.map(
                    (band: IBand) =>
                    <Band item key={band.id} className={`band ${band.genreCode}`}>
                        <Card
                            genreCode={band.genreCode}
                            src={getCover(band.name)}
                            title={band.name}
                        />
                    </Band>
                )}
            </Grid>
        </BasicTemplate>
    );
}
 
export default Home;