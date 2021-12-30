import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {

    },
    textField: {
        padding: "15px"
    }
});

const band = [
    {
        value: '160m',
        label: '160m',
    },
    {
        value: '80m',
        label: '80m',
    },
    {
        value: '40m',
        label: '40m',
    },
    {
        value: '20m',
        label: '20m',
    },
];

function SwlLog() {

    const classes = useStyles();

    function Band() {
        const [band, setBand] = React.useState('');
        function handleChange(event) {
            setBand(event.target.value);
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
                                        }} />

                                    <TextField
                                        id="date"
                                        label="Time (UTC/GMT)"
                                        type="time"
                                        defaultValue="2017-05-24"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />

                                    <TextField
                                        id="number"
                                        label="Frequency"
                                        type="number"
                                        defaultValue="1800"
                                        inputProps={{ min: "1800", max: "30000", step: "1" }}
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                    <TextField
                                        id="band"
                                        select
                                        label="Band"
                                        type="number"
                                        value={band}
                                        onChange={handleChange}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        helperText="Please select your band"
                                        className={classes.textField}
                                        InputLabelProps={{
                                            shrink: true,
                                        }} />
                                    {band.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </form>
                            </Card>
                        </Paper>
                    </Container>
                </div>
            );
        }
    }
}
export default SwlLog;