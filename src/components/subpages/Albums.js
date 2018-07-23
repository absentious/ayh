import React, { Component } from 'react'
import '../../App.css'
import './subpage.css'
import Albums_AlbumList from './Albums_AlbumList'
import listData from '../../albumData.json'

class Albums extends Component {
    constructor () {
      super() 
  
    }

    componentWillMount() {
        window.scrollTo(0, 0);
    }
    
    render () {
        console.log(listData);
        return (
            <div class='subcontent'>
                <p class='t_body2 bottomSpace'>i spend a lot of time listening to music of all genres. here is a collection of albums i enjoy. </p>
                
                {listData.sections.map(item => {
                    return(
                        <div class='bottomSpace'>
                            <div class='bottomSpace_half'>
                                <p>
                                    <span class='t_stitle nav_symbol m_noleft'>{item.label}</span>
                                </p>
                            </div>
                            <Albums_AlbumList albumList={item.albumList} />
                        </div>
                    )
                })}


            </div>

        )
    }
}

export { Albums };