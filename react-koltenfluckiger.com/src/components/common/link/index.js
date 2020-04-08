import React, {Component} from 'react';
import ClassMapper from "sass-css-modules-class-mapper";

import styles from "./link.module.css";

class Link extends React.PureComponent {

    constructor(props) {
        super(props);
        this.variant = ClassMapper.map(
            styles, props.variant
            ? props.variant
            : {
                defaults: "link-button"
            });
    }

    render() {
        const {href, text} = this.props;
        const {variant} = this;
        return (<a className={variant} href={href}>{text}</a>)
    }
}

export default Link;
