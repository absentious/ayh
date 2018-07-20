import React, { Component } from 'react'
import '../App.css'
import './Flow.css'

class FlowItem extends Component {
    constructor () {
        super()
    
        this.state = {
            projectName: "",
            projectYear: "",
            projectCategory: "",
            projectDescription: "",
            projectLink: "",
            image: "",
            imageSelector: ""
        }
    }

    componentWillMount() {
        this.setState({ 
            projectName: this.props.projectName, 
            projectYear: this.props.projectYear,
            projectCategory: this.props.projectCategory,
            projectDescription: this.props.projectDescription,
            projectLink: this.props.projectLink,
            image: `./images/thumbs/${this.props.image}`,
            imageSelector: this.props.imageSelector
         })
         console.log(this.state.imageSelector);
    }

    render () {

        return (
            <div class='aspectRatioSizer flow_item_container'>
                <svg viewBox="0 0 21 9"></svg>
                <div class={`flow_item_relative ${this.state.imageSelector}`}>
                    <a href={this.state.projectLink}>
                        <div class='flow_box_darken'></div>
                        <div class='flow_box_text'>
                            <p class='t_body3'>{this.state.projectName}</p>
                            <p class='t_body5'>{this.state.projectDescription}</p>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}

export default FlowItem;
