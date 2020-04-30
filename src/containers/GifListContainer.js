import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

let BASE_URL = 'https://api.giphy.com/v1/gifs/search?q='
let API_KEY = '&api_key=dc6zaTOxFJmzC&rating=g'

class GifListContainer extends React.Component {

    state = {
        gifs: []
      }
    
      componentDidMount() {
        this.fetchGifs()
      }
    
      fetchGifs = () => {
        // fetch('https://api.giphy.com/v1/gifs/search?q=bear&api_key=dc6zaTOxFJmzC&rating=g')
        fetch(BASE_URL + "bear" + API_KEY)
        .then(resp => resp.json())
        .then(data => {
            this.setGifs(data.data) 
        })
      }

      setGifs = (gifs) => {
          let gifsArray = [];
          for (let i = 0; i < 3; i++) {
              gifsArray.push(gifs[i])
          }
          this.setState({ gifs: gifsArray }, () => console.log(this.state.gifs))   
      }

      handleSearch = (searchQuery) => {
        if (searchQuery != '') {
        let fetchQuery = BASE_URL + searchQuery + API_KEY
        console.log(fetchQuery)
        fetch(BASE_URL + searchQuery + API_KEY)
        .then(resp => resp.json())
        .then(data => {
          this.setGifs(data.data)
        })
        } else {
          return
        }
      }

    render() {
        return (
            <div>
                <ul>
                {/* {this.props.gifs.map(gif => gif.images.original.url )}    */}
                 {this.state.gifs.map(gif => (
                    <GifList key={gif.id} {...gif} /> 
                 ))}
                 </ul>
                 <GifSearch handleSearch={this.handleSearch}/>
            </div>
        )
    }
}

export default GifListContainer;