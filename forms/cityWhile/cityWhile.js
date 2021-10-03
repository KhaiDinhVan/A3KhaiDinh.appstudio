let cities = []
let endCities = false 
let moreCities = ""
let c = 0 

while (endCities == false) {
   moreCities = prompt("Do you want to add another city? Yes or No")
   if (moreCities == "Yes") {
   endCities = false
   addCity = prompt("Please enter a new city")
   cities.push(addCity)
} else {
      endCities = true 
}
}
  
while (c < cities.length)  {
  console.log(cities[c].toLowerCase())
  c += 1
}