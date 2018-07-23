import React, { Component } from 'react'
import '../../App.css'
import './subpage.css'
import Albums_AlbumItem from './Albums_AlbumItem'
//import listData from './customData.json'

class Albums_AlbumList extends Component {
    constructor () {
        super()
    
        this.state = {
            albumList: []
        }
    }

    componentWillMount() {
        var albumListArray = this.props.albumList
        for (let i = albumListArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [albumListArray[i], albumListArray[j]] = [albumListArray[j], albumListArray[i]]; // eslint-disable-line no-param-reassign
        }
        this.setState({ albumList: albumListArray })
    }

    render () {

        return (
            <div class='musicHolder'>
                {this.state.albumList.map(item => <Albums_AlbumItem 
                        albumName={item.albumName} 
                        artistName={item.artistName}
                        genre={item.genre}
                        link={item.link}
                    />
                )}
            </div>
        )
    }
}

export default Albums_AlbumList 
