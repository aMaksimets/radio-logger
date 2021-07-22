import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { grid } from '@material-ui/system';

const useStyles = makeStyles ({
    container: {
        display: grid,
        gridTemplateColumns: 'repeat(auto-fill, minmax(10em, 1fr)',
        height: '400px',
        width: '100 %' ,
        maxWidth: '40rem' ,
        margin: '0 auto'
    },

    
});

const SwlLog = () => {

const classes = useStyles()


return (
<div>
            <Container maxWidth="lg">
                <Paper elevation={1} variant="outlined" square>
                    <Card>
                        <form className={classes.container} noValidate>
                        <TextField
                            style={{
                                display: "flex"
                            }}
                            InputProps={{
                                style: {
                                    color: "black"
                                }
                            }}
                            />
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
                            style={{
                                display: "flex"
                            }}
                            InputProps={{
                                style: {
                                    color: "black"
                                }
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
                            style={{
                                display: "flex"
                            }}
                            InputProps={{
                                style: {
                                    color: "black"
                                }
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

export default SwlLog;