
import { Helmet } from 'react-helmet-async';
import { useSnackbar, VariantType } from 'notistack';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { AuthApi } from '../../service/Auth';
import { Box, Header } from './styles';
import { Grid, TextField } from '@mui/material';
import Typography from '../../components/atoms/Typography';
import { Button } from '../../components/atoms/Button';
import Panel from '../../components/molecules/Panel';
import { Container } from '../../shared/styles';
import { Theme } from '../../shared/Theme';

type Inputs = {
    inputName: string,
    inputPassword: string,
    isRequired: string,
};

const Login: React.FC = ():JSX.Element => {
    const navigate = useNavigate();
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
                console.log(resp)
                // localStorage.setItem('NXtoken', resp.data.data.token);
                navigate('/home');
            },
        ).catch(() => {
            const variant: VariantType = 'error';
            enqueueSnackbar('Username or Password are incorrects!', { variant });
        });
    };

    return (
    <Box>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <Container height="100vh">
            <Panel
                color={Theme.palette.secondary}
                direction="column"
                align="center"
                justify='center'
                padding="0 1rem 1rem"
            >
                <Header>
                    <Typography variant='h1'>
                        Login Form
                    </Typography>
                </Header>
                <form data-testid="form" onSubmit={handleSubmit(onSubmit)}>
                <Grid
                    container
                    spacing={3}
                    direction='column'
                    alignItems='center'
                >
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="username"
                            label="Username"
                            type="text"
                            variant="outlined"
                            {...register('inputName', { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            id="password"
                            label="Password"
                            type="password"
                            variant="outlined"
                            {...register('inputPassword', { required: true })}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button type="submit">
                            Sign in
                        </Button>
                    </Grid>
                </Grid>
                </form>
            </Panel>
        </Container>
    </Box>
    );
};

export default Login;