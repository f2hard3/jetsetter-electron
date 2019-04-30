import React from 'react';

const Item = ({ packed, value, onCheckOff, onDelete }) => {
    return (
        <article className="Item">
            <label>
                <input type="checkbox" checked={packed} onChange={onCheckOff} />
                {value}
            </label>
            <button className="delete" onClick={onDelete}>
                ❌
            </button>
        </article>
    );
};

export default Item;
