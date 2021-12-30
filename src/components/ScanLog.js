import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
});

const ScanLog = () => {

    const classes = useStyles();


    return (
        <div>
            <Container maxWidth="lg">
                <Paper elevation={1} variant="outlined" square>
                    <Card>
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="Today's Date"
                                type="date"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="date"
                                label="Time (UTC/GMT)"
                                type="time"
                                defaultValue="2017-05-24"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                            <TextField
                                id="number"
                                label="Frequency"
                                type="number"
                                defaultValue="1800"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </Card>
                </Paper>
            </Container>
        </div>
    );
};

export default ScanLog