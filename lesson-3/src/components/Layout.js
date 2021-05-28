import React from "react"

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { ChatList } from "./chat-list"
import Header from "./Header"
import { MessageField } from "./message-field";
import Box from '@material-ui/core/Box';



const useStyles =/*  makeStyles(() => */ ({
    root: {
        flexGrow: 1,
    },
    container: {
        height: '100vh',
    },

    chatList: {
        backgroundColor: '#182633',
        borderRight: '3px solid red',
    },
    messageField: {
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '1fr 36px',
    },

});

export default class Layout extends React.Component {
    state = {
        header: <Header />,
        chatList: <ChatList />,
        messageList: <MessageField />,
    }

    render() {

        const classes = useStyles;

        const { header, chatList, messageList } = this.state

        const Layout = ({ header, chatList, messageList }) => {
            return (
                <>
                    <Box textAlign="center" bgcolor="#8181f3">
                        <div className={classes.header} >{header} </div>
                    </Box>
                    <Grid className={classes.container} container alignItems="stretch">

                        <Hidden only={['xs', 'sm']}>

                            <Grid className={classes.chatList} item xs={3}>
                                <div className="chat">{chatList}</div>
                            </Grid>
                        </Hidden>
                        <Grid className={classes.messageField} item xs>
                            <div className="massage">{messageList}</div>
                        </Grid>
                    </Grid>
                </>
            )
        }

        return (
            <Layout header={header} chatList={chatList} messageList={messageList} />
        )

    }
}












/* // @TODO сделать propTypes
export const Layout = ({ chatList, message }) => {
    return (
        <div>
            <div className="header">Header </div>
            <div className="chat">{chatList}</div>
            <div className="massage">{message} </div>
        </div>
    )
} */





