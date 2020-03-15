import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: [],
        searchContent: ""
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=happy&api_key=5IoXQh7d7QmtiRFI8rDQc86p9vrtABOQ&rating=g')
            .then(resp => resp.json())
                .then(body => {
                    console.log(body)
                    this.setState({gifs: body.data.splice(22)})})
    }

    handleChange = (e) => {
        this.setState({searchContent: e.target.value})
    }

    searchClick = () => {
        console.log(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchContent}&api_key=5IoXQh7d7QmtiRFI8rDQc86p9vrtABOQ&rating=g`)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchContent}&api_key=5IoXQh7d7QmtiRFI8rDQc86p9vrtABOQ&rating=g`)
            .then(resp => resp.json())
                .then(body => {
                    console.log(body)
                    this.setState({gifs: body.data.splice(22)})})
    }
    

    render(){
        return(
            <div>
            <GifSearch handleChange={this.handleChange} searchContent={this.state.searchContent} searchClick={this.searchClick}/>
            <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}

export default GifListContainer