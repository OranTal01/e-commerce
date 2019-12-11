import React, { Component } from 'react';
import SHOP_DATA from './data/shop-data';
import PreviewCollection from '../../components/collection-preview/collection-preview';


class ShopPage extends Component {
    state = { collection: SHOP_DATA }
    render() {
        const { collection } = this.state
        return (
            <div>
                { collection.map(({ id, ...otherCollectionProps }) => {
                    return <PreviewCollection
                        key={ id }
                        { ...otherCollectionProps } />
                }) }
            </div>
        );
    };
};

export default ShopPage;