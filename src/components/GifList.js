import React from 'react';

class GifList extends React.Component{

    render(){
        console.log(this.props.myData)
        return(
            
            <div>
                {this.props.myData.map(gif => <img key={gif.url} src={gif.images.original.url} alt="gif"/>)}
            </div>
               
        
            
        )
    }

}

export default GifList;