import React from 'react';
import Navbar from './Navbar';
import {Box, Grid, Card, CardActionArea, CardActions, CardContent, Button, Typography, CardMedia} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const Portfolio = () => {
    return (
            <Box component="div">
                <Navbar />
                <Grid container justify="center" alignItems="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Project 1"
                                height="140"
                                image={project1} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5">
                                        Project 1
                                    </Typography>  
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>       
                                </CardContent>
                                <CardActions>
                                   <Button size="small" color="primary">
                                        Share   
                                    </Button>
                                    <Button size="small" color="primary">
                                        Live demo   
                                    </Button> 
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        )
}

export default Portfolio
