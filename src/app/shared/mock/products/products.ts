import { ProductPrice } from "src/app/models/product-price";

const products: ProductPrice[] = [
    { 
        id: 'A',
        productCode: 'A', 
        unitPrice: 1.25, 
        volumeDiscount: { id: 'A', numberForDiscount: 3, volumePrice: 3.00 } 
    },
    { 
        id: 'B', 
        productCode: 'B', 
        unitPrice: 4.25
    },
    { 
        id: 'C', 
        productCode: 'C', 
        unitPrice: 1.00, 
        volumeDiscount: { id: 'C', numberForDiscount: 6, volumePrice: 5.00 } 
    },
    { 
        id: 'D', 
        productCode: 'D', 
        unitPrice: 0.75 
    } 
];

export default products;