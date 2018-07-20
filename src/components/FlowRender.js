import React, { Component } from 'react'
import '../App.css'
import './Flow.css'
import FlowCat from './FlowCat';

class FlowRender extends Component {
    constructor () {
        super()
    
        this.state = {
            flowData: []
        }
    }

    componentWillMount() {
        this.setState({ flowData: this.props.flowData });
    }

    renderSubtitle(label) {
        if(label) {
          return <p class='title_m t_stitle'>{label}</p>
        }
        return;
    }

    render () {

        return (
            <div>
                {this.state.flowData.sections.map(cat => {
                    return(
                    <div class='s_body_row'>
                    {this.renderSubtitle(cat.label)}
                        <div class='s_row_title'>
                        <p class='t_vertical t_stitle'>{cat.label}</p>
                        </div>
                        <FlowCat itemList={cat.items} />
                    </div>
                    )
                })}
            </div>
        )
    }
}

export default FlowRender;
