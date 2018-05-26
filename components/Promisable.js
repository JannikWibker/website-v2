import React, { Component } from 'react'
import styled from 'styled-components'

export default class Promisable extends Component {
  constructor(props) {
    super(props)
    this.state = { component: null }

    this.handle = this.handle.bind(this)

    if(!this.props.client_only) {
      this.handle(this.props.promise())
    }
  }

  handle(promise) {
    const update = component => this.setState({ component })

    promise
      .then(update, update)
  }

  componentDidMount() {
    if(this.props.client_only) {
      this.handle(this.props.promise())
    }
  }

  render() {
    return this.state.component || 'loading...'
  }
}
