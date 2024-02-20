import React, { useState, useEffect } from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { Box } from '@mui/material';

const API_KEY =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWViM2M3MzVjMzVhOWM3NjhmNzU0YjEwNDg0YjUyNCIsInN1YiI6IjY1MmVlMTQ0MzU4ZGE3NWI2MWY5OGQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qy-KDPGApZ7kxUjyzc8ehRKlJrysrh7AUQ_vfmCjVl8';

const URL = 'https://api.themoviedb.org/3/movie/popular';

const CallApi = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function getMovies() {
            try {
                const response = await fetch(URL, {
                    headers: {
                        Authorization: `Bearer ${API_KEY}`,
                    },
                });

                const data = await response.json();

                setMovies(data.results);

                console.log(data);
            } catch (error) {
                Swal.fire({
                    backdrop: false,
                    title: 'Oops',
                    text: `Something went wrong reaching the TMDB API`,
                    icon: 'error',
                });
            }
        }

        getMovies();
    }, []);

    return (
        <Grid2 className='bg-dark p-4'>
            <div className='text-center mb-5'>
                <h1 className='text-warning'>
                    <u>
                        <em>Popular Movies:</em>
                    </u>
                </h1>
            </div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <div className='col text-white'>
                        <Box className='d-flex justify-content-center align-items-baseline'>
                            <div>
                                <h3 className='text-success'>{movie.title}</h3>
                            </div>
                            <div className='ms-3'>
                                <p>Release Date: {movie.release_date}</p>
                            </div>
                        </Box>
                    </div>
                </div>
            ))}
        </Grid2>
    );
};

export default CallApi;
