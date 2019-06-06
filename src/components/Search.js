import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../config';
import { handleRes } from '../helpers';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      search: '',
      searchRes: []
    }
  }
  
  handleChange = e =>{
    const input = e.target.value;
    this.setState({ search: input })
    if(!input){
      return ''
    }
    fetch(`${API_URL}/autocomplete?searchQuery=${input}`)
    .then(handleRes)
    .then(res => {
      // console.log(res)
      this.setState({
        searchRes: res
      })
    })
  }

  handleRedirect = (id) => {
    this.setState({
      searchRes: [],
      search: ''
    })
    this.props.history.push(`/currency/${id}`)
  }




  renderSearchRes = () =>{
    const { search, searchRes} = this.state;
    if(!search){
      return ''
    }
    if(searchRes.length > 0){
      return(
          <React.Fragment>
          {searchRes.map(res => {
              return(
                <React.Fragment>
                  <ul key={res.id} className="collection">
                    <li className="collection-item" onClick={() => this.handleRedirect(res.id)}>{res.symbol} - {res.name}</li>
                  </ul>  
                </React.Fragment>    
              )
            })}
        </React.Fragment>
      )
    }
    return(
      <div>
        <h5 className="center">Loading..</h5>
        <div className="progress">
            <div className="indeterminate"></div>
        </div>
      </div>
    )
  }

  render(){

    const { search } = this.state

    return (

      <React.Fragment>

        <div className="row">
          <div className="input-field col s4">
            <input id="curr" type="text" className="validate" onChange={this.handleChange} value={search}  />
            <label for="curr">Currency</label>
          </div>
          <div className="col s6 offset-s2">
            <h6 className="center">Currencies</h6>
            { this.renderSearchRes() }
          </div>
        </div>
        
      </React.Fragment>
    )
  }

  
}

export default withRouter(Search)
