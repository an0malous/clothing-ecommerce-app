import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';
const ShopPage = ({ match }) => {
    console.log(match)
    return (
       
    <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
    );
    }

export default ShopPage;