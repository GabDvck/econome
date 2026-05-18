const liste_transactions = document.getElementById("liste-transactions");
const solde_html = document.getElementById("solde-montant");

export function afficherTransactions(liste){
    liste_transactions.innerHTML = '';
    for (let transac of liste){
        const tr = document.createElement("tr"); tr.dataset.id = transac["id"];
        const date = document.createElement("td"); date.textContent = trasac["date"]; tr.appendChild(date);
        const description = document.createElement("td"); description.textContent = transac["description"]; tr.appendChild(description);
        const categorie = document.createElement("td"); categorie.textContent = transac["categorie"]; tr.appendChild(categorie);
        const montant = document.createElement("td");
        if (transac["montant"] > 0){
            montant.textContent = "+€" + transac["montant"].toFixed(2).toString();
            montant.classList.add("montant-positif");
        }
        else{
            montant.textContent = "-€" + transac["montant"].toFixed(2).toString();
            montant.classList.add("montant-negatif");
        }
        tr.appendChild(montant);
        const bouton_supp = document.createElement("button"); bouton_supp.classList.add("bouton-supp"); bouton_supp.title = "supprimer"; bouton_supp.textContent = "x";
        tr.appendChild(bouton_supp);
        liste_transactions.appendChild(tr);
    }
}

export function majSolde(solde){
    solde_html.textContent = `€${total.toFixed(2)}`;
}