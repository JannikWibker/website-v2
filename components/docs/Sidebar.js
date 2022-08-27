import React, { Component } from 'react'
import styled from 'styled-components'

import Link from '../Link.js'
import isNode from '../../utils/isNode.js'

const SideNav = styled.div`
  width: 144px;
  text-align: left;
  float: left
`

const Category = styled.div`

`

const Label = styled.div`
  padding-left: 30px;
  margin: 0 0 15px;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-weight: 400;
  color: #888;
  cursor: default;
  paddding-left: 30px;
`

const Item = styled.div`
  > div a {
    text-decoration: none;
    font-size: 14px;
    box-sizing: border-box;
    color: black;
  }
`

const NotSelected = styled.div`
  padding: 4px 10px 4px 30px;
`

const Selected = styled.div`
  border-left: 4px solid black;
  box-sizing: border-box;
  padding: 4px 10px 4px 26px;

  a {
    font-weight: 600;
    color: black;
  }
`

export default class SideBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      route: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ route: nextProps.selected })
  }

  componentWillMount() {
    this.props.cb(!isNode && location.hash
      ? location.hash.substring(1)
      : Object.keys(this.props.data[Object.keys(this.props.data)[0]])[0]
    )
  }

  componentDidMount() {
    this.setState({
      route: !isNode && location.hash ? location.hash.substring(1) : 'html_to_md'
    })
  }

  render() {
    return (
      <SideNav>
        {Object.keys(this.props.data).map((category, i) => (
          <Category key={i}>
            <Label>{category}</Label>
            <div>
              {Object.keys(this.props.data[category]).map((item, i) => (
                <Item key={i}>
                  {this.state.route === item || decodeURI(this.state.route) === item
                    ? <Selected><a onClick={this.props.cb.bind(this, item)} href={'#' + item}>{item}</a></Selected>
                    : <NotSelected><a onClick={this.props.cb.bind(this, item)} href={'#' + item}>{item}</a></NotSelected>
                  }
                </Item>
              ))}
            </div>
          </Category>
        ))}
      </SideNav>
    )
  }
}
