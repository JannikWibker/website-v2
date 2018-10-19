import React from 'react'
import styled from 'styled-components'
import pt from 'prop-types'
import btoa from 'btoa'

const Input = styled.input`
background-color: ${props => props.theme.bg}!important;
padding: 0px 10px 5px 10px!important;
margin-bottom: 0;
font-size: 12px;
width: 150px;
border: none!important;
border-radius: 0px!important;
border-bottom: 2px solid ${props => props.theme.border1} !important;
outline: none;

:focus {
  border-bottom: 2px solid ${props => props.theme.border2} !important;
}
`

const Label = styled.label`
  display: inline-block;
  width: ${props => props.label_width || '100px'};
  margin-top: 4px;
  font-size: 13px;
  text-align: left;
  color: ${props => props.theme.color};
`

const Error = styled.span`
    color: ${props => props.theme.color};
    display: inline-block;
    height: 12px;
    width: 170px;
    font-size: 10px;
    padding-left: 112px;
    text-align: center;
`

const DisabledText = styled.span`
  color: ${props => props.theme.disabled};
  font-size: 13px;
  padding-left: 10px;
`

// __value key:person val:1 type:string has_hidden:val computed_showing:val disabled:false

const InputField = ({disabled, small, title, type, obj_key, value, min, max, placeholder, error, children, cb, val, has_hidden, comp_showing, theme, label_width='100px'}) => {
  const classNames = [
    '__value',
    obj_key ? 'key:' + obj_key : '',
    type ? 'type:' + type : '',
    val ? 'val:' + val : '',
    has_hidden ? 'has_hidden:' + has_hidden : '',
    comp_showing ? 'computed_showing:' + comp_showing : '',
    disabled ? 'disabled:true' : 'disabled:false'
  ].join(' ')
  return (
  <div className="InputField">
    {title
      ? <Label label_width={label_width} theme={theme} htmlFor={btoa(obj_key || title)}>{title}</Label>
      : null
    }
    {disabled
      ? <DisabledText id={btoa(obj_key || title)} className={classNames}>{children || value || placeholder}</DisabledText>
      : <Input
          theme={theme}
          className={classNames}
          id={btoa(obj_key || title)}
          defaultValue={children || value}
          type={type} placeholder={placeholder}
          innerRef={cb}
          {...(type === 'number' || type === 'date') && min && max ? {min, max} : {}}
          {...(type === 'date' ? {key: children || value} : {})}
        />
      }
    {small ? null : <br />}
    {small ? null : <Error theme={theme}>{error}</Error>}
    {small ? null : <br />}
  </div>
)}

InputField.propTypes = {
  disabled:     pt.bool,
  small:        pt.bool,
  title:        pt.string,
  type:         pt.string,
  obj_key:      pt.string,
  value:        pt.oneOfType([pt.string, pt.number, pt.object]), // pt.string is for almost everything, pt.number is for type="number", object is for type="date"
  val:          pt.oneOfType([pt.string, pt.number, pt.object, pt.bool]),
  has_hidden:   pt.string,
  comp_showing: pt.string,
  placeholder:  pt.string,
  error:        pt.string,
  label_width:  pt.string,
  cb:           pt.func,
  min:          pt.oneOfType([pt.string, pt.number]), // pt.number is for type="number"
  max:          pt.oneOfType([pt.string, pt.number]), // pt.string is for type="date"
  theme:        pt.object
}

export default InputField
