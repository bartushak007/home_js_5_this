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
      if(check === 1) {
        slide = +prompt('Which one do you want to remove?', 0);
      } else if(check === 2) {
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
