import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native';
import { useEffect, useState } from 'react';
import Slider from "react-slick";

const image = require("../assets/cover.jpg");



export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language")
      .then(res => res.json()).then(res => setMovies(res.results));
  }, []);
  let bestMovies = movies.filter(data => data.vote_average > 7);
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <ScrollView>
      <ImageBackground source={image} resizeMode="cover">
        <View style={styles.textCont}>
          <Text style={styles.text1}>Swipe Me!</Text>
          <Text style={styles.text2}>Hi it's my second time. I develop mobile.</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <Slider {...settings}>
          {bestMovies.map((movie) => {
            return (
              <View key={movie.id}>
                <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} style={{
                  width:"100%",
                  height: 400,
                  resizeMode: 'stretch',
                }} />
              </View>
            );
          })}
        </Slider>
      </View>
    </ScrollView>

  );
}



const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
  },
  textCont: {
    marginTop: "40%",
    padding: 20
  },
  text1: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    textShadowColor: "black",
  }
});