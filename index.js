const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
  ];

const newFreelancers = [
    { name: "Carol", occupation: "Programmer", price: 70 },
    { name: "Liz", occupation: "Artist", price: 60 },
    { name: "Adam", occupation: "Chef", price: 90 },
    { name: "Sara", occupation: "Designer", price: 20 },
    { name: "Liam", occupation: "Paralegal", price: 40 },
    { name: "Toby", occupation: "Blacksmith", price: 50 },
    { name: "John", occupation: "Zookeeper", price: 30 },
    { name: "Olga", occupation: "Engineer", price: 50 },
    { name: "Mary", occupation: "Mechanic", price: 80 },
    { name: "Tim", occupation: "Journalist", price: 20 },
    { name: "Kyle", occupation: "Photographer", price: 70 },
]


function init() {
    
    const body = document.querySelector("#freelancers")

    const h1 = document.createElement("h1")
    h1.innerHTML = "Freelancer Forum"
    body.append(h1);

    const h2 = document.createElement("h2")
    h2.innerHTML = "Available Freelancers"
    body.append(h2);

    function averagePrice() {
        const totalPrice = freelancers.reduce((total, person)=>
        total+person.price,0)
        return totalPrice / freelancers.length
    }

    const h3 = document.createElement("h3")
    h3.innerHTML = `Average Price: ${averagePrice()}`
    body.append(h3);

    const container = document.createElement("table")
    container.id = "container"
    body.append (container)

    renderFreelancers()

}

function renderFreelancers (){
    container.innerHTML = ""
    freelancers.forEach ( person => {
        const freelancer = document.createElement ("tr")
        freelancer.innerHTML = `<td> Name: ${person.name}</td>
                            <td> Occupation: ${person.occupation}</td>
                            <td> Price: ${person.price}</td>`;
        container.appendChild(freelancer);
    } )
}


function addFreelancers (){
    const randomIndex = Math.floor(Math.random() * newFreelancers.length)
    const newFreelancer = newFreelancers[randomIndex]
    freelancers.push(newFreelancer)
    renderFreelancers()
}

    const add = setInterval( addFreelancers, 1000)
    
    setTimeout(() => {
        clearInterval(add)
      }, 10000);


init ()