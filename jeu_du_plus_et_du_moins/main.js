window.addEventListener("load", () => {
    window.numberGame = Math.ceil(Math.random() * 100);
    console.log("start js", window.numberGame);
    document.querySelector("#js_submit").addEventListener("click", (event) => testNumber(event))
})

const testNumber = (e) => {
    console.log("start testNumber");
    e.preventDefault();
    
    let numberTester = parseInt(document.querySelector("#js_number").value);
    let renderResult = document.querySelector("#js_result").innerHTML;

    if (numberTester === window.numberGame) {
        renderResult += "<p>" + numberTester + "</p><p>C'est gagné</p>"
    }
    if (numberTester > window.numberGame) {
        renderResult += "<p>" + numberTester + "</p><p>C'est moins</p>"
    }
    if (numberTester < window.numberGame) {
        renderResult += "<p>" + numberTester + "</p><p>C'est plus</p>"
    }
    document.querySelector("#js_result").innerHTML = renderResult;
}