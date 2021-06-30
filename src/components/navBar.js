import React, {useState} from 'react';
import {AppBar, toolbar, Typography, makeStyles} from 'material-ui/core'
import './navBar.css';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar
}))

const navbar = () => {
    const classes = useStyles()
    return(
        <div>
            <AppBar>
                <toolbar>
                    <Typography variant= 'h6'>

                    </Typography>
                </toolbar>
            </AppBar>
            <div className="{classes.offset}"></div>
        </div>
    )
}
