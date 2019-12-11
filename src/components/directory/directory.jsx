import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item';
import DIRECTORY_DATA from './data/directory.data';
import './drictory.style.scss';

class Directory extends Component {
    state = {
        sections: DIRECTORY_DATA
    };
    render() {
        return (
            <div className="directory-menu">
                { this.state.sections.map(({ id, ...otherSectionProps }) => {
                    return <MenuItem
                        key={ id }
                        { ...otherSectionProps } />
                }) }
            </div>
        );
    };
};

export default Directory