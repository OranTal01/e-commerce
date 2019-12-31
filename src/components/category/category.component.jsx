import React from 'react';
import { CategoryPreview, CategoryTitle, CategoryItems, CollectionItemPreview } from './category.style';

const Catagories = ({ items, title }) => {
    return (
        <CategoryPreview>
            <CategoryTitle>{ title }</CategoryTitle>
            <CategoryItems>
                { items.map((item) => <CollectionItemPreview key={ item.id } item={ item } />) }
            </CategoryItems>
        </CategoryPreview>
    );
};

export default Catagories;