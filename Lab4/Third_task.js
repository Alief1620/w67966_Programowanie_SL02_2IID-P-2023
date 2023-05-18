const car = {
  brand: "Toyota",
  productionDate: 2003,
  color: "white",
  speed: 220,
  breakUsage: function () {
    this.speed -= 5;
  },
  carInfo: function () {
    console.log(
      `Marka: ${this.brand}, Rok produkcji: ${this.productionDate}, Kolor: ${this.color}, Prędkość: ${this.speed}`
    );
  },
};

car.carInfo();
car.breakUsage();
car.carInfo();
