import React from 'react';
import casual from 'casual-browserify';
import styles from "./MocksData.module.sass";

const MocksData = () => {
    casual.define('transaction', function () {
        return {
            id: casual.uuid,
            moneyRender: casual.random_value({
                a: -500,
                b: -400,
                c: -300,
                d: -200,
                e: -100,
                f: 100,
                g: 200,
                h: 300,
                i: 400,
                j: 500
            })
        }
    })
    const data = {
        transactions: [],
    }

    for (let i = 0; i < 30; i++) {
        data.transactions.push(casual.transaction);
    }

    let renderTableRows = data.transactions.map((transaction, i) => {
        if (transaction.moneyRender > 0) {
            return (
                <tr>
                    <td key={i}>{i + 1}</td>
                    <td>income</td>
                    <td>{transaction.moneyRender} $</td>
                </tr>);
        } else {
            return (
                <tr>
                    <td key={i}>{i + 1}</td>
                    <td>consumption</td>
                    <td>{transaction.moneyRender} $</td>
                </tr>);
        }
    });

    return (
        <table>
            <caption>cash transactions</caption>
            <thead>
            <tr>
                <td>id transaction</td>
                <td>income/consumption</td>
            </tr>
            </thead>
            {renderTableRows}
            <tfoot>
            <tr>
                <td></td>
                <td></td>
            </tr>
            </tfoot>
        </table>);
};

export default MocksData;