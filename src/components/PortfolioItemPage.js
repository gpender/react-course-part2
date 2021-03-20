import React from 'react';

const PortfolioItemPage = (props) =>{
  console.log(props);
    return (
    <div>
    <p>Portfolio item {props.match.params.id}</p>
    </div>
)}

export default PortfolioItemPage;