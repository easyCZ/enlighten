import React, { Component } from 'react';
import { ToolbarStyle } from '../../Styles';


class ChatToolbar extends Component {

  render() {
    return (
      <div
        className="col-xs-12"
        style={ToolbarStyle}
      >
        <div className="box">
          Chat Toolbar
        </div>
      </div>
    )
  }

}

export default ChatToolbar