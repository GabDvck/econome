export function getTransactions(){
    return JSON.parse(localStorage.getItem("transactions")) || [];
}

export function saveTransactions(transaction){
    let transactions = getTransactions();
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

export function deleteTransaction(id) {
    const transactions = getTransactions();
    const transactionsFiltrees = transactions.filter(t => t.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactionsFiltrees));
}