const countryList = [
    {country: 'China', population: 1377422166},
    {country: 'India', population: 1295210000},
    {country: 'United States of America', population: 323947000},
    {country: 'Indonesia', population: 258705000},
    {country: 'Brazil', population: 206135893},
    {country: 'Pakistan', population: 194125062},
    {country: 'Nigeria', population: 186988000},
    {country: 'Bangladesh', population: 161006790},
    {country: 'Russian Federation', population: 146599183},
    {country: 'Japan', population: 126960000}
    ]
    // number 1
    const countryB = countryList.filter((each)=>{
       return each.country[0] === "B"
    })

    console.log(countryB)

    //number 2
  function MostpopulatedCountry(countryList){
   countryList.sort ((a, b) => { b.population - a.population})
    return countryList.slice(0, 5);
  }
  
  console.log(MostpopulatedCountry(countryList))

  const usersAPI = 'https://jsonplaceholder.typicode.com/users'

  //number 3

fetch(usersAPI)
.then((response)=>response.json())
.then((data)=>{console.log(data)
    data.forEach(data => {
                console.log(data.name)
                console.log(data.username)
                console.log(data.email)  
                console.log(data.address.street)
                console.log(data.company.catchPhrase)
            });  
})
.catch((error)=>{console.log(error)})

//number four
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const{width, height, area, perimeter} = rectangle
console.log(width, height, area, perimeter)
