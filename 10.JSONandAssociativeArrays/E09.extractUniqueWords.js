function solver(arr) {
    let set = new Set();

    arr.forEach(function (e) {
        e = e.toLowerCase().split(/\W+/).filter(w => w != "");
        e.forEach(function (w) {
            set.add(w);
        })
    });

    console.log(Array.from(set.keys()).join(", "));
}
solver([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.',
    'Integer ac turpis commodo, varius nulla sed, elementum lectus.Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
]);