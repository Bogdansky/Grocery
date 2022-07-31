import { VolumeDiscount } from "./volume-discount";

export interface ProductPrice {
    id: string,
    productCode: string,
    unitPrice: number,
    volumeDiscount?: VolumeDiscount
}