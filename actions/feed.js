import { AsyncStorage } from 'react-native';
const apiKey = 'bff2c66952bc47ff9f67936f8b51880f';

const url = `https://newsapi.org/v1/articles?source=CNN&apiKey=${apiKey}`;

export const getFeed = () => async (dispatch) => {
  try {
    const value = await AsyncStorage.getItem('hashed')
    if (value) {
      const data = JSON.parse(value);
      if (data.articles.length) {
        dispatch({ type: 'SET_FEED', payload: data.articles });
        return;
      }
    }
  } catch(err) {
    console.log(err);
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    await AsyncStorage.setItem('hashed', JSON.stringify(data));
    dispatch({ type: 'SET_FEED', payload: data.articles})
  } catch (err) {
    console.log(err);
  }
}
