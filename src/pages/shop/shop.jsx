import React from 'react';
import ShopCollection from '../../components/shop/shop.component';
import CategoryPage from '../category/category-page';
import { Route } from 'react-router-dom';
import './shop.style.scss';

const ShopPage = ({ match }) => {
    return (
        <div>
            <Route exact path={ `${match.path}` } component={ ShopCollection } />
            <Route path={ `${match.path}/:categoryId` } component={ CategoryPage } />
        </div>
    );
};

export default ShopPage;