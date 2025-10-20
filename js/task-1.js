

const customer = {
    username: "Mango",
    balance: 24000,
    discount: 0.1,
    orders: ["Burger", "Pizza", "Salad"],
    // Change code below this line
    getBalance() {
            return this.balance;
        },
    getDiscount() {
        return this.discount;
    },
    setDiscount(value) {
        let setValue = value > 1 ? value / 100 : value;
        this.discount = setValue;
    },
    getOrders() {
        return this.orders;
    },
    addOrder(cost, order) {
        const discountCost = cost * (1- this.discount)
        this.balance -= discountCost;
        this.orders.push(order);
    },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
