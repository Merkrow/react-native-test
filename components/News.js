import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';

class News extends React.Component {
  render() {
    const { title, description, urlToImage } = this.props.item;
    return (
      <View style={styles.newsItem}>
        <Text style={styles.title}>{title}</Text>
        <Text>{description}</Text>
        <Image style={styles.image} source={{ uri: urlToImage }}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  newsItem: {
    borderWidth: 2,
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  image: {
    height: 100,
    width: 400,
  }
});

export default News;
