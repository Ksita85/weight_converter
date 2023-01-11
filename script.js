document.getElementById('kgsInput').addEventListener('input', (e) => {
    let kgs = e.target.value;
    
    document.getElementById('gramsOutput').innerHTML = `<h6> ${kgs * 1000} gr </h6>`;
    document.getElementById('lbsOutput').innerHTML = `<h6> ${(kgs * 2.2046).toFixed(2)} lb </h6>`;
    document.getElementById('ozOutput').innerHTML = `<h6> ${(kgs * 35.274).toFixed(2)} oz </h6>`;

});