import React from 'react';
import MenuItem from '../menu-item/menu-item';
import { sectionsSelector } from '../../redux/directory/directory-selectors';
import './drictory.style.scss';
import { connect } from 'react-redux';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            { sections.map(({ id, ...otherSectionProps }) => {
                return <MenuItem
                    key={ id }
                    { ...otherSectionProps } />
            }) }
        </div>
    );
};

const mapStateToProps = (state) => ({
    sections: sectionsSelector(state)
})

export default connect(mapStateToProps)(Directory);