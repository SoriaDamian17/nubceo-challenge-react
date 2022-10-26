import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/atoms/Spinner";
import BasicTemplate from "../../components/Template/BasicTemplate";
import { useBands } from "../../hook/useBands";
import { getCover } from "../../shared/utils";
import { BoxBand, Cover, Information, Pill, Spotify } from "./styles";

const ViewBand = () => {
    const { id } = useParams();
    const {
        data: fetchBand,
        isLoading,
    } = useBands('token', id)

    console.log('fetchBand', fetchBand)
    return (
        <BasicTemplate>
            {isLoading && <Spinner />}
            id: {id}
            {!isLoading && fetchBand && (
                <Grid container>
                    <Grid item>
                        <Typography variant="h3">
                            {fetchBand.data[0].name}
                        </Typography>
                        <BoxBand>
                            <Cover
                                src={`${process.env.PUBLIC_URL}/${getCover(fetchBand.data[0].name)}`}
                                alt={fetchBand.data[0].name}
                            />
                            <Information>
                                <Pill>{fetchBand.data[0].genreCode} </Pill>
                            </Information>
                        </BoxBand>
                        <Spotify
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            src="https://open.spotify.com/embed/track/07q0QVgO56EorrSGHC48y3?utm_source=generator&theme=1"
                            title={fetchBand.data[0].name}
                        ></Spotify>
                    </Grid>
                </Grid>
            )}
        </BasicTemplate>
    );
}

export default ViewBand;