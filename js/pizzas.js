const veg = document.getElementsByClassName("veg");
for (var x = 0; x < veg.length; x++) {
  console.log(veg[x]);
}

const img = document.getElementsByClassName("image");
for (var x = 0; x < img.length; x++) {
  console.log(img[x]);
}

let cost = [7.99, 9.99, 11.99];

let BeverageSelect = [];

function addPizza() {
  document.getElementById("displaypizza").innerHTML +=
    '<div class="pizzaDropDown"><br><select id="PizzaOption"><option>Margherita</option><option>Double Cheese Margherita</option><option>Farm House</option><option>Peppy Paneer</option><option>Mexican Green Wave</option><option>Deluxe Veggie</option><option>Pepper Barbeque Chicken</option><option>CHICKEN SAUSAGE</option><option>Chicken Golden Delight</option><option>Non Veg Supreme</option><option>Chicken Dominator</option><option>PEPPER BARBECUE & ONION</option></select> ';

  document.getElementById("displaypizza").innerHTML +=
    "<select id=\"PizzaTopins\"><option>Black Olives</option><option>Crisp Capsicum</option><option>Paneer</option><option>Mushroom</option><option>Golden Corn</option><option>Fresh Tomato</option><option>Jalapeno</option><option>Red Pepper & Babycorn</option><option>Barbeque Chicken</option><option>Hot 'n' Spicy Chicken</option><option>Chunky Chicken and Chicken Salami</option></select> ";

  document.getElementById("displaypizza").innerHTML +=
    '<select id="PizzaSize"><option>Large</option><option>Medium</option><option>Small</option></select></div>';
  console.log(document.getElementById("displaypizza").innerHTML);
}

function removePizza() {
  let pizzaOptions = document.getElementsByClassName("pizzaDropDown");
  document.getElementById("displaypizza").innerHTML = "";
}

function calTotal() {
  console.log("inside total");
  let total = document.getElementById("PizzaSize").value;
  if (total == "Small") {
    document.getElementById("TotalCost").innerHTML =
      "total cost is : " + cost[0];
  }
  if (total == "Medium") {
    document.getElementById("TotalCost").innerHTML =
      "total cost is : " + cost[1];
  }
  if (total == "Large") {
    document.getElementById("TotalCost").innerHTML =
      "total cost is : " + cost[2];
  }

  console.log(total);
}
