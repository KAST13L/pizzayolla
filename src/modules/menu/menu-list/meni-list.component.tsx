import React from 'react';
import pizzaMenu from '@app/mocks/pizza.json'
import {MenuItem} from "@app/modules/menu/menu-item/menu-item.component";

export const MeniList = () => {
    return (
        <div>
            {pizzaMenu.map(({image, ...pizza}) => (
                <MenuItem {...pizza} imagePath={'/assets/pizza/' + image}/>
            ) )}
        </div>
    );
};

