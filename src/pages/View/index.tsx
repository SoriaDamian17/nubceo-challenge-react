import { useEffect } from 'react'
import { Button, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/atoms/Spinner";
import BasicTemplate from "../../components/Template/BasicTemplate";
import { useAlbums } from "../../hook/useAlbums";
import { useBands } from "../../hook/useBands";
import { getCover } from "../../shared/utils";
import { Container, Cover, Information, Spotify } from "./styles";
import Table from '../../components/molecules/Table';
import ListMember from '../../components/molecules/List';
import Breadcrumbs from '../../components/molecules/Breadcrumbs';

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

    useEffect(() => {
        refetch()
    }, [id])

    return (
        <BasicTemplate sx={{
            justifyContent: 'center',
            margin: '1rem 0',
        }}>
            {isLoading && <Spinner />}
            {!isLoading && fetchBand && (
                <>
                <Breadcrumbs name={fetchBand.data[0].name} />
                <Container
                    container
                    spacing={3}
                >
                    <Grid item xs={12} md={6}>
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
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4">
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
                </Container>
                </>
            )}
        </BasicTemplate>
    );
}

export default ViewBand;