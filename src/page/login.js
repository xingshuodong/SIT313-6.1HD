import React, { useState } from 'react';
import { loginUser } from '../firebase';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        loginUser(email, password)
            .then((user) => {
                setSuccess('Login success!');
                console.log(user);
            })
            .catch((errorMessage) => {
                setError(errorMessage);
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
            >
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <form onSubmit={handleLogin} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <Alert severity="error">{error}</Alert>}
                    {success && <Alert severity="success">{success}</Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default Login;
