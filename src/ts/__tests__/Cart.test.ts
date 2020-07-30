import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('the number of card elements must be 1', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.items.length).toBe(1);
});

test('card should be empty', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.delete(1001);
  expect(cart.items.length).toBe(0);
});

test('total cost must be 4000', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.calculateTotalPrice()).toBe(4000);
});

test('total discounted price must be 3000', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  expect(cart.calculateTotalDiscountedPrice(1000)).toBe(3000);
});