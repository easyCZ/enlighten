import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button';


export default class Contacts extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <Button label="Hello world" raised accent />
        </div>
        <div className="col-xs-12">contacts</div>
      </div>
    )
  }

}