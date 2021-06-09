import React from "react"
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Chat } from "./chat"


export class ChatList extends React.Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  }

  render() {
    const { chats, selectedIndex } = this.state

    return (
      <div>
        {chats.map((chat, index) => (

          <List component="nav" aria-label="main mailbox folders" >
            <ListItem fullwidth="true"
              button
              selected={selectedIndex === 0}>
              <Chat title={chat} key={index} selected={selectedIndex} />
            </ListItem>

          </List>
        ))}
      </div>
    )
  }
}
