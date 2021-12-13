import React from 'react';
import {
  View,
  StyleSheet,
  container,
  ListItem,
  List,
  Content,
  Text,
} from 'react-native';

function VideoPlayer(props) {
  return (
    <Container>
      <Content>
        <List>
          <ListItem>
            <Text>External Video Source</Text>
          </ListItem>
          <ListItem>
            <Text>External Video Source</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default VideoPlayer;
