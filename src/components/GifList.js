import React from 'react';

class GifList extends React.Component {


    render() {
        console.log(this.props)
        return (
            <li>
                <img src={this.props.images.original.url} alt="not found" height="300" width="300" />
            </li>
        ) 
    }
}
export default GifList