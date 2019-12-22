import React from 'react';
import { connect } from 'react-redux';
import { shopCollectionSelector } from '../../redux/shop/shop-selectors';
import Catagories from '../../components/category/category.component';
import './category-page.style.scss';


const CategoryPage = ({ match, shopData }) => {
    return (
        <div className="category">
            { shopData.filter((category) => category.routeName === match.params.categoryId).map((categoryItems) => <Catagories key={ categoryItems.id } title={ categoryItems.title } items={ categoryItems.items } />
            ) }
        </div>
    );
};

const mapStateToProps = (state) => ({
    shopData: shopCollectionSelector(state)
})
export default connect(mapStateToProps)(CategoryPage);