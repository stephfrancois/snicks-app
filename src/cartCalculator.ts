// const priceArray:number[] = [86.99, 125.75, 109.99];
// const subTotalPrice: number = priceArray.reduce((acc, currentValue)=> acc + currentValue,0);
// console.log(subTotalPrice)

type Cents = number;

const nikeDunkLowPrice:Cents = 8699;
const airJordanLowPrice: Cents = 60499;

const subTotalInCents: Cents = nikeDunkLowPrice + airJordanLowPrice;

const discountRate = 0.1;

function applyDiscount(amountInCents:Cents, rate:number):Cents{
    return Math.round(amountInCents * rate);
}

const discountInCents:Cents = applyDiscount(subTotalInCents, discountRate);
const discountSubTotalInCents:Cents = subTotalInCents -discountInCents;

const taxRate = 0.15;
const taxInCents:Cents = Math.round( discountSubTotalInCents * taxRate);

const totalInCents:Cents = discountSubTotalInCents + taxInCents;

function formatPrice(cents:Cents):string{
    return `${(cents/100).toFixed(2)} $`;
}

const subTotalPrice = formatPrice(subTotalInCents);
const discount = formatPrice(discountInCents);
const tax = formatPrice(taxInCents);
const finalPrice = formatPrice(totalInCents) ;

console.log(`
    Total achat: ${subTotalPrice}
    Remise: -${discount}
    Taxe: ${tax}
    Prix total: ${finalPrice}
    `);
