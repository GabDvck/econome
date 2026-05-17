function afficherTransactions(liste){
    const tbody = document.createElement("tbody");
    tbody.classList.add("liste-transactions");
    for (let transac of liste){
        const tr = document.createElement("tr");
        const date = document.createElement("td"); date.innerHTML = trasac["date"]; tr.appendChild(date);
        const description = document.createElement("td"); description.innerHTML = transac["description"]; tr.appendChild(description);
        const categorie = document.createElement("td"); categorie.innerHTML = transac["categorie"]; tr.appendChild(categorie);
        const montant = document.createElement("td");
        const stringMontant = transac["montantEuros"].toString().replace(".", ",") + "," + transac["montantCentimes"].toString();
        if (transac["montantEuros"] > 0){
            montant.innerHTML = "+€" + stringMontant;
        }
        else{
            montant.innerHTML = "-€" + stringMontant;
        }
        tr.appendChild(montant);
        tbody.appendChild(tr);
    }
    return tbody;
}