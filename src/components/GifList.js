import React from 'react';

class GifList extends React.Component {


    render() {
        console.log(this.props)
        return (
            <li>
                <img src={this.props.images.original.url} alt="not found" />
            </li>
        ) 
    }
}
export default GifList