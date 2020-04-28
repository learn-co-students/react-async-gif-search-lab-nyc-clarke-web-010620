import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

    state = {
        gifs: []
      }
    
      componentDidMount() {
        this.fetchGifs()
      }
    
      fetchGifs = () => {
        fetch('https://api.giphy.com/v1/gifs/search?q=bear&api_key=dc6zaTOxFJmzC&rating=g')
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
            //   console.log(gifs[i].images.original.url)
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
                 <GifSearch />
            </div>
        )
    }
}

export default GifListContainer;