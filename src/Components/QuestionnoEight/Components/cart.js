import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    let {title, description, image} = this.props;
    return (
      <div className='my-2'>
        <h1>Card</h1>
        <div class="card" style={{width: "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{description}</p>
    <a href="/" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
      </div>
    )
  }
}
