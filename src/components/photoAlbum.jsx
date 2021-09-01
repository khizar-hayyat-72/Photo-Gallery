import React from 'react'
import {Typography, AppBar,Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './styles'

const cards = [1,2,3,4,5,6,7,8,9]

const PhotoAlbum = () => {
    let classes = useStyles()

    return (  
        <React.Fragment>
            <CssBaseline/>
           <AppBar position = 'relative'>
                <Toolbar>
                    <PhotoCamera className={classes.icon}/> 
                    <Typography variant='h6'> Photo Gallery</Typography>
                </Toolbar>
            </AppBar>
    
    {/*Main Area*/}
            <div>
                <main>
                    <Container maxWidth = "sm" className={classes.container}>
                            <Typography variant='h2' color='textPrimary' align='center' gutterBottom>
                                Photo Gallery
                            </Typography>
                            <Typography variant='h5' color='textSecondary' align='center' paragraph>
                                Hello everyone this is a Photo Gallery.Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely. 
                            </Typography> 
                            <div>
                                <Grid container spacing ={3} justifyContent='center'>
                                    <Grid item>
                                        <Button variant = 'contained' color='primary' className={classes.button}>
                                            MAIN CALL TO ACTION
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                    <Button variant='outlined' color='primary' className={classes.button}>
                                            Secondary Action
                                    </Button>
                                    </Grid>
                                </Grid>
                            </div>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth = 'md'>
                        <Grid container spacing ={4} className={classes.GridContainer}>
                            {cards.map(() => (
                                <Grid item  xs ={12} sm={6} lg={4} md={4}>
                                <Card className={classes.Card}>
                                    <CardMedia
                                      className={classes.CardMedia}
                                      image = 'https://source.unsplash.com/random'
                                      title = 'Image Title'
                                    />    
                                    <CardContent className={classes.CardContent}>
                                        <Typography variant='h5' gutterBottom>
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size='small' color='primary'>
                                            View
                                        </Button>
                                        <Button size='small'color='primary'>
                                            Edit
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            ))};
                        </Grid>
                    </Container>
                </main>
                <footer className={classes.footer}>
                    <Typography variant='h6' align='center' gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant='subtitle1' align='center' color='textSecondary'>
                        Something here to give the footer a purpose!
                    </Typography>
                     <Typography variant='subtitle1' align='center' color='textSecondary'>
                        Copyright © Your Website 2021.
                    </Typography>
                </footer>
            </div>
        </React.Fragment>
        );
}
 
export default PhotoAlbum;