import React from 'react';
import './Review_5.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import image from './images/review.jpg';
import { Box } from '@mui/system';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, ListItemAvatar } from '@mui/material';
import { Avatar } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircleOutline';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';


function generate(element) {
  return [0, 1, 2, 3].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function Review_5() {


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
      type: 'UPDATE_COMMENTS',
      payload: value
    })
  };

  const runPrevious = () => {
    console.log('in runPrevious');
  };

  return (
    <div className="review">
      <Card sx={{ maxWidth: 500 }}>
        <Typography variant="h3" color="text.primary">
            Review
        </Typography>
        <CardHeader
          title="Self Reflection"
          subheader= {readableTime}
        />
        <CardMedia
          component="img"
          height="100"
          image={image}
          alt="Feelings"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Thank you so much for participating. Please verify your responses before submitting.
          </Typography>
        </CardContent>
        <CardContent>
          <List dense={true}>
            {generate(
              <ListItem>
                <ListItemAvatar>
                    <CheckCircleIcon />
                </ListItemAvatar>
                <ListItemText
                  primary="Single-line item"
                  secondary="value"
                />
              </ListItem>
            )}
          </List>
        </CardContent>
        <Box sx={{ mt: 1, ml: 1, mb: 2 }}>
          <div className="buttonDiv">
            <Link to="/comments" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button onClick={runPrevious} size="large" variant="contained" startIcon={<NavigateBeforeSharpIcon fontSize="large"/>}>
                  Back
              </Button>
            </Link>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button onClick={runNext} size="large" value="Next" variant="contained" endIcon={<NavigateNextSharpIcon fontSize="large" />}>
              Submit
            </Button>
            </Link>

          </div>
        </Box>
      </Card>
    </div>
  );
}

export default Review_5;
