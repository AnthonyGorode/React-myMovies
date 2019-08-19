import React from 'react';
import Loading from '../../assets/loading.gif';

export default () => {
    return (
        <div style={{minHeight: '100vh'}} className="d-flex flex-row justify-content-center align-items-center">
            <img alt="Loading ..." src={ Loading } />
        </div>
    );
}