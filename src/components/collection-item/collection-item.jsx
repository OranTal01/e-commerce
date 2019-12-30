import React from 'react';
import { addItemToCartAction } from '../../redux/cart/cart-action';
import { connect } from 'react-redux';
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, AddButton, NameContainer, PriceContainer } from './collection-item.style';


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;

    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={ imageUrl } />
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>{ price }</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={ () => addItem(item) } inverted>
                Add to cart
        </AddButton>
        </CollectionItemContainer>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToCartAction(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);