import React, { Component } from 'react';
import SHOP_DATA from './data/shop-data';
import CollectionPreview from '../../components/collection-preview/collection-preview';


class ShopPage extends Component {
    state = { collection: SHOP_DATA }
    render() {
        const { collection } = this.state
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
};

export default ShopPage;