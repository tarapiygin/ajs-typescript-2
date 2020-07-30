import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    delete(id: number): void {
        const index: number = this._items.findIndex((byable) => byable.id === id);
        this._items.splice(index, 1);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    calculateTotalPrice(): number {
        let totalPrice: number = 0;
        this._items.forEach(byable => {
            totalPrice += byable.price;
        })
        return totalPrice;
    }

    calculateTotalDiscountedPrice(discount: number): number {
        const totalDiscountedPrice: number = this.calculateTotalPrice() - discount;
        return totalDiscountedPrice;
    }
}