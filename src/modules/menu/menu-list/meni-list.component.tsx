import React, {FC} from 'react';
import {MenuItem} from "@app/modules/menu/menu-item/menu-item.component";
import {PizzaType} from "@app/modules/menu/types/pizza";

interface MeniListType {
    items: PizzaType[]
}

export const MeniList: FC<MeniListType> = ({items}) => {
    return (
        <div className=" flex flex-wrap gap-10">
            {items.map(({image, ...pizza}) => (
                <MenuItem {...pizza} imagePath={"assets/pizza/" + image} key={`pizza-${pizza.id}`}/>
            ) )}
        </div>
    );
};
