import React, { Component } from 'react';
import AppBar from 'react-toolbox/lib/app_bar';
import { Navigation } from 'react-toolbox';

export default class ContactsToolbar extends Component {

  render () {
    return (
      <AppBar fixed flat>
        <a href="/home">React Toolbox Docs</a>
        <Navigation />
      </AppBar>
    )
  }

}