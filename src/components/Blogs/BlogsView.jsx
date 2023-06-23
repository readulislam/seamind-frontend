import { AspectRatio } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box, Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { blogs } from '../../utils/mockData';

const BlogsView = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography variant="h5" sx={{ textDecoration: 'underline', textAlign: 'center', marginBottom: 12 }}>
        {t('MoreIndicators')}
      </Typography>
      <Grid spacing={4} container>
        {blogs.map((blog) => (
          <>
            <Grid key={blog.id} item xs={12} sm={6} md={4}>
              <Card variant="">
                <img src={blog.img} alt="img" />
                <Box p={3}>
                  <Typography color={'#7E7E7E'} variant="subtitle2" mt={2}>
                    {blog.date}
                  </Typography>
                  <Typography variant="h5" mt={2}>
                    {blog.title}
                  </Typography>
                  <Typography mt={2} mb={2} level="body2">
                    {blog.description}
                  </Typography>
                  <Typography variant="subtitle1" sx={{ textDecoration: 'underline', color: '#0066A4' }}>
                    {t('ContinueReading')}
                  </Typography>
                </Box>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
};

export default BlogsView;
