import React from 'react';
import SHOP_DATA from './shop.data (1)';
import CollectionPreview from '../../components/preview-collection-component/preview-collection.component';
class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {
                    collections.map(({ id, ...rest }) => (
                    <CollectionPreview key={id} {...rest} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage