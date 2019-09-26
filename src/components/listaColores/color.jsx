import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import estilos from './style.css';

export default function Color({ tema, escoger }) {

  return (
    <Card className={[estilos.card, tema]}>
      <CardContent>
       
        <Typography variant="h5" className="blanco title" component="h2">
          {tema}
        </Typography>
              
      </CardContent>
      <CardActions>
        <Button className="blanco" size="small" onClick={()=>escoger(tema)}>Escoger</Button>
      </CardActions>
    </Card>
  );
}