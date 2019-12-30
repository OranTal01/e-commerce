import React from 'react';
import CollectionItem from '../collection-item/collection-item';
import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewRow } from './collection-preview.style';

const CollectionPreview = ({ title, items }) => {
    return (
        <CollectionPreviewContainer>
            <CollectionPreviewTitle>
                { title.toUpperCase() }
            </CollectionPreviewTitle>
            <CollectionPreviewRow>
                { items.filter((item, index) => index < 4)
                    .map((item) =>
                        <CollectionItem key={ item.id } item={ item } />
                    ) }
            </CollectionPreviewRow>
        </CollectionPreviewContainer>
    );
};

export default CollectionPreview;