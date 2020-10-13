import React from 'react';
import Card from './Card';
import pokespin from '../images/pokespin.gif';

const FirstGen = (props) => {
    const [gen, setGen] = React.useState([]);
    const [pokemon, setPokemon] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const pokeArray = [];

    React.useEffect(()=>{
        setLoading(true);
         fetch(props.Gen)
            .then(response=>response.json())
            .then (data=> {
                setGen(data.results);
                data.results.map((item)=>fetch(item.url)
                .then((response)=>response.json())
                .then (d=>{pokeArray.push(d)
                    if(pokeArray.length>=data.results.length){
                        pokeArray.sort((a, b)=>{
                           if (a.id < b.id){
                               return -1
                           }else if(a.id > b.id){
                                return 1
                           }
                           return 0;
                        })
                        setPokemon(pokeArray);
                        setLoading(false);
                    }
                }))
                
            });
            
    },[props.Gen])
    

    return (
        <div>
        
           { 
                loading ? (
                    <div className="container text-center">
                        <div className=" row m-5 justify-content-center">
                        <img src={pokespin} style={{height: "120px" , width:"120px"}} alt="loading"/> 
                        <h1 className=" row m-5 justify-content-center col-6"> Loading...</h1>
                        <img src={pokespin}  style={{height: "120px" , width:"120px"}}  alt="loading"/>
                        </div>
                    </div>
                ):(

                  <Card Pokemon={pokemon}/>

                )
            
            }
            
        </div>
    )
};

export default  FirstGen
