'use client';

import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid2 as Grid } from '@mui/material';
import Link from 'next/link';

const games = [
  {
    title: 'Citydle',
    description: 'Guess the City!',
    image: '/images/citydle.png',
    link: '/citydle',
  },
];

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Fun Friday Games
      </Typography>
      <Grid container spacing={4}>
        {games.map((game, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Card>
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
              <CardActions>
                <Link href={game.link} passHref>
                  <Button size="small" color="primary">
                    Play Now
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
