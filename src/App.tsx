import React from 'react';
import {Header} from "@app/common/components/Header/header.component";
import {MeniList} from "@app/modules/menu/menu-list/meni-list.component";
import pizzas from "@app/mocks/pizza.json"
import {Footer} from "@app/common/components/Footer/footer.component";

export const App = () => {
    return (
        <>
            <Header/>
            <div className="mx-12 mb-24">
                <MeniList items={pizzas}/>
            </div>
            <Footer/>
        </>
    );
};

