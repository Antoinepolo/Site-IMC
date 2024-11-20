function calculerIMC(){

    const poid = parseFloat(document.getElementById("poid").value);
    const taille = parseFloat(document.getElementById("taille").value);

    const calculIMC = poid / (taille**2);

    document.getElementById("IMC").textContent = calculIMC.toFixed(1);
} 