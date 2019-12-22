import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import './category.style.scss';

const Catagories = ({ items, title }) => {
    return (
        <div className="category-preview">
            <h2 className="title">{ title }</h2>
            <div className="items">
                { items.map((item) => <CollectionItem key={ item.id } item={ item } />) }
            </div>
        </div>
    );
};

export default Catagories;