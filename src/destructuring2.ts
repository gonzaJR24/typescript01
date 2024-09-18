interface Product{
    description:string, 
    price:number
}

const phone:Product={
    description:"phone",
    price:150
}

const tablet:Product={
    description:"phone",
    price:150
}

const shoppingCart:Product[]=[phone, tablet];
const tax=0.15

interface TaxParameters{
    product:Product[],
    tax:number
}

function taxCalculation(params:TaxParameters):number[]{
    let total=0;
    params.product.forEach(product => {
        total+=product.price;
    });

    return [total, total*tax];    
}

const result=taxCalculation({
    product:shoppingCart,
    tax
})

console.log(result);
