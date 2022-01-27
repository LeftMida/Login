const API = "https://randomuser.me/api/?results=";

let btn, output, input
btn = document.getElementById('btn')
output = document.getElementById('output')
input = document.getElementById('input')
const searchName = async()=>{
    let text = input.value
    let url = API+ text
    let request = await fetch(url)
    let response = await request.json()
    console.log(typeof response.results);
    renderName(response.results)
}

const renderName = (data) =>{
    output.innerHTML = ''
    data.forEach(el=>{
        let div = document.createElement('div')
        let h5__Name = document.createElement('h5')
        let h5__Surname = document.createElement('h5')
        let h5__title = document.createElement('h5')
        let h5__email = document.createElement('h5')
        let h5__age = document.createElement('h5')
        let h5__gender = document.createElement('h5')
        let h5__number = document.createElement('h5')
        let h5__country = document.createElement('h5')
        let h5__city = document.createElement('h5')
        let h5__street = document.createElement('h5')
        let iframe = document.createElement('img')
        iframe.src = el.picture.large
        h5__title.innerHTML = `Title = ${el.name.title}`
        h5__Name.innerHTML = `Name = ${el.name.first}`
        h5__Surname.innerHTML = `Surname = ${el.name.last}`
        h5__gender.innerHTML = `Gender = ${el.gender}`
        h5__age.innerHTML = `Age = ${el.dob.age}`
        h5__email.innerHTML = `Email = ${el.email}`
        h5__number.innerHTML = `Number = ${el.phone}`
        h5__country.innerHTML = `Country = ${el.location.country}`
        h5__city.innerHTML = `City = ${el.location.city}`
        h5__street.innerHTML = `Street = ${el.location.street.name}`
        div.append(h5__gender, h5__title, h5__Name, h5__Surname, h5__age, h5__email, h5__number, h5__country, h5__city, h5__street, iframe)
        output.append(div)
})
}
// let i = 0
btn.addEventListener('click', ()=>{
    searchName()
    input.value = ''
})
