import React from 'react'
import Types from './Types'

const Card = (props) => {
    return (
        <div className="container ">
            <div className="row d-flex justify-content-center">
                {
                    props.Pokemon.map(item=>(
                        <div key={item.id} className="card border border-dark rounded m-1"  style={{width:'180px', backgroundColor: '#f5f5dc'}}>
                            <a 
                            href={`https://bulbapedia.bulbagarden.net/wiki/${item.name}_(Pok%C3%A9mon)`} 
                            className="stretched-link text-reset"
                            data-toggle="tooltip" data-placement="bottom" title="More info at bulbapedia.com"
                            >
                              <img className="card-img-top" style={{backgroundColor: '#99e699'}} src={item.sprites.front_default} alt="N/A"/>
                                <div className="card-body "> 
                                    <p className="card-title badge badge-dark">#{item.id}</p>
                                    <h4 className="text-capitalize text-break">{item.name}</h4>
                                    <Types className="card-text" Element={item.types}/>
                                </div>

                            </a>
                        </div>
                    ))
                }
                

            </div>
        </div>
    )
                    
}

export default Card
