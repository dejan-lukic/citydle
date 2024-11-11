'use client';

import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Button } from '@mui/material';
import { usePathname } from 'next/navigation';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function NavigationBar() {
  const pathname = usePathname();

  const isGamePage = pathname !== '/';

  return (
    <AppBar position="static">
      <Toolbar>
        {isGamePage && (
          <Link href="/" passHref legacyBehavior>
            <Button color="inherit" startIcon={<ArrowBackIcon />} aria-label="Back to Games">
              Back to Games
            </Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
