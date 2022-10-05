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

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
// }));

export default function ApiComponent({ id }) {
  // const [load, setLoad] = useState(true);
  const api = useSelector((state) => state.api);
  // console.log(api);
  // const [sliced, setSliced] = useState(api?.results?.slice(0, 3) || []);
  // console.log(api?.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getApiAsync(id));
    // setSliced(api?.results?.slice(0, 3));
  }, []);
  // if (api !== undefined) {
  //   setLoad(false);
  // }
  return (
    <Container>
      <Row>
        <h4>Рекомендуемые варианты</h4> 
      </Row>
      <Row>
        {
        api?.length !== 0 && api && api?.map((el) => (
          <Card key={el?.url} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              // image={load ? 'https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif' : el?.image}
              image={el?.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {`$${el?.price}`}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {el?.name}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small"><Link href={`${el?.url}`}>Learn More</Link></Button>
            </CardActions>
          </Card>
        ))
        
    }
      </Row>
    </Container>
  );
}
