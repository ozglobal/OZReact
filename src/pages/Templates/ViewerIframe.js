import React from "react";
import Iframe from 'react-iframe';

function Viewer () {
    return(
        <div style={{marginTop: 60}}>
        <Iframe url="/oz/edu/eformdev/customer-iframe.html"
            width='900px'
            height='1000px'
            position="relative"/>
        </div>
    );
}
export default Viewer;