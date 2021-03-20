import React from 'react';
import{Link} from 'react-router-dom';

const PortfolioPage = (props) =>{
  console.log(props.match.params.id);
    return (
    <div>
    <p>Portfolio</p>
    <Link to="/portfolio/99">Page 1</Link>
    <Link to="/portfolio/100">Page 2</Link>
    </div>
)}

export default PortfolioPage;