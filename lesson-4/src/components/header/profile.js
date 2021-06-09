import React, { Component } from 'react';
import styles from "./header.module.css"

export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    componentDidUpdate() {
    }

    render() {
        return (<div className={styles.header}>Profile of user</div>);
    }
}
