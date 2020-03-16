import React from 'react'

class GifSearch extends React.Component {

    state = {
        term: ""
    }

    handleChange = (event) => {
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.submitHandler(this.state.term)
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label name="gifTerm"> Enter a Search Term:</label>
                <input name="gifTerm" value={this.state.term} onChange={this.handleChange} type="text"/><br></br>
                <input type="submit" value="Search Gifs"/>
            </form>
        )
    }
}

export default GifSearch