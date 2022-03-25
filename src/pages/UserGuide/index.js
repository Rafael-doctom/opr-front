import React from 'react';

import Menu from '../../components/Menu';
import Carousel from 'react-material-ui-carousel';

import './style.css';

export default function UserGuide(){
    var pages = [
        {
            name: 'abc',
        },
        {
            name: 'def',
        },
        {
            name: 'ghi',
        }
    ]

    return(
        <div className="page_user_guide">
            <Menu />
            <div className="carousel_container">
                <Carousel autoPlay={false}>
                    { pages.map((page, index) => <Page page={page} key={index} />)}
                </Carousel>
            </div>
        </div>
    )
}

function Page(props) {
    return (
        <div>
            <h1>{props.page.name}</h1>
        </div>
    )
}