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
                    <div class='s_header_title'><p class='t_stitle'>austin y hou</p></div>
                    <div class='s_header_links'><p class='t_body2 t_lnk'><a href='mailto:austhou@gmail.com'>email</a></p></div>
                    <div class='s_header_links'><p class='t_body2 t_lnk'><a href='https://www.figma.com/file/IOXRfQjLTeEQ08ZwIGRLDY5W/Resume---Austin-Y-Hou'>resume</a></p></div>
                    <div class='header_social_wrapper'>
                        {this.state.platforms.map(platform => {
                            return (
                                <a href={platform.link}>
                                    <div class='header_social_item_container'>
                                        <div class='header_social_item'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                                <path d={`${platform.svg}`} />
                                            </svg>
                                        </div>
                                        <div class='header_social_item_darken'></div>
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
                <div class='header_m'>
                    <div class='header_m_link_spc'><p class='t_body2 t_lnk'><a href='mailto:austhou@gmail.com'>email</a></p></div>
                    <div><p class='t_body2 t_lnk'><a href='mailto:austhou@gmail.com'>resume</a></p></div>
                </div>
            </div>
        )
    }
}

export default PageHeader;
