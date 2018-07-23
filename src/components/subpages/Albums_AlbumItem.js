import React, { Component } from 'react'
import '../../App.css'
import './subpage.css'
import axios from 'axios'

class Albums_AlbumItem extends Component {
    constructor () {
        super()
    
        this.state = {
            apiKey: '22ffcc45c725438eaf6045d3cf3476d5',  
            cover: '',
            artist: '',
            album: '',
            genre: '',
            link: ''
        }
    }

    componentWillMount() {
        this.setState({ 
            artist: this.props.artistName, 
            album: this.props.albumName, 
            genre: this.props.genre, 
            link: this.props.link 
        })
    }
    
    componentDidMount() {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${this.state.apiKey}&artist=${this.state.artist}&album=${this.state.album}&format=json`, {transformResponse: []})
            .then(response => {
                var responseCoverObj = response.data.album.image[3]
                this.setState({ cover: responseCoverObj['#text'], artist: response.data.album.artist, album: response.data.album.name }) 
            })
    }

    render () {
        return (
            <div class='aspectRatioSizer music_item_container'>
                <svg viewBox="0 0 1 1"></svg>
                <div class='flow_item_relative'>
                    <div class='music_item_absolute'>
                        <img class='music_img' src={this.state.cover} />
                    </div>
                    <a href={this.state.link}>
                        <div class='music_box_darken'></div>
                        <div class='flow_box_text'>
                            <p class='t_body3'>{this.state.album}</p>
                            <p class='t_body5'>{this.state.artist}</p>
                            <p class='t_body5'>[{this.state.genre}]</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default Albums_AlbumItem;
