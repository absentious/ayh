import React, { Component } from 'react'
import '../../App.css'
import './subpage.css'

class Template extends Component {
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
                <p class='t_body5'>description</p>
            </div>
        )
    }
}

export { Template };
