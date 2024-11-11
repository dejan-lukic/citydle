'use client';

import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid2 as Grid, CardActionArea, Container } from '@mui/material';
import Link from 'next/link';

const games = [
  {
    title: 'Citydle',
    description: 'Guess the City!',
    image: '/images/citydle.png',
    link: '/citydle',
  },
  {
    title: 'Worldle',
    description: 'Guess the Country!',
    image: '/images/worldle.png',
    link: '/worldle',
  },
];

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Fun Friday Games
      </Typography>

      <Container maxWidth="md">
        <Grid container spacing={4}>
          {games.map((game, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea
                  component={Link}
                  href={game.link}
                  prefetch
                  sx={{ height: '100%' }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={game.image}
                    alt={`${game.title} Thumbnail`}
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {game.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {game.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
