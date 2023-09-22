import React, { useState } from 'react';
import { signUpUser } from '../firebase';
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleSignUp = (e) => {
        e.preventDefault();

        setError('');

        if (!email || !password) {
            setError('Please provide both email and password.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        if (!emailRegex.test(email)) {
            setError('Please provide a valid email address.');
            return;
        }

        signUpUser(email, password)
            .then((user) => {
                setSuccess('Sign up successful! ');
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
                    Sign Up
                </Typography>
                <form onSubmit={handleSignUp} noValidate>
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
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Confirm Password"
                        type="password"
                        autoComplete="current-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <Alert severity="error">{error}</Alert>}
                    {success && <Alert severity="success">{success}</Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign Up
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default SignUp;
