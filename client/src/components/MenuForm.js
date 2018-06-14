import React from 'react'

class MenuForm extends React.Component {
  defaultValues ={option: ''}
  state = {...this.defaultValues}

  handleSubmit = (e) => {
    e.preventDefault();
    const menu = {...this.state}
    this.props.submit(menu)
    this.setState({...this.defaultValues})
  }

  handleChange = (e) => {
    const {target: {option, value}} = e;
    this.setState({[option]: value})
  }




















}