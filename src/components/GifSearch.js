import React from 'react'


class GifSearch extends React.Component {



render(){
    console.log(this.props)
    return(
        <div><input onChange={this.props.handleChange} value={this.props.searchContent}></input>
        <button onClick={this.props.searchClick}>Search</button>
        </div>
    )
}

}
export default GifSearch