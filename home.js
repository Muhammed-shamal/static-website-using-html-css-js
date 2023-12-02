 //checking products
 filterSelection("all");

 function filterSelection(c) {
   var x, i;
   x = document.getElementsByClassName("col-sm-4");

   for (i = 0; i < x.length; i++) {
     removeClass(x[i], "visible");
     if (x[i].className.indexOf(c) > -1) addClass(x[i], "visible");
   }
 }

  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
    }
  }

 function addClass(element, name) {
   var i, arr1, arr2;
   arr1 = element.className.split(" ");
   arr2 = name.split(" ");
   for (i = 0; i < arr2.length; i++) {
     while (arr1.indexOf(arr2[i]) > -1) {
       arr1.splice(arr1.indexOf(arr2[i]), 1);
     }
   }
   element.className = arr1.join(" ");
 }

 var button = document.querySelector(".filter-lists");

  var btn = button.getElementsByClassName("filter");

 for (i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", function (event) {
     event.preventDefault();
     var current = document.getElementsByClassName("active");
     current[0].className = current[0].className.replace(" active", "");
     this.className += " active";
   });
 }

var button = document.querySelector(".fileter-list");
var btn = document.getElementsByClassName("filter");

for (i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    e.preventDefault();
    var target = document.getElementsByClassName("active");
    target[0].className = target[0].className.replace(" active", "");
    this.className += " active";
  });
}


//button clicking effect
var counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const updateFuntion = () => {
    var target = +counter.getAttribute("data-target");
    var count = +counter.innerHTML;

    const increament = Math.trunc((target - count) / 100);
    console.log(increament);

    if (count < target && increament > 0) {
      counter.innerHTML = count + increament;

      setTimeout(updateFuntion, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updateFuntion();
});


//navbar settings for highlight pages
const current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';