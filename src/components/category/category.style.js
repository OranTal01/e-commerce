import styled from 'styled-components';
import CollectionItem from '../collection-item/collection-item';
export const CategoryPreview = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CategoryTitle = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;
`;

export const CategoryItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const CollectionItemPreview = styled(CollectionItem)`
    margin-bottom: 30px;
`;