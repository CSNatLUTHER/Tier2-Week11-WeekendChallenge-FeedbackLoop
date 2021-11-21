import React from 'react';
import './ThankYou_6.css';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';
import image from './images/thankyou.jpg';
import { Box } from '@mui/system';
import NavigateNextSharpIcon from '@mui/icons-material/NavigateNextSharp';
import { Link } from 'react-router-dom';


function ThankYou_6() {
  return (
    <div className="thankyou">
      <Card sx={{ maxWidth: 500 }}>
        <CardMedia
          component="img"
          height="250"
          image={image}
          alt="Feelings"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Please plan to complete this survery each week. 
          </Typography>
        </CardContent>
        <Box sx={{ mt: 1, ml: 1, mb: 2 }}>
          <div className="buttonDiv">
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <Button size="large" value="Next" variant="contained" endIcon={<NavigateNextSharpIcon fontSize="large" />}>
              Begin Survey Again
            </Button>
            </Link>
          </div>
        </Box>
      </Card>
    </div>
  );
}

export default ThankYou_6;
