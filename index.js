const freelancers = [
    { name: "Alice", occupation: "Writer", price: 30 },
    { name: "Bob", occupation: "Teacher", price: 50 },
  ];

const newFreelancers = [
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
        return (totalPrice / freelancers.length).toFixed(2)
    }

    function updateAveragePrice() {
        const h3 = document.getElementById("averagePrice");
        h3.innerHTML = `Average Price: $${averagePrice()}`;
    }

    const h3 = document.createElement("h3")
    h3.id = "averagePrice"
    h3.innerHTML = `Average Price: ${averagePrice()}`
    body.append(h3);

    const container = document.createElement("table")
    container.id = "container"
    body.append (container)

    function renderFreelancers (){
        container.innerHTML = ""
        freelancers.forEach ( person => {
            const freelancer = document.createElement ("tr")
            freelancer.innerHTML = `<td> <strong> Name: </strong> ${person.name}</td>
                                <td> <strong> Occupation: </strong> ${person.occupation}</td>
                                <td> <strong> Price: </strong>$${person.price}</td>`;
            container.appendChild(freelancer);
        } )
        updateAveragePrice()
    }

    function addCarol (){
        const Carol = { name: "Carol", occupation: "Programmer", price: 70 };
        freelancers.push(Carol)
        renderFreelancers()
    }

    function addFreelancers (){
        const randomIndex = Math.floor(Math.random() * newFreelancers.length)
        const newFreelancer = newFreelancers[randomIndex]
        freelancers.push(newFreelancer)
        renderFreelancers()
    }

    renderFreelancers();

    setTimeout(() => {
        addCarol();
    }, 1000);

    let add;

    setTimeout(() => {
        addFreelancers();
    
        add = setInterval(addFreelancers,1000)

    }, 2000);
    
    setTimeout(() => {
        clearInterval(add)
      }, 10000);

}

init ()