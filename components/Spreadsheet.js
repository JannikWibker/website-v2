import React, { Component } from 'react'
import styled from 'styled-components'

import Editable from '../components/Editable.js'

const Table = styled.table`
  font-size: 14px;
  border-spacing: 0px;
  color: #000;
  border-width: 0 0 1px 1px;
  border-style: solid;
  border-color: #cacaca;
  table-layout: fixed;

  th[id$="_"] {
    background-color: #f0f0f0;
  }

  th, tr > td {
    position: relative;
    display: inline-block;
    box-sizing: border-box;
    width: 80px;
    height: 25px;
    margin: 0px;
    padding: 0px;
    border-width: 1px 1px 0 0;
    border-style: solid;
    border-color: #cacaca;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  th > div, td > div {
    height: 100%;
  }

  th > div > span, td > div > span {
    line-height: 15px;
    display: inline-block;
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    padding: 4px;
  }

  td.selected {
    border: 2px solid #1e6337;
  }

  td.selected span {
    padding: 3px 3px 3px 2px;
  }
`

const round = (number, decimals) => Number(Math.round(number + 'e' + decimals) + 'e-' + decimals)

const format_data = (data, tp, stp, r_dec) => {
  if(typeof data === 'undefined') throw Error('no data defined')
  else if(typeof tp === 'undefined') throw Error('no type defined')
  if(tp === 'NUMBER') {
    if(stp === 'PERCENTAGE' && r_dec) return round(data * 100, r_dec) + '%'
    if(stp === 'PERCENTAGE') return (data * 100) + '%'
    if(r_dec) return round(data, r_dec)
    else return data
  } else if(tp === 'STRING') {
    if(stp === 'UPPERCASE') return data.toUpperCase()
    if(stp === 'LOWERCASE') return data.toLowerCase()
    else return data
  } else {
    return data
  }
}

const range = (l) => [...Array(l)].map((x,i) => i)

const destructur = (obj, template) => {
  let _obj = {}
  if(Array.isArray(template)) {
    template.forEach(key => _obj[key] = obj[key])
  } else {
    Object.keys(template).forEach(key => _obj[template[key]] = obj[key])
  }
  return _obj
}

const default_value = tp => {
  if(tp === 'STRING') return ''
  if(tp === 'NUMBER') return 0
}

export default class Spreadsheet extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.data
    this.columns = this.data[0].length
    this.rows = this.data.length

    this.update = this.update.bind(this)
    this._update = this._update.bind(this)

    this.props.cb(this.data, this.update)

    this.alphabet = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ'.split('')
    this._alphabet = 'abcdefghijklnmopqrstuvwxyz'.split('')

    const g = (cell, call_cell, byRender=false, rec_call_cell) => {
      console.log(cell, call_cell, byRender, rec_call_cell)
      const s = cell.split('.')
      const c = this.data[s[0]][s[1]]

      const cs = call_cell.split('.')
      const cc = this.data[cs[0]][cs[1]]

      const rcs = rec_call_cell.split('.')
      const rcc = this.data[rcs[0]][rcs[1]]

      if(c.tp === 'EMPTY') return ''
      if(c.tp === 'STRING') return c.vl
      if(c.tp === 'NUMBER') {

        // add 'changes'-array to the current cell including the caller of g (the previous function in the callstack, (and the cell of this function))
        // if the array does exist already, the id of the cell is just pushed to it
        if(cell !== rec_call_cell) {
          console.log('caller', this.data[rcs[0]][rcs[1]], 'current', this.data[s[0]][s[1]])

          if(Array.isArray(this.data[s[0]][s[1]].changes) && !this.data[s[0]][s[1]].changes.includes(rcc.id))
            this.data[s[0]][s[1]].changes.push(rcc.id)
          else if(!Array.isArray(this.data[s[0]][s[1]].changes))
            this.data[s[0]][s[1]].changes = [rcc.id]


          console.log(destructur(this.data[rcs[0]][rcs[1]], ['id', 'changes', 'visited']), destructur(this.data[s[0]][s[1]], ['id', 'changes', 'visited']))
        }

        if(!c.fn) return c.vl
        if(c.fn) {
          // if already calculated then add visited = true, else check if it is a circular call and if it is
          // return the default value for this data type, else calculate the value by executing the function
          if(this.data[s[0]][s[1]].visited === undefined || this.data[s[0]][s[1]].visited === false) {
            if(cell !== call_cell || byRender) {
              console.log(c.id, rcc.id)
              this.data[s[0]][s[1]]._vl = c.fn(id => g(id, call_cell, false, c.id))
            } else {
              this.data[s[0]][s[1]]._vl = this.data[s[0]][s[1]].vl || default_value(this.data[s[0]][s[1]].tp)
            }
          }

          this.data[s[0]][s[1]].visited = true

          return this.data[s[0]][s[1]]._vl
        }
      } else return c.vl
    }

    this.g = g.bind(this)
  }

  _update(cell) {
    const s = cell.split('.')
    const c = this.data[s[0]][s[1]]

    this.data[s[0]][s[1]].visited = false

    if(c.changes) c.changes.map(this.update)
  }

  update(cell) {
    this._update(cell)
    this.forceUpdate()
  }

  generic_cell(id, contents, editable=false, isBorder=false, cb, raw_data) {
    return isBorder
      ? <th id={id} key={id}><div><span>{contents}</span></div></th>
      : (
      <td id={id} key={id}>
        <div>
          {!editable
            ? <span>{contents}</span>
            : <Editable raw_data={raw_data} cb={cb}>{contents}</Editable>}
        </div>
      </td>
    )
  }

  render_cell(cell) {
    const s = cell.id.split('.')
    const editable = (cell.tp === 'NUMBER' && cell.fn === undefined)
    const cb = (value) => {
      this.data[s[0]][s[1]].vl = parseFloat(value)
      this.update(cell.id)
    }

    const v = this.g(cell.id, cell.id, true, cell.id)
    return this.generic_cell(s[0] + '.' + s[1], format_data(v, cell.tp, cell.stp, cell.r_dec || this.props.options.rounding), editable, false, cb, v)
  }

  render() {
    return (
      <Table>
        <tbody>
          <tr id={'r0l'} key={'r0l'}>
            <th id={'c0r0_'} key={'c0r0_'}>{'/'}</th>
            {range(this.columns).map(x => this.generic_cell('c' + x + '_', this.alphabet[x], false, true))}</tr>
            {range(this.rows).map(x =>
              <tr id={'r' + x} key={'r' + x}>
                {this.generic_cell('r' + x + '_', x+1, false, true)}
                {range(this.columns).map(y => this.render_cell(this.data[x][y]))}
              </tr>
            )}
        </tbody>
      </Table>
    )
  }
}
