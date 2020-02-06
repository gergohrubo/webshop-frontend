import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Typography, Container } from '@material-ui/core';
import { useStyles } from './style'

export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {props.articles.map(article => (
            <Grid item key={article.name} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={article.url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.name}
                  </Typography>
                  <Typography>
                    {article.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                    </Button>
                  <Button size="small" color="primary">
                    Edit
                    </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}