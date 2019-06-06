import React, { Component } from 'react'
import { API_URL } from '../config'
import { handleRes } from '../helpers'
import Table from './Table'

export class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {
      currency: {},
      loading: false,
      error: null
    }
  }
  
  componentWillReceiveProps(nextProp){
    if(this.props.location.pathname !== nextProp.location.pathname){
      const nextId = nextProp.match.params.id;
      this.fetchData(nextId)
    }
  }

  fetchData = (id) =>{
    this.setState({ loading: true })
    fetch(`${API_URL}/cryptocurrencies/${id}`)
    .then(handleRes)
    .then(currency =>{
      this.setState({
        loading: false,
        currency
      })
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err.errorMessage
      })
    })
  }


  render() {

    const { currency, loading, error } = this.state

    if(loading){
      return <div>Loading..</div>
    }

    if(error){
      return <div>{ error }</div>
    }

    return <Table currency={currency} /> 
  
  }


}

export default Detail
