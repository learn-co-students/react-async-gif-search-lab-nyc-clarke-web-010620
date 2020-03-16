import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


class GifListContainer extends React.Component {

    state = {
        gifs: [],
        search: "dolphin"
    }

    fetchGifs = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(gifs => this.setState({
            gifs: gifs.data.slice(0,3)
        }))
    }

    componentDidMount() {
        this.fetchGifs()
    }

    componentDidUpdate() {
        this.fetchGifs()
    }

    submitHandler = term => {
        this.setState({
            ...this.state,
            search: term
        })
    }

    render() {
        return(
            <div>
                <GifList gifs={this.state.gifs}/>
                <GifSearch submitHandler={this.submitHandler}/>
            </div>
        )
    }

}
export default GifListContainer