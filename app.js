var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var usdt = document.getElementById("tether");
var doge = document.getElementById("dogecoin");
var ada = document.getElementById("cardano");
var sol = document.getElementById("solana");
var tron = document.getElementById("trx");

var liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Ctether%2Ccardano%2Csolana%2Cdogecoin%2Ctron&vs_currencies=usd",
        
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    
    eth.innerHTML = response.ethereum.usd;
    usdt.innerHTML = response.tether.usd;
    doge.innerHTML = response.dogecoin.usd;
    ada.innerHTML = response.cardano.usd;
    trx.innerHTML = response.tron.usd;
    sol.innerHTML = response.solana.usd;
    

});
