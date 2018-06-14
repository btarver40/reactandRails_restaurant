import React from 'react'
import axios from 'axios'

class Menu extends React.Component {
  state = {dishes: [], menuName: ''}

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}/dishes`)
    .then( ({ data }) => this.setState({ dishes: data }) )

    axios.get(`/api/menus/${this.props.match.params.id}`)
    .then( res => this.setState({ menuName: res.data.option }) )
}

  // toggleEdit = () => {
  //   this.setState(state =>)
  // }

  render() {
    const { dishes } = this.state;
    //debugger
    return (
        <div>
        <h1>{this.state.menuName}</h1>
        <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>

            { dishes.map( d =>
                <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.price}</td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    )
  }
}

export default Menu;
