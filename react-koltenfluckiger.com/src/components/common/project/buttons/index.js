import React, {Component} from 'react';
import Button from "../../button";
import Link from "../../link";
import PropTypes from 'prop-types';

import styles from "./project-buttons.module.css";

class ProjectButtons extends React.PureComponent {

    constructor(props) {
        super(props);
        this.sourceCodeLink = props.sourceCodeLink;
        this.hostedLink = props.hostedLink;
        this.hostedStatus = props.hostedStatus;
    }

    render() {
        const {sourceCodeLink, hostedLink} = this.props;
        return (<div className={styles.container}>
            <Link variant={{
                    classes: "mdm link-button red"
                }} href={sourceCodeLink} text="Source Code"></Link>
            <Button type="button" variant={{
                    classes: "mdm button green space-left"
                }} onClick={() => {
                    window.location.href = hostedLink
                }} text="Live Demo"></Button>
        </div>)
    }
}

export default ProjectButtons;
