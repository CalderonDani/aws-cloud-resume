const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://kipangoyjvwht7ajlc66hpriiu0mftre.lambda-url.us-west-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Total Views: ${data}`;
}
updateCounter(); // Call the function when the page loads
