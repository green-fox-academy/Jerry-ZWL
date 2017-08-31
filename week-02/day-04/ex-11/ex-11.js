'use strict';

var accounts = [
    { 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
    { 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
    { 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function nameAndBlance(acc, accs) {
    var result = accs.reduce(
        (p, c) => {
            if (c['account_number'] === acc) {
                return (({ client_name, balance }) => ({ client_name, balance }))(c);
            } else { return p; }
        }
    );
    console.log(result);
}
nameAndBlance(11234543, accounts);

// console.log("afterReduce", accounts);

function transfer(accFrom, accTo, balance) {
    var checkFrom = accounts.map((u, i) => { return u['account_number'] }).indexOf(accFrom) > -1;
    var checkTo = accounts.map((u, i) => { return u['account_number'] }).indexOf(accTo) > -1;
    if (checkFrom && checkTo) {
        accounts.forEach((v, i, a) => {
            if (v['account_number'] == accFrom) {
                return a[i]['balance'] -= balance;
            } else if (v['account_number'] == accTo) {
                return a[i]['balance'] += balance;
            }
        });
        console.log(accounts);
    } else {
        console.log("404 - account not found");
    }
}




transfer(11234543, 23456311, 3)
    //transfer(11234543, 2345631, 3)