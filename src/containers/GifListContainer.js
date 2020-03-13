import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{

    state = {
        myData: []
    }

    getGifs = (query) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${query} HERE&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.data)
        
            const newData = data.data.slice(0, 3)

            console.log(newData)
            this.setState({
                myData: newData
            })
        })

    }

    componentDidMount(){
        this.getGifs()
    }


    render(){
        return(
            <div>
              <GifList {...this.state}/>
              <GifSearch getGifs={this.getGifs}/>
            </div>
        )
    }
}

export default GifListContainer;