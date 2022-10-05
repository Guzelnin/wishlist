import { styled } from '@mui/material/styles';
import { Grid, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Row } from 'reactstrap';
import { getApiAsync } from '../../redux/actions/apiActions';

export default function ApiComponent({ id, sliced }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiAsync(id));
  }, []);
  const date = new Date();
  return (
    <Container>
      <Row>
        <h4>Рекомендуемые варианты</h4> 
      </Row>
      <Row>
        {
        sliced?.length !== 0 && sliced && sliced?.map((el) => (
          <Card key={date} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={el?.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el?.displayName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el?.displayName}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link href={`${el?.url}`}>перейти на Amazon.com</Link></Button>
            </CardActions>
          </Card>
        ))
        
    }
      </Row>
    </Container>
  );
}
