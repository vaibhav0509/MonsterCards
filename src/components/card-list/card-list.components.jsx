import React from 'react';
import  './card-list.styles.css';
import {Card} from '../card/card.components.jsx'

export const CardList = props =>{
   
return <div className = 'card-list'>
    {   
        props.monster.map(monster => <Card key = {monster.id} monster = {monster}/>) 
                                         // monster names are send to cards components 
    }
</div>;
}