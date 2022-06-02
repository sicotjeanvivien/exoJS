window.addEventListener("DOMContentLoaded", () => {
    console.log("start JS");
    document.querySelector("#js_button_submit").addEventListener("click", (e) => generate_suite_fibonacci_event(e));
})

const generate_suite_fibonacci_event = (e) => {
    e.preventDefault();
    document.querySelector("#js_table_result").classList.add("d-none");
    document.querySelector("#js_alert_error").classList.add("d-none");
    console.log("start generate_suite_fibonacci");
    let rand = document.querySelector("#js_input_number").value;
    if (rand = checked_valid_rand(rand)) {
        console.log("valid rand");
        let array_fibonacci = generate_suite_fibonacci(rand);
        if (array_fibonacci.length) {
            renderView(array_fibonacci);
        }
    } else {
        document.querySelector("#js_alert_error").classList.remove("d-none");
    }

}

const checked_valid_rand = (rand) => {
    // Verifie si la chaine de caratere n'est pas null
    if (!rand.length) rand = false;
    if (rand && rand.includes(".")) rand = false;
    if (rand && rand.includes(",")) rand = false;
    rand = parseInt(rand);
    // verifie si rand est bien un nombre
    if (rand && isNaN(rand)) rand = false;
    // verifie si rand est positif et superieur à 0
    if (rand && rand < 1) rand = false;
    return rand;
}

const generate_suite_fibonacci = (rand) => {
    let array = [0, 1]
    for (let i = 0; i < rand - 2; i++) {
        array.push(array[i] + array[i + 1])
    }
    return array;
}

const renderView = (array_fibonacci) => {
    let renderView = "";
    for (let i = 0; i < array_fibonacci.length; i++) {
        let randPrevious = array_fibonacci[i - 1] ? array_fibonacci[i - 1] : 0;
        let rapport = randPrevious ? randPrevious / array_fibonacci[i] : 0;
        renderView += `
                <tr>
                    <th scope="row">` + (i + 1) + `</th>
                    <td>` + array_fibonacci[i] + `</td>
                    <td>` + randPrevious + `/ ` + array_fibonacci[i] + `</td>
                    <td>` + rapport + `</td>
                </tr>
                `;
    }
    document.querySelector("#js_table_tbody").innerHTML = renderView;
    document.querySelector("#js_table_result").classList.remove("d-none");

}