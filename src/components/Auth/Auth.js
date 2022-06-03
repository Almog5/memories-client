import React, {useState} from 'react'
import { Container, Paper, Avatar, Typography, Button, Grid } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input';

import useStyles from './styles'

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword]= useState(false);
    const [isSignUp, setIsSignUp] = useState(false);

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    const handleShowPassword = () => setShowPassword((prev) => !prev);

    const switchMode = () => { 
        setIsSignUp((prev) => !prev);
        setShowPassword(false);
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign Up': 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        { isSignUp && (
                            <>
                            <Input name="firstName" label="First name" handleChange={handleChange} autoFocus half/>
                            <Input name="lastName" label="Last name" handleChange={handleChange} half/>
                            </>
                        )}
                        <Input name="email" label="Email" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Confirm password" handleChange={handleChange} type="password" />}
                    </Grid> 
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign up' : 'Sign in'}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
