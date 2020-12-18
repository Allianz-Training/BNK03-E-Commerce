import { Item } from "../product/Item";

export class ToString {
  private constructor() {}

  public static stockItemToString(stockItem: Map<number, Item>): string {
    let stockItemString: string = "{";
    for (let entry of stockItem) {
      stockItemString += `(id: ${entry[0]}, ${entry[1]}),\n`;
    }
    stockItemString = `${stockItemString.slice(0, -2)}}`;
    return stockItemString;
  }

  public static cartItemToString(cart: Map<string, number>): string {
    let cartString: string = "{";
    for (let entry of cart) {
      cartString += `(name: ${entry[0]}, ${entry[1]}),\n`;
    }
    cartString = `${cartString.slice(0, -2)}}`;
    return cartString;
  }
}
