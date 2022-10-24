import { Spinner } from "../../components/atoms/Spinner";
import Typography from "../../components/atoms/Typography";
import Card from "../../components/molecules/Card";
import BasicTemplate from "../../components/Template/BasicTemplate";
import { useBands } from "../../hook/useBands";
import { IBand } from "../../interface";
import { getCover } from "../../shared/utils";
import Grid from '@mui/material/Grid'
import { WrappBand } from "./styles";

const Home = () => {
    const {
        data: fetchBands,
        isLoading,
        refetch
    } = useBands('token')

    return (
        <BasicTemplate>
            {isLoading && <Spinner />}
            <Typography variant="h1" color="secondary">
                Bands
            </Typography>
            <Grid container gap={2}>
                {fetchBands?.data.length && fetchBands?.data.map(
                    (band: IBand) =>
                    <Grid item>
                        <Card
                            genreCode={band.genreCode}
                            src={getCover(band.name)}
                            title={band.name}
                        />
                    </Grid>
                )}
            </Grid>
        </BasicTemplate>
    );
}
 
export default Home;