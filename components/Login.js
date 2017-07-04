import React from 'react';
import { TextInput, StyleSheet, View, Button } from 'react-native';
import defaultValues from '../data/defaultValues';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  submitForm() {
    const { username, password } = this.state;
    const { login } = this.props;
    if (username.length && password.length) {
      const accKey = Object.keys(defaultValues).filter((key) => defaultValues[key].username === username.toLowerCase());
      return defaultValues[accKey] && defaultValues[accKey].password === password.toLowerCase() ? login(username) : false;
    }
    return false;
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder='username'
          style={styles.username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          style={styles.password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <Button
          onPress={() => this.submitForm()}
          title="Submit"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  password: {
    borderWidth: 1,
    height: 30,
    width: 200,
    marginTop: 20,
  },
  username: {
    borderWidth: 1,
    height: 30,
    width: 200,
  },
});
