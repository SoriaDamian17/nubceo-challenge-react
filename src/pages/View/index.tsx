import { useEffect } from 'react'
import { Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/atoms/Spinner";
import BasicTemplate from "../../components/Template/BasicTemplate";
import { useAlbums } from "../../hook/useAlbums";
import { useBands } from "../../hook/useBands";
import { getCover } from "../../shared/utils";
import { BoxBand, Cover, Information, Pill, Spotify } from "./styles";
import { IAlbums } from '../../interface';
import Table from '../../components/molecules/Table';
import ListMember from '../../components/molecules/List';

const ViewBand = () => {
    const { id } = useParams();
    const {
        data: fetchBand,
        isLoading,
        refetch,
    } = useBands('token', id, {
        genre: 'All',
        sort: 'asc'
    })
    const {
        data: fetchAlbums
    } = useAlbums('token', id);

    console.log('id', id)
    console.log('fetchBand', fetchBand)
    console.log('fetchAlbums', fetchAlbums)
    useEffect(() => {
        refetch()
    }, [id])

    return (
        <BasicTemplate sx={{
            display: 'flex',
            justifyContent: 'center',
            margin: '1rem 0',
        }}>
            {isLoading && <Spinner />}
            {!isLoading && fetchBand && (
                <Grid container>
                    <Grid item>
                        <Cover
                            src={`${process.env.PUBLIC_URL}/${getCover(fetchBand.data[0].name)}`}
                            alt={fetchBand.data[0].name}
                        />
                        <Spotify
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                            src="https://open.spotify.com/embed/track/07q0QVgO56EorrSGHC48y3?utm_source=generator&theme=1"
                            title={fetchBand.data[0].name}
                        ></Spotify>
                    </Grid>
                    <Grid item>
                        <Typography variant="h3">
                            {fetchBand.data[0].name}
                        </Typography>
                        <Information>
                            <Typography variant="h5">
                                Genre: {fetchBand.data[0].genreCode}
                            </Typography>
                            <Typography variant="h5">
                                Members:
                            </Typography>
                            <ListMember members={fetchBand.data[0].members} />
                            <Typography variant="h5">
                                Albums
                            </Typography>
                            {fetchAlbums && <Table rows={fetchAlbums?.data} />}
                        </Information>
                    </Grid>
                </Grid>
            )}
        </BasicTemplate>
    );
}

export default ViewBand;