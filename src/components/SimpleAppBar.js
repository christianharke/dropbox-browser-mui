import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
    root: {
        width: '100%',
    },
};

function SimpleAppBar({ classes }) {
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography type="title" color="inherit">
                        VSLK Schiessresultate
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
