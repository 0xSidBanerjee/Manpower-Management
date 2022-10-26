import React from 'react';
import './ListItem.css';
import MoreVertSharp from '@mui/icons-material/MoreVertSharp';

function ListItem(props) {
    const deleteItem = key => {
        const newList = props.itemList.filter(itemObj => {
            return itemObj.key != key;
        });
        props.updateItemList(newList);
    }
    return (
        <div>
            {props.itemList.map(itemObj => {
                return (
                    <div className='item'>
                        <div className='item-left'>
                        <input type="radio"/>
                        <p>{itemObj.item}</p>
                        </div>
                        <button className='delete-button' onClick={() => deleteItem(itemObj.key)}><MoreVertSharp/></button>
                    </div>
                );
            })}
        </div>
    )
}

export default ListItem