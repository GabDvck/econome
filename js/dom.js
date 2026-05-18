const liste_transactions = document.getElementById("liste-transactions");
const solde_html = document.getElementById("solde-montant");

export function afficherTransactions(liste){
    liste_transactions.innerHTML = '';
    for (let transac of liste){
        const tr = document.createElement("tr");
        const date = document.createElement("td"); date.textContent = trasac["date"]; tr.appendChild(date);
        const description = document.createElement("td"); description.textContent = transac["description"]; tr.appendChild(description);
        const categorie = document.createElement("td"); categorie.textContent = transac["categorie"]; tr.appendChild(categorie);
        const montant = document.createElement("td");
        const stringMontant = transac["montantEuros"].toString().replace(".", ",") + "," + transac["montantCentimes"].toString();
        if (transac["montantEuros"] > 0){
            montant.textContent = "+€" + stringMontant;
        }
        else{
            montant.textContent = "-€" + stringMontant;
        }
        tr.appendChild(montant);
        liste_transactions.appendChild(tr);
    }
}

export function majSolde(solde){
    solde_html.textContent = `€${total.toFixed(2)}`;
}