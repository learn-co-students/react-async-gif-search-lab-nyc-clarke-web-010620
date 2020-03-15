import React from 'react'

class GifList extends React.Component {

    renderGifs(){
        return this.props.gifs.map((gif, ind) => <li><img src={gif.images.original.url}></img></li>)
    }

    render(){
        return(

            <ul>
                {this.renderGifs()}
            </ul>
        )
    }

}

export default GifList 