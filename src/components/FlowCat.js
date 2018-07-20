import React, { Component } from 'react'
import '../App.css'
import './Flow.css'
import FlowItem from './FlowItem';

class FlowCat extends Component {
    constructor () {
        super()
    
        this.state = {
            itemList: []
        }
    }

    componentWillMount() {
        this.setState({ itemList: this.props.itemList });
    }

    render () {

        return (
            <div class='flow_holder'>
                {this.state.itemList.map(item => <FlowItem 
                        projectName={item.projectName} 
                        projectYear={item.projectYear}
                        projectCategory={item.projectCategory}
                        projectDescription={item.projectDescription}
                        projectLink={item.projectLink}
                        image={item.image}
                        imageSelector={item.imageSelector}
                        singlePage={item.singlePage}
                    />
                )}
            </div>
        )
    }
}

export default FlowCat;
