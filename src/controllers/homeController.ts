import { Request, Response } from 'express';

import { Product } from '../models/Product';
export const home = (req: Request, res: Response) => {
    let age: number = 22;
    let showOld: boolean = false;
    if (age > 18) {
        showOld = true;
    }


    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home',{
        name: "Patrick",
        showOld,
        list,
        products: list,
        expensives: expensiveList,
        frasesDoDia: [
            'Alguma coisa',
            'outra frase'
        ]
    });
}