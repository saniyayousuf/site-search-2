var mobilePhones = [
    { model: "iPhone 12", company: "Apple", price: 999, camera: "12 MP" },
    { model: "Galaxy S21", company: "Samsung", price: 899, camera: "12 MP" },
    { model: "Pixel 5", company: "Google", price: 699, camera: "12.2 MP" },
    { model: "Pixel 5", company: "Google", price: 699, camera: "12.2 MP" },
    { model: "Pixel 5", company: "Google", price: 699, camera: "12.2 MP" },
    { model: "OnePlus 9 Pro", company: "OnePlus", price: 999, camera: "48 MP" },
    { model: "Mi 11 Ultra", company: "Xiaomi", price: 1199, camera: "50 MP" },
    { model: "Mate 40 Pro", company: "Huawei", price: 1099, camera: "50 MP" },
    { model: "Galaxy Note 20 Ultra", company: "Samsung", price: 1299, camera: "108 MP" },
    { model: "iPhone 11", company: "Apple", price: 699, camera: "12 MP" },
    { model: "OnePlus 8T", company: "OnePlus", price: 749, camera: "48 MP" },
    { model: "Galaxy A52", company: "Samsung", price: 399, camera: "64 MP" },
    { model: "iPhone SE", company: "Apple", price: 399, camera: "12 MP" },
    { model: "Pixel 4a", company: "Google", price: 349, camera: "12.2 MP" },
    { model: "Mi 10T Pro", company: "Xiaomi", price: 599, camera: "108 MP" },
    { model: "Galaxy S20 FE", company: "Samsung", price: 699, camera: "12 MP" },
    { model: "OnePlus Nord", company: "OnePlus", price: 399, camera: "48 MP" },
    { model: "iPhone XR", company: "Apple", price: 599, camera: "12 MP" },
    { model: "Galaxy Z Fold2", company: "Samsung", price: 1999, camera: "12 MP" },
    { model: "Mi 11 Lite", company: "Xiaomi", price: 299, camera: "64 MP" },
    { model: "Galaxy A71", company: "Samsung", price: 449, camera: "64 MP" },
    { model: "iPhone 12 Pro", company: "Apple", price: 1099, camera: "12 MP" },
  
  ];
  
  var searchForm = document.querySelector("form");
  var searchButton = document.getElementById("searchButton");
  var searchBy = document.getElementById("searchBy");
  var searchInput = document.getElementById("searchInput");
  var results = document.getElementById("results");
  
  searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    filterMobilePhones();
  });
  
  function filterMobilePhones() {
    var selectedOption = searchBy.value;
    var inputValue = searchInput.value.toLowerCase();
    
    var filteredMobilePhones = mobilePhones.filter(function(phone) {
      var phoneValue = phone[selectedOption].toLowerCase();
      return phoneValue.includes(inputValue);
    });
    
    displayResults(filteredMobilePhones);
  }
  
  function displayResults(filteredMobilePhones) {
    results.innerHTML = "";
    
    filteredMobilePhones.forEach(function(phone) {
      var listItem = document.createElement("li");
      listItem.textContent = "Model: " + phone.model + "  ||   Company: " + phone.company + " || Price: $" + phone.price + " || Camera: " + phone.camera;
      results.appendChild(listItem);
    });
  }