import { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { View } from 'react-native';


export default function Details({ route }) {
  const movieID = route.params.id;
  const [movie, setMovie] = useState({})

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0`)
      .then(res => res.json())
      .then(data => setMovie(data));
  }, [movieID])

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card key={movie.id} style={{ width: "48%", margin: "1%" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </View>
  )
}