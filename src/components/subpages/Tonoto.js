import React, { Component } from 'react'
import '../../App.css'
import './subpage.css'

class Tonoto extends Component {
    constructor () {
        super()
    
        this.state = {
            itemList: []
        }
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }

    render () {

        return (
            <div class='subcontent'>
                <img class='imglarge' src='http://ayh.io/tonoto_deprecated/s_dt_2.png' />
                <p class='paragraph t_body5'>using processing, I created a generative audiovisual piece that draws circles from music. it simulates brush strokes with lines of varying width and color. the line dynamics are calculated from a number of features of an audio input, which are derived from statistics of the fft sampled at 60hz.</p>
                <div class='img_flow'>
                    <img class='imgmed padr' src='http://ayh.io/tonoto_deprecated/s_hp_2.png' />
                    <img class='imgmed padr' src='http://ayh.io/tonoto_deprecated/s_hm_2.png' />
                </div>
                <p class='paragraph t_body5'>currently working on a live piece in which the parameters are determined from an akai mpc midi controller. </p>
                <div class='bottomSpace' />
            </div>
        )
    }
}

export { Tonoto };
