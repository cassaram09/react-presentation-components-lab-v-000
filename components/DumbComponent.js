'use strict'

import React from 'react'

export default class DumbComponent extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      mood: 'happy'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.state.mood == 'happy' ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }

  render(){
    const { mood } = this.state;
    return(
      <div onClick={this.handleClick}>
        {mood}
      </div>
    )
  }
}