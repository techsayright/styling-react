import React from 'react'
import './css/DataShower.css'

export default function DataShower(props) {
    return (
        <div className="item-handler" id={props.id} title="Tap to Remove It" onClick={(e)=>{props.onClicks(e)}}>
            {props.data.activity}
        </div>
    )
}
