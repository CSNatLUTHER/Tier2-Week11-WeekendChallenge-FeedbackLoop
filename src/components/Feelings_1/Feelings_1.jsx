import React from 'react';
import './Feelings_1.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import image from './images/feelings.jpg'
import { Box } from '@mui/system';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'

function Feelings_1() {

  const [value, setValue] = React.useState();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  let readableTime = new Date().toLocaleDateString( 'en-US',{
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit'
  }); 

  const dispatch = useDispatch()

  const runNext = () => {
    dispatch({
      type: 'UPDATE_FEELINGS',
      payload: value
    })
  };

  return (
    <div className="feelings">
      <Card sx={{ maxWidth: 500 }}>
        <Typography variant="h3" color="text.primary">
            Feelings
        </Typography>
        <CardHeader
          title="Self Reflection"
          subheader= {readableTime}
        />
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Feelings"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            It's important to take to take time and reflect inward. On a scale from 1 to 5, with 1 being poor and 5 being excellent, please tell us how you're feeling today.
          </Typography>
        </CardContent>
        <FormControl variant="standard" sx={{ml: 1, mb: 3, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Select Value</InputLabel>
          <Select
            labelId="value-select"
            id="value-select"
            value={value}
            onChange={handleChange}
            label="Select Value"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ mt: 1, ml: 1, mb: 2 }}>
          <div className="buttonDiv">
            <Link to="/content" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button size="large" onClick={runNext} variant="contained" endIcon={<NavigateNextSharpIcon fontSize="large" />}>
              Next
            </Button>
            </Link>
          </div>
        </Box>
      </Card>
    </div>
  );
}

export default Feelings_1;
