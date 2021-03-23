function pageLoad() {
  [
    {
      "user": { "name": "Kovács Béla", "age": 25 },
      "type": "withdraw",
      "amount": 3500,
      "currency": "HUF"
    },
    {
      "user": { "name": "Kis Pista", "age": 19 },
      "type": "withdraw",
      "amount": 200,
      "currency": "HUF"
    },
    {
      "user": { "name": "Almafa Mariann", "age": 18 },
      "type": "withdraw",
      "amount": 3500,
      "currency": "HUF"
    },
    {
      "user": { "name": "Körtefa Ilona", "age": 26 },
      "type": "no",
      "amount": 6000,
      "currency": "HUF"
    },
    {
      "user": { "name": "Pogácsa Miklós", "age": 18 },
      "type": "no",
      "amount": 200,
      "currency": "HUF"
    },
  ]


}

window.addEventListener('load', pageLoad)


/*
Write a function (sumOfWithdrawalsByTeengagers) which takes an array of transactions described in the schema above,
and returns the sum of the withdrawals made bye users who are younger than 20.
*/