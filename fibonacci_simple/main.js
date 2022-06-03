window.addEventListener("DOMContentLoaded", () => {
    console.log("start JS");
    document.querySelector("#js_button_submit").addEventListener("click", (e) => generate_suite_fibonacci(e));
})

const generate_suite_fibonacci = (e) => {
    e.preventDefault();
    console.log("start generate_suite_fibonacci");
    let rand = parseInt(document.querySelector("#js_input_number").value);
    let array_fibonacci = [0, 1]
    for (let i = 0; i < rand - 2; i++) {
        array_fibonacci.push(array_fibonacci[i] + array_fibonacci[i + 1])
    }

    let renderView = "";
    for (let i = 0; i < array_fibonacci.length; i++) {
        renderView += `
            <tr>
                <th scope="row">` + (i + 1) + `</th>
                <td>` + array_fibonacci[i] + `</td>
                <td>` + array_fibonacci[i - 1] + `/ ` + array_fibonacci[i] + `</td>
                <td>` + array_fibonacci[i - 1] / array_fibonacci[i] + `</td>
            </tr>
        `;
    }
    document.querySelector("#js_table_tbody").innerHTML = renderView;

}
