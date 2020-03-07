import React, {Component} from "react";
import ReactDOM from 'react-dom';

const withChildren = (ParentComponent) => {

  return class extends React.PureComponent {

    constructor(props){
      super(props);
      this.parseChildren = this.parseChildren.bind(this);
    }

    parseChildren(){
      return React.Children.count(this.props.children) > 1
        ? React.Children.map(this.props.children, (child) => {
          return child
        })
        : this.props.children
    };

    render() {
      return (<ParentComponent render={this.parseChildren()} {...this.props}></ParentComponent>)
    }
  }
}

export default withChildren;
