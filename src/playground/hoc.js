//Higher Order Compnent (HOC) - A component (HOC) that renders another component
// reuse code
// render hijacking
// prop manipulation
// abstract state


import React from 'react';
import ReactDOM from 'react-dom';

const Info =(props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is:{props.info} {props.isAdmin}</p>
    </div>
);

const withAdminWarning =(WrappedComponent) =>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This private info please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ):(
                <p>Please Login</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info='Hello this is the details'></AdminInfo>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Hello this is the details'></AuthInfo>,document.getElementById('app'));