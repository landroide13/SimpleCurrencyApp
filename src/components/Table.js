import React from 'react'
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Table(props) {

const { currency } = props;

  return (
    <React.Fragment>
      <table className="highlight">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th></th>
            <th>Rate(%)</th>
            <th>Market Cap.</th>
            <th>Rank</th>
            <th>Vol. 24hrs.</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{ currency.symbol }</td>
            <td>{ currency.name }</td>
            <td>{ currency.price }</td>
            {
              currency.percentChange24h > 0 &&
              <i class="small material-icons top">arrow_upward</i>
            }
            {
              currency.percentChange24h < 0 &&
              <i class="small material-icons top">arrow_downward</i>
            } 
            <td>{ currency.percentChange24h }</td>
            <td>{ currency.marketCap }</td>
            <td>{ currency.rank }</td>
            <td>{ currency.volume24h }</td>
          </tr>
        </tbody>
      </table>    
    </React.Fragment>
  )


}


export default withRouter(Table)

