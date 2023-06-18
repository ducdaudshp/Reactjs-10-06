import React, { Component } from 'react'

export default class EventFormControl3 extends Component {
    constructor(props){
        super(props);
        this.state={
            gender: true,
        }
    }

    hanldeSubmit = (ev) => {
        ev.preventDefault();
        alert(this.state.gender)
    };

    handleChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

  render() {
    let checked = this.state.gender === true ? checked : ""
    return (
      <div>
        
        <form onSubmit={this.hanldeSubmit}>
            Giới tính:
            <input type='radio' value={true} name='gt' 
                // checked={checked}
                onChange={this.handleChange}
            />
            <label htmlFor='gtNam'>Nam</label>
            <input type='radio' value={false} name='gt' 
                // checked={checked}
                onChange={this.handleChange}            
            />
            <label htmlFor='gtNu'>Nữ</label>
            <br/>

        </form>
      </div>
    )
  }
}
