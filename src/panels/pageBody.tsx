import React, { Component } from 'react';
import Button from '../components/button';

class PageBody extends Component {
    render() {
        const button1 = "Primary Button";
        return (
            <div className="page-body container py-5">
                <h3 className="border-bottom">Button with external style</h3>
                <Button type="secondary" btnText={button1}></Button>
            </div>
        );
    }
}   

export default PageBody;