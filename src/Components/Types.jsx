import React from 'react'

const Types = (props) => {
    return (
        <div>
                {
                    props.Element.map(item=>
                        <span key={item.type.name} className="badge badge-info m-1">{item.type.name}</span>
                    )
                }
        </div>
    )
}

export default Types
