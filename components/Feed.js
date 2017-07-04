import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, StyleSheet, ScrollView, View, Button } from 'react-native';
import { feed } from '../reducers/feed';
import * as feedActions from '../actions/feed';
import News from './News';

const mapStateToProps = ({ feed }) => ({
  feed
});

const actions = Object.assign({}, feedActions);
const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(actions, dispatch) });

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { feed } = this.props;
    if (!feed.length) {
      this.props.actions.getFeed();
    }
  }
  renderNews() {
    const { feed } = this.props;
    return feed.map((item, index) => <News key={index} item={item} />);
  }
  render() {
    const { feed } = this.props;
    return (
      <View style={styles.feed}>
        <ScrollView>
          { feed.length ? this.renderNews() : <Text> </Text> }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  feed: {
    flex: 1,
    alignItems: 'center',
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
