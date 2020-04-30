import React from 'react';
import Styling from './Styling.css'

class GifSearch extends React.Component {

  state = {
    searchQuery: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    // console.log(this.state.searchQuery)
    this.props.handleSearch(this.state.searchQuery)
    this.setState({ searchQuery: '' })
  }

  handleChange = (e) => {
    e.persist()
    this.setState({ searchQuery: e.target.value })
  }

    render() {
        return (
          <div className="gif-search">
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>
                Enter a Search Term:
                <br></br>
                <input type="text" value={this.state.searchQuery} onChange={this.handleChange} />
              </label>
              <br></br>
              <button type="button" value="Find GIFs" style={{ color: "white", background: "green" }}
              onClick={(e) => this.handleSubmit(e)}>Find GIFs</button>
            </form>
          </div>
        ) 
    }
}
export default GifSearch