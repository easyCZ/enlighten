import React from 'react';
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox';

const Conversations = () => (
  <List selectable ripple>
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/m.jpg'
      caption='Dr. Manhattan'
      legend="Jonathan 'Jon' Osterman"
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/o.jpg'
      caption='Ozymandias'
      legend='Adrian Veidt'
    />
    <ListItem
      avatar='https://dl.dropboxusercontent.com/u/2247264/assets/r.jpg'
      caption='Rorschach'
      legend='Walter Joseph Kovacs'
    />
  </List>
);

export default Conversations;