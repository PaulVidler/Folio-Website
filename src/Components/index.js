import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from "react-particles-js"
import {makeStyles} from "@material-ui/styles"

const useStyles = makeStyles({
    particlesCanvas:{
        position: "absolute",
        opacity: "0.3"
    }
});

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Header />
            <Particles canvasClassName={classes.particlesCanvas}
                params={{
                particles:{
                number: {
                    value: 45,
                    density: {
                        enable: true,
                        value_area: 500
                    }
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 1,
                        color: "tomato"
                    },
                },
                size: {
                    value: 8,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 8,
                        size_min: 0.1,
                        sync: true
                    }
                },
                opacity: {
                    value: .3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
        
                }
            }
            }} />
            
        </>
    )
}

export default Home
