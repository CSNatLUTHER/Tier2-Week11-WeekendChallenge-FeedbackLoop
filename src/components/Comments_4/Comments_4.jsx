import React from 'react';
import './Comments_4.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import image from './images/comments.jpg';
import { Box } from '@mui/system';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import NavigateBeforeSharpIcon from '@mui/icons-material/NavigateBeforeSharp';
import { TextareaAutosize } from '@mui/base';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Comments_4() {

  const feedback = useSelector(store => store.feedback);

  const [value, setValue] = React.useState(feedback.comments);
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
    <div className="comments">
      <Card sx={{ maxWidth: 500 }}>
        <Typography variant="h3" color="text.primary">
            Comments
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
            There is always a topic that may not get covered in a survey. 
            This section is to allow for any additional comments you may want to share.
          </Typography>
        </CardContent>
        <CardContent>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={4}
            placeholder="Add comments here..."
            value={value}
            style={{ width: 350, height: 65, maxWidth: 450, minWidth: 250, maxHeight: 350, minHeight: 25 }}
            onChange={handleChange}
          />
        </CardContent>
        <Box sx={{ mt: 1, ml: 1, mb: 2 }}>
          <div className="buttonDiv">
            <Link to="/support" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button onClick={runPrevious} size="large" variant="contained" startIcon={<NavigateBeforeSharpIcon fontSize="large"/>}>
                  Previous
              </Button>
            </Link>
            <Link to="/review" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button onClick={runNext} size="large" value="Next" variant="contained" endIcon={<NavigateNextSharpIcon fontSize="large" />}>
              Next
            </Button>
            </Link>

          </div>
        </Box>
      </Card>
    </div>
  );
}

export default Comments_4;
