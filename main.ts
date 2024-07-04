// 1-prinsip
// 1-prinsip a
class BankAccount {
    private balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}
let account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());
account.withdraw(300);
console.log(account.getBalance());

// 1-prinsip b
class Employee {

    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    getName(): string {
        return this.name;
    }

    setSalary(newSalary: number): void {
        if (newSalary > 0) {
            this.salary = newSalary;
        }
    }

    getSalary(): number {
        return this.salary;
    }
}

let employee = new Employee("Alice", 50000);
console.log(employee.getName());
employee.setSalary(55000);
console.log(employee.getSalary());

// 2-prinsip a
class Car {
    private model: string;
    private year: number;

    constructor(model: string, year: number) {
        this.model = model;
        this.year = year;
    }

    getModel(): string {
        return this.model;
    }

    setYear(year: number): void {
        if (year > 2000) {
            this.year = year;
        }
    }

    getYear(): number {
        return this.year;
    }
}

let car = new Car("Toyota", 2010);
console.log(car.getModel());
car.setYear(2015);
console.log(car.getYear());
