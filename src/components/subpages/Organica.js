import React, { Component } from 'react'
import '../../App.css'
import './subpage.css'

class Organica extends Component {
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
                <div class='padr'><video controls="controls" class='organica_mov' name="organica 1" src="./video/organica/organica.mov" /></div>
                <video controls="controls" class='organica_mov' name="organica 1" src="./video/organica/laspalmas.mov" />
                <div class='bottomSpace' />
            </div>
        )
    }
}

export { Organica };
