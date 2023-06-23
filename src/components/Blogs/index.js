import { Container } from '@mui/material';
import React from 'react';
import BlogsView from './BlogsView';

const Blogs = () => {
  return (
    <Container sx={{ marginTop: 6, marginBottom: 10 }} maxWidth="xl">
      <BlogsView />
    </Container>
  );
};

export default Blogs;
