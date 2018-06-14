import React from 'react'

class MenuForm extends React.Component {
  defaultValues ={option: ''}
  state = {...this.defaultValues}
  // write out defaultValues so we dont have to write each value out separately(if we have multiple values)

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

  render() {
    const {option} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="option"
          placeholder="Option"
          value={option}
          onChange={this.handleChange}
          required
        />
      </form>
    )
  }
}

export default MenuForm;