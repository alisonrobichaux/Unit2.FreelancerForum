const names = ["Alice", "Bob", "Carol", "Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
const occupations = ["writer", "teacher", "programmer", "gardener", "programmer", "teacher", "teacher", "teacher", "programmer", "teacher", "driver"];

const freelancers = [
    { name: "Alice", price: 30, occupation: "writer" },
    { name: "Bob", price: 50, occupation: "teacher" },
    { name: "Carol", price: 70, occupation: "programmer" },
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
        freelancerElement.innerHTML = `<p>${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.price}</p>`;
        freelancerListElement.appendChild(freelancerElement);
    });
}

function updateAveragePrice() {
    const averagePrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0) / freelancers.length;
    document.getElementById("average-price-message").innerText = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

function generateRandomFreelancer() {
    const newFreelancer = {
        name: names[Math.floor(Math.random() * names.length)],
        occupation: occupations[Math.floor(Math.random() * occupations.length)],
        price: Math.floor(Math.random() * 100) + 1,
    };
    return newFreelancer;
}
