const freelancers = [
    { name: "Alice", price: 30, occupation: "writer"},
    { name: "Bob", price: 50, occupation: "teacher"},
    { name: "Carol", price: 70, occupation: "programmer"},
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ]; 

  const addFreelancerInterval = setInterval(addFreelancer, 2000);
  render();
  updateAveragePrice();

  function addFreelancer() {
    const newFreelancer = generateRandomFreelancer();
    freelancers.push(newFreelancer);
    render();
    updateAveragePrice();
  }


function render() {
    const freelancerListElement = document.getElementById("freelancer-list");
    freelancerListElement.innerHTML = "";

    freelancers.forEach(freelancer => {
        const freelancerElement = document.createElement("div");
        freelancerElement.innerHTML = `<p>${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}</p>`;
        freelancerListElement.appendChild(freelancerElement);
    });
}

function updateAveragePrice() {
    const averagePrice = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0) / freelancers.length;
    document.getElementById("average-price-message").innerText = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

function generateRandomFreelancer() {
    const names = ["Carol", "David", "Eva", "Frank"];
    const occupations = ["Programmer", "Designer", "Marketing Specialist", "Consultant"];

    return {
        name: names[Math.floor(Math.random() * names.length)],
        occupation: occupations[Math.floor(Math.random() * occupations.length)],
        startingPrice: Math.floor(Math.random() * 100) + 1,
        
    };
}