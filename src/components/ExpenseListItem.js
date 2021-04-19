import React from 'react';
import {connect} from 'react-redux';

const ExpenseListItem = ({description,amount,createdAt}) =>(
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>

);

export default ExpenseListItem;

// const mapStateToProps = (state)=>{
//     return{
//         expense
//     };
// };

// export default connect(mapStateToProps)(ExpenseItem);