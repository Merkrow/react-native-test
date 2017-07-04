import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './components/Login';
import Feed from './components/Feed';
import { login } from './reducers/login';
import * as loginActions from './actions/login';

const mapStateToProps = ({ login }) => ({
  login,
});

const actions = Object.assign({}, loginActions);
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { login } = this.props;
    const loginAction = this.props.actions.login;
    const { logout } = this.props.actions;
    return (
      <View style={styles.container}>
        {!login ? <Login login={loginAction} /> : <View style={styles.container}><Feed /><Text>Hello {login}</Text><Button title='logout' onPress={() => logout()}/></View>}
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
