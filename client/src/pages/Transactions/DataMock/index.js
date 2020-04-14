
const casual = require('casual');

module.exports = () => {
    casual.define('transaction',() => {
        return {
            id: casual.uuid,
            income: casual.integer(from = 100, to = 1000),
            consumption: casual.integer(from = -100, to = -1000),
        }
    })

    const dataMock = {
        transactions: [],
    }

    // Create 30 transactions
    for (let i = 0; i < 30; i++) {
        dataMock.transactions.push(casual.transaction)
    }
    return dataMock
}