
import { useContext } from 'react';
import { useSnackbar, VariantType } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthApi } from '../../service/Auth';
import { Box, Copyright, FormLogin, Header, Layout } from './styles';
import { Grid, TextField } from '@mui/material';
import Typography from '../../components/atoms/Typography';
import { Button } from '../../components/atoms/Button';
import Panel from '../../components/molecules/Panel';
import { Container } from '../../shared/styles';
import { Theme } from '../../shared/Theme';
import LockOutlined from '@mui/icons-material/LockOutlined';
import { Avatar } from '../../components/atoms/Avatar';
import { AuthContext } from '../../context/AuthContext';
import packageInfo from '../../../package.json';

const version = packageInfo.version

type Inputs = {
    inputName: string,
    inputPassword: string,
    isRequired: string,
};

const Login: React.FC = ():JSX.Element => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext)
    const { enqueueSnackbar } = useSnackbar();
    const {
        handleSubmit, register,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const { inputName, inputPassword } = data;
        AuthApi.post('/auth/token', {
            username: inputName,
            password: inputPassword,
        }).then(
            (resp:any) => {
                localStorage.setItem('NubToken', resp.token);
                setAuth(resp);
                navigate('/home');
            },
            (err) => {
                const variant: VariantType = 'error';
                enqueueSnackbar('Username or Password are incorrects!', { variant });
            }
        );
    };

    return (
    <Layout>
        <Box className='bg-main'>
            <Container height={'100vh'}>
                <Panel
                    color={Theme.palette.primary}
                    direction="column"
                    align="center"
                    padding="0 1rem 1rem"
                    height='100vh'
                >
                    <Header>
                        <Avatar>
                            <LockOutlined />
                        </Avatar>
                        <Typography variant='h1' color='secondary'>
                            Sign In
                        </Typography>
                    </Header>
                    <FormLogin
                        onSubmit={handleSubmit(onSubmit)}
                        >
                    <Grid
                        container
                        spacing={3}
                        direction='column'
                        alignItems='center'
                        sx={{
                            padding: '0 1rem'
                        }}
                    >
                        <Grid item sx={{ width: '100%' }}>
                            <TextField
                                fullWidth
                                id="username"
                                label="Username"
                                type="text"
                                variant="outlined"
                                {...register('inputName', { required: true })}
                                sx={{
                                    width: '100%'
                                }}
                            />
                        </Grid>
                        <Grid item sx={{ width: '100%' }}>
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                variant="outlined"
                                {...register('inputPassword', { required: true })}
                            />
                        </Grid>
                        <Grid item sx={{ width: '100%' }}>
                            <Button
                                type="submit"
                                color='primary'
                                background='secondary'
                                maxWidth='30rem'
                                >
                                Sign in
                            </Button>
                        </Grid>
                    </Grid>
                    <Copyright>
                        <Typography variant="h6">v{version}</Typography>
                    </Copyright>
                    </FormLogin>
                </Panel>
            </Container>
        </Box>
    </Layout>
    );
};

export default Login;