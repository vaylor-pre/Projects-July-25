class Car {
    constructor() {}

    // function to return objects from JSON string of cars| id, name, price

      getCarObjects(cars) {
        return cars.map(function(car) {
            return {
                id: car.id,
                name: car.name,
                price: car.price
            };
        });
    }
    getCars() {
        let text = '{"cars":[' +
            '{"id":1,"name":"Toyota","price":30000},' +
            '{"id":2,"name":"Honda","price":25000},' +
            '{"id":3,"name":"Ford","price":20000}]}';

        const obj = JSON.parse(text);
        return obj.cars;
    }
}


// print the most expensive car from the list of cars
function ExpensiveCar() {
    const car = new Car();
    const cars = car.getCars();
    let mostExpCar = cars[0];

    for (let i = 1; i < cars.length; i++) {
        if (cars[i].price > mostExpCar.price) {
            mostExpCar = cars[i];
        }
    }
    console.log("Most Expensive Car: " + mostExpCar.name + ":" + mostExpCar.price);
}
// print the cheapest car from the list of cars

function CheapestCar() {
    const car = new Car();
    const cars = car.getCars();
    let cheapCar = cars[0];

    for (let i = 1; i < cars.length; i++) {
        if (cars[i].price < cheapCar.price) {
            cheapCar = cars[i];
        }
    }
    console.log("Cheapest Car: " + cheapestCar.name + " :" + cheapestCar.price);
}


ExpensiveCar();
CheapestCar();
