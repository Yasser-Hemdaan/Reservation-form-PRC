// on page download content
window.addEventListener("DOMContentLoaded", () => {
  // definitions of inputs, lists and list items
  let destinationsInputFeild = document.querySelector(".destinations");
  let destinationsList = document.querySelector(".destinationsList");
  let destinationsListItems = document.querySelectorAll(".destinationsList li");

  let hotelsInputFeild = document.querySelector(".hotels");
  let hotelsList = document.querySelector(".hotelsList");
  let hotelsListItems = document.querySelectorAll(".hotelsList li");

  let travellersInputFeild = document.querySelector(".travellers");
  let travellersList = document.querySelector(".travellersList");
  let travellersListItems = document.querySelectorAll(".travellersList li");

  let nationalitiesInputFeild = document.querySelector(".nationalities");
  let nationalitiesList = document.querySelector(".nationalitiesList");
  let nationalitiesListItems = document.querySelectorAll(
    ".nationalitiesList li"
  );

  let starsInputFeild = document.querySelector(".stars");

  let countriesInputFeild = document.querySelector(".countries");
  let countriesList = document.querySelector(".countriesList");
  let countriesListItems = document.querySelectorAll(".countriesList li");

  let citiesInputFeild = document.querySelector(".cities");
  let citiesList = document.querySelector(".citiesList");
  let citiesListItems = document.querySelectorAll(".citiesList li");

  let currenciesInputFeild = document.querySelector(".currencies");
  let currenciesList = document.querySelector(".currenciesList");
  let currenciesListItems = document.querySelectorAll(".currenciesList li");

  let stars = document.querySelectorAll(".fa-star");

  let nextStars = [];
  let previousStars = [];

  let done = document.querySelector(".done");

  // Destinations Function Start

  function destinationsCompare() {
    if (destinationsInputFeild.value.length > 0) {
      destinationsList.classList.add("active");
      let destinationsValue = destinationsInputFeild.value;
      if (destinationsValue) {
        for (let i = 0; i < destinationsListItems.length; i++) {
          if (destinationsListItems[i].innerHTML.includes(destinationsValue)) {
            destinationsListItems[i].style.display = "block";
          } else {
            destinationsListItems[i].style.display = "none";
          }
        }
      }
      destinationsListItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          destinationsInputFeild.value = e.target.innerHTML;
          destinationsInputFeild.classList.add("capitalLetter");
          destinationsList.classList.remove("active");
          hotelsCompare();
        });
      });
    } else {
      destinationsList.classList.remove("active");
    }
  }

  // Hotels Function Start

  function hotelsCompare() {
    hotelsInputFeild.focus();
    hotelsList.classList.add("active");

    hotelsListItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        hotelsInputFeild.value = e.target.innerHTML;
        hotelsInputFeild.classList.add("capitalLetter");
        hotelsList.classList.remove("active");
        travellersCompare();
      });
    });
  }

  // Travellers Function Start

  function travellersCompare() {
    travellersInputFeild.focus();
    travellersList.classList.add("active");
    travellersListItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        travellersInputFeild.value = e.target.innerHTML;
        travellersInputFeild.classList.add("capitalLetter");
        travellersList.classList.remove("active");
        nationalitiesCompare();
      });
    });
  }

  // Travellers Function Start

  function nationalitiesCompare() {
    let flags = nationalitiesListItems;
    flags.forEach((flag) => {
      flag.style.backgroundImage = `url(assets/images/${flag.innerHTML}.png)`;
      nationalities.style.backgroundImage = `url(assets/images/${flag.innerHTML}.png)`;
    });

    if (nationalitiesInputFeild.value.length > 0) {
      nationalitiesList.classList.add("active");
      let nationalitiesValue = nationalitiesInputFeild.value;
      if (nationalitiesValue) {
        for (let i = 0; i < nationalitiesListItems.length; i++) {
          if (
            nationalitiesListItems[i].innerHTML.includes(nationalitiesValue)
          ) {
            nationalitiesListItems[i].style.display = "block";
          } else {
            nationalitiesListItems[i].style.display = "none";
          }
        }
      }
      nationalitiesListItems.forEach((item) => {
        item.addEventListener("click", (e) => {
          nationalitiesInputFeild.value = e.target.classList;
          nationalitiesInputFeild.classList.add("capitalLetter");
          nationalitiesList.classList.remove("active");
        });
      });
    } else {
      nationalitiesList.classList.remove("active");
    }
  }

  // Stars Rating Start

  function getNextStars(element) {
    if (element.nextElementSibling) {
      nextStars.push(element.nextElementSibling);
      getNextStars(nextStars[nextStars.length - 1]);
    }
    nextStars.map((star) => {
      star.classList.replace("fa-solid", "fa-regular");
    });
  }

  function getPreviousStars(element) {
    previousStars.push(element);
    if (element.previousElementSibling) {
      previousStars.push(element.previousElementSibling);
      getPreviousStars(previousStars[previousStars.length - 1]);
    }
    previousStars.map((star) => {
      star.classList.replace("fa-regular", "fa-solid");
    });
  }

  stars.forEach((star) => {
    star.addEventListener("click", (e) => {
      starsInputFeild.value = "Done";
      getNextStars(e.target);
      getPreviousStars(e.target);
      nextStars = [];
      previousStars = [];
    });
  });

  // Modal Start

  countriesInputFeild.addEventListener("focus", () => {
    countriesList.classList.add("active");
    countriesListItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        // countries Start
        countriesInputFeild.value = e.target.innerHTML;
        countriesInputFeild.classList.add("capitalLetter");
        countriesList.classList.remove("active");
        // cities Start
        citiesList.classList.add("active");
        citiesListItems.forEach((item) => {
          item.addEventListener("click", (e) => {
            citiesInputFeild.value = e.target.innerHTML;
            citiesInputFeild.classList.add("capitalLetter");
            citiesList.classList.remove("active");
            // currencies Start
            currenciesList.classList.add("active");
            currenciesListItems.forEach((item) => {
              item.addEventListener("click", (e) => {
                currenciesInputFeild.value = e.target.innerHTML;
                currenciesInputFeild.classList.add("capitalLetter");
                currenciesList.classList.remove("active");
              });
            });
          });
        });
      });
    });
  });

  destinationsInputFeild.addEventListener("keyup", () => {
    destinationsCompare();
  });

  hotelsInputFeild.addEventListener("focus", () => {
    hotelsCompare();
  });

  travellersInputFeild.addEventListener("focus", () => {
    travellersCompare();
  });

  nationalitiesInputFeild.addEventListener("keyup", () => {
    nationalitiesCompare();
  });

  //   Get nights Number

  function getNights() {
    let checkIn = $("#checkIn").val();
    let checkOut = $("#checkOut").val();
    let defference = new Date(checkOut) - new Date(checkIn);
    let nights = Math.ceil(defference / 1000 / 60 / 60 / 24);
    nights < 0 ? (nights = 0) : (nights = nights);
    $("#nights").val(nights);
  }
  function setNights() {
    let today = document.getElementById("checkIn").valueAsDate;
    today.setDate(today.getDate() + Number($("#nights").val()));
    document.getElementById("checkOut").valueAsDate = today;
  }

  $("#checkOut").change(getNights);
  $("#checkIn").change(() => {
    $("#checkOut").val() ? getNights() : "";
  });
  $("#nights").change(setNights);

  // Get modal
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.classList.add("active");
  };
  span.onclick = function () {
    modal.classList.remove("active");
  };

  span.onclick = function () {
    modal.classList.remove("active");
  };

  done.onclick = function () {
    modal.classList.remove("active");
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.classList.remove("active");
    }
  };
});
