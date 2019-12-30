import React from 'react';
import MenuItem from '../menu-item/menu-item';
import { sectionsSelector } from '../../redux/directory/directory-selectors';
import { connect } from 'react-redux';
import { DirectoryMenu } from './drictory.style';

const Directory = ({ sections }) => {
    return (
        <DirectoryMenu>
            { sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem
                    key={ id }
                    { ...otherSectionProps } />
            }) }
        </DirectoryMenu>
    );
};

const mapStateToProps = (state) => ({
    sections: sectionsSelector(state)
})

export default connect(mapStateToProps)(Directory);