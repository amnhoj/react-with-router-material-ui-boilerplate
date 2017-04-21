import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {tealA700} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 0,
  },
  appbar:{
    backgroundColor: tealA700,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: tealA700,
  },
});

class l1 extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div style={styles.container}>
          <AppBar
            title="Level 1"
            style={styles.appbar}
          />

          <RaisedButton
            label="Test"
            secondary={true}
          />
          <List>
            <ListItem primaryText="React"/>
            <ListItem primaryText="react-router-dom"/>
            <ListItem primaryText="material-ui"/>
            <ListItem primaryText="404"/>
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default l1;
