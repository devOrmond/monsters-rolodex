//Import the react MODULE from the react lib
import React from 'react';
import './card-list.styles.css'
import {Card} from '../card/card.component';

// export const CardList = (props) => (
//     <div className='card-list'>
//     {props.monsters.map(monster => 
//         <Card key={monster.id} monster={monster}/>
//     )}
//     </div>
// );

const CardList = (props) => (
    <div className='card-list'>
    {props.monsters.map(monster => 
        <Card key={monster.id} monster={monster}/>
    )}
    </div>
);

export default CardList;

//export const CardList = (props) => {  

//console.log(props);    
//return <div className='card-list'>{props.children}</div>

//This returns the information in between our Component when 
//it gets called, ie <CardList>
//return <div>props.children</div>

// };