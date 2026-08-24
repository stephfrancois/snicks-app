// const priceArray:number[] = [86.99, 125.75, 109.99];
// const subTotalPrice: number = priceArray.reduce((acc, currentValue)=> acc + currentValue,0);
// console.log(subTotalPrice)
var nikeDunkLowPrice = 8699;
var airJordanLowPrice = 60499;
var subTotalInCents = nikeDunkLowPrice + airJordanLowPrice;
var discountRate = 0.1;
function applyDiscount(amountInCents, percentage) {
    return Math.round(amountInCents * percentage);
}
var discountInCents = applyDiscount(subTotalInCents, discountRate);
var discountSubTotalInCents = subTotalInCents - discountInCents;
var taxRate = 0.15;
var taxInCents = Math.round(discountSubTotalInCents * taxRate);
var totalInCents = subTotalInCents - discountInCents + taxInCents;
function formatPrice(cents) {
    return "".concat((cents / 100).toFixed(2), " $");
}
var subTotalPrice = formatPrice(subTotalInCents);
var discount = formatPrice(discountInCents);
var tax = formatPrice(taxInCents);
var finalPrice = formatPrice(totalInCents);
console.log("\n    Total achat: ".concat(subTotalPrice, "\n    Remise: -").concat(discount, "\n    Taxe: ").concat(tax, "\n    Prix total: ").concat(finalPrice, "\n    "));
