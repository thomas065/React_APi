import React from 'react';
import cardLogo from '../assets/default3.svg';
import {
    CardActionArea,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Fab,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './entry.css';

const Entry = () => {
    const redirect = useNavigate();
    
    return (
        <div className='container'>
            <div className='row'>
                <div className='col space'>
                    <Card sx={{ maxWidth: 345 }} variant='outlined' className='bg-warning-subtle' >
                        <CardActionArea>
                            <CardMedia
                                component='img'
                                height='400'
                                image={cardLogo}
                                alt='user image'
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                >
                                    The Movie Database
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    Millions of movies, TV shows and people to discover. Explore now.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Fab onClick={() => redirect('/api')} size='large' variant="contained" color="success">
                                Enter
                            </Fab>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Entry;
