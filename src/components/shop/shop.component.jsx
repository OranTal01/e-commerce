import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview';
import { shopCollectionSelector } from '../../redux/shop/shop-selectors';
import { connect } from 'react-redux';

const ShopCollection = ({ collection }) => {
    return (
        <div>
            { collection.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview
                    key={ id }
                    { ...otherCollectionProps } />
            }) }
        </div>
    );
};


const mapStateToProps = (state) => ({
    collection: shopCollectionSelector(state)
})
export default connect(mapStateToProps)(ShopCollection);