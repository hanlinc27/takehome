import styled from "styled-components";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormLabel from '@material-ui/core/FormLabel';
var counter = 0;

const StyledFormControlLabel = styled(FormControlLabel)`
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #2F3546;
`;
const StyledGrid = styled.div`
    margin-left: 30%;
`;

const StyledButton = styled.button`
    background: #5D55F6;
    border-radius: 10px;
    width: 100px;
    height: 50px;
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 29px;
    text-align: center;
    color: #FFFFFF;
    border: none;
    margin-right: 80%;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`;

const useStyles = makeStyles((theme) => ({
    formControl: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#2F3546',
        paddingBottom: '1%',
    },
    optionLabel: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#2F3546',
        marginLeft: '35%',
        display: 'inline-block',
    },
    helperText: {
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '24px',
        lineHeight: '29px',
        color: '#6BC6BF',
    },
}));

export function EnglishQuestion(props) {
    const classes = useStyles();
    var options = props.options;
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value === 'True' || value === 'Dangling participle' || value === 'their') {
            counter++;
            setHelperText("Correct. Your score is " + (counter) + "/3 (" + (counter / 3 * 100).toFixed(2) + "%)");
            setError(false);
        } else {
            setHelperText('Incorrect');
            setError(true);
        }
    };

    return (
        <StyledGrid>
            <form onSubmit={handleSubmit}>
                <FormControl component="fieldset" error={error} className={classes.formControl}>
                    <FormLabel component="question-label" className={classes.formControl}>{props.number}. {props.name} </FormLabel>
                    <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>

                    <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                        {Object.keys(options).map((key) => {
                            return (
                                <>
                                    <StyledFormControlLabel value={options[key]} control={<Radio />} label={options[key]} />
                                </>
                            );
                        })
                        }
                    </RadioGroup>
                </FormControl>
                <StyledButton type="submit" variant="outlined" color="primary">
                    Submit
        </StyledButton>
            </form>
            <br></br>
        </StyledGrid>
    );
}

