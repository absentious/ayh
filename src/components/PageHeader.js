import React, { Component } from 'react'
import '../App.css'
import './PageHeader.css'

class PageHeader extends Component {
    constructor () {
        super()
    
        this.state = {
            platforms: []
        }
    }

    componentWillMount() {
        this.setState({ platforms: this.props.platformData.platforms });
    }

    render () {

        return (
            <div>
                <div class='s_header'>
                    <div class='s_header_subtitle'><p class='t_stitle'>austin y hou</p></div>
                    <p class='t_body2 nav_symbol'>/</p>
                    <div class='header_social_wrapper'>
                        {this.state.platforms.map(platform => {
                            return (
                                <a href={platform.link}>
                                    <div class='header_social_item_container'>
                                        <div class='header_social_item'>
                                            <div class='nav_hide_m'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                    <path d={`${platform.svg}`} />
                                                </svg>
                                            </div>
                                            <div class='nav_show_m'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                                    <path d={`${platform.svg}`} />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class='header_social_item_darken'></div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div class='header_m'>
                </div>
            </div>
        )
    }
}

export default PageHeader;
