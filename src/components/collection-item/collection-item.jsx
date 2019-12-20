import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { addItemToCartAction } from '../../redux/cart/cart-action';
import './collection-item.style.scss';
import { connect } from 'react-redux';


const CollectionItem = ({ item, addItem }) => {
    const { imageUrl, name, price } = item
    return (
        <div className="collection-item ">
            <div className="image"
                style={ { backgroundImage: `url(${imageUrl})` } } />
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            <CustomButton
                onClick={ () => addItem(item) }
                inverted>
                ADD TO CART
                </CustomButton>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItemToCartAction(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);