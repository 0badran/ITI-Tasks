import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';



export default function Movies({ navigation }) {



  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language")
      .then(res => res.json()).then(res => setMovies(res.results));
  }, []);

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {
            movies.map((movie) => {
              return (
                <Card key={movie.id} style={{ width: "48%", margin: "1%" }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
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
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => navigation.navigate('Details', { id: movie.id })}>
                      Details
                    </Button>
                  </CardActions>
                </Card>
              )
            })
          }
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    marginVertical: 100,
    flexWrap: "wrap",
  },
});