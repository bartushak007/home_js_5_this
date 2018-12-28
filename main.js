"use strict"
var obj = {
  name: 'Ronny'
}
obj.getName = getName;
console.log(obj.getName());
// getName(); /*error with use strict. Better use getName.call(obj)*/
var numObj = {
  number: 2
};
console.log(getDoubledTrippled());

var objCar = new Car('bmw', '2019', '9', 'black');
var objSecondCar = new Car('mercedesBenz', '2019', '99', 'silver');
var objThirdCar = new Car('audi', '2018', '17799', 'red');

objCar.go();
objCar.stop();
objCar.startEngine();
objCar.addFuel();
objCar.startEngine();
objCar.go();
objCar.stop();

objSecondCar.startEngine();
objCar.addFuel();
objCar.startEngine();
objSecondCar.go();
objSecondCar.stop();
var city = new City('Sydney', 4840600, 'Australia');
var city2 = new City('Kyiv', 2887974, 'Ukraine');
var city3 = new City('Lviv', 727968, 'Ukraine');

console.log(city.getPopulation());
city.addCitizen();
city.addCitizen();
city.addCitizen();
console.log(city.getPopulation());
console.log(city.getCityName());

console.log(city2.getPopulation());
city2.addCitizen();
city2.addCitizen();
city2.addCitizen();
console.log(city2.getPopulation());
console.log(city2.getCityName());

console.log(city3.getPopulation());
city3.addCitizen();
city3.addCitizen();
city3.addCitizen();
console.log(city.getPopulation());
console.log(city3.getCityName());

var user = {
  login: 'Andrew',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },

  checkPassword: function() {
    ask('Your password?', this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
}

user.checkPassword();

var user2 = user;
user = null;
user2.checkPassword();


var secondUser = {
  login: 'Santa',
  password: '12345',

  loginOk: function() {
    console.log(this.login + ' - login success');
  },

  loginFail: function() {
    console.log(this.login + ' - login failed');
  },

  checkPassword: function() {
    var self = this;
    ask('Your password?', this.password, x, y);
   function x(){ return self.loginOk()};
   function y(){ return self.loginFail()};
  }
}

 secondUser.checkPassword();

var user3 = secondUser;
 secondUser = null;
user3.checkPassword();

function getName() {
  return this.name;
}

function getDoubled() {
  return this.number = this.number * 2;
}

function getDoubledTrippled(){
  return getDoubled.call(numObj) * 3;
}

function Car(brand, year, run, color) {
  this.brand = brand;
  this.year = year;
  this.run = run;
  this.color = color;
  this.engine = false;
  this.traffic = false;
  this.fuel = false;

  this.startEngine = function() {
    if(this.fuel === true) {
      this.engine = true;
    } else {
      console.log('Нужно заправить автомобиль');
    }
  }

  this.go = function() {
    if(this.engine === true) {
      console.log('Машина ' + this.brand + ' марки ' + this.color + ' цвета поехала!');
      this.traffic = true;
    } else {
      console.log('Включите вначале зажигание!');
    }
  };

  this.stop = function() {
    if(this.engine === true) {
      console.log('Машинка остановилась!');
      this.engine = false;
      this.traffic = false;
    } else {
      console.log('Зажигание и так выключено');
    }
  };

  this.addFuel = function() {
    this.fuel = true;
  };
}
function City(name, population, country) {
  this.name = name;
  this.population = population;
  this.country = country;

  this.getPopulation = function() {
    return this.population;
  };

  this.getCityName = function() {
    return this.name;
  };

  this.addCitizen = function() {
    return this.population++;
  };
}

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result === answer) {
    ok();
  } else {
    fail();
  }
}

;(function() {
  var arr = [
    { image: 'car.jpg', alt: 'Car' },
    { image: 'apple.jpg', alt: 'Apple' }
  ];
  var slide = 0;

  function previous() {
    if (slide === 0) {
      slide = arr.length - 1;
    } else {
      slide--;
    }

    return arr[slide];
  }

  function next() {
    if (slide === arr.length - 1) {
      slide = 0;
    } else {
      slide++;
    }

    return arr[slide];
  }

  function remove() {
    slide = switchTo(1);
    var a = arr.splice(slide, 1);
    console.log('element ' + slide + ' was deleted');
    if (slide > arr.length - 1) {
      slide = arr.length - 1;
    }

    return arr[slide];
  }

  function showInformation() {
    console.log('This is ' + arr[slide].image + ' with alt ' + arr[slide].alt);
  }

  function AddObj(a, b) {
    function Obj(a, b) {
      this.image = a;
      this.alt = b;
    }
    slide = switchTo(2);
    arr.splice(slide, 0, new Obj(a, b));
  }

  function switchTo(check) {
    do {
      if(check === 1){
        slide = +prompt('Which one do you want to remove?', 0);
      }else if(check === 2){
        slide = +prompt('Which place do you want to add a slide to?', 0);
      } else {
        slide = +prompt('Enter number of slide', 0);
      }
      
    } while (slide && (slide > arr.length - 1 || !(!isNaN(parseFloat(slide)) && isFinite(slide))))
    console.log(slide);

    return slide;
  }

  AddObj('a', 'b');
  next();
  switchTo();
  remove();
  console.log('curent slide is ' + slide);
  console.log(previous());
  showInformation();
  console.log(next());
  showInformation();
  console.log(arr);
})();
