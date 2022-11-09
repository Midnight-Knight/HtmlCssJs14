/* home */

const urlFox = "https://randomfox.ca/floof/";
async function fox()
{
    let respFox = await fetch(urlFox);
    let dataFox = await respFox.json();
    strFox = dataFox.image;
    document.getElementById("divfox").innerHTML = "";
    document.getElementById("divfox").style.background = "url('" + strFox + "')";
    document.getElementById("divfox").style.backgroundSize = "cover";
    document.getElementById("divfox").style.backgroundPosition = "center";
}

const urlDog = "https://random.dog/woof.json";
async function dog()
{
    let respDog = await fetch(urlDog);
    let dataDog = await respDog.json();
    strDog = dataDog.url;
    document.getElementById("divdog").innerHTML = "";
    document.getElementById("divdog").style.background = "url('" + strDog + "')";
    document.getElementById("divdog").style.backgroundSize = "cover";
    document.getElementById("divdog").style.backgroundPosition = "center";
}

/* section-1 */

const urlExRub = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/rub.json";
const urlExUsd = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.json";
const urlExEur = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json";
const urlExTry = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/try.json";
const urlExCny = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/cny.json";

async function convert(n)
{
    let respExRub = await fetch(urlExRub);
    let dataExRub = await respExRub.json();
    let respExUsd = await fetch(urlExUsd);
    let dataExUsd = await respExUsd.json();
    let respExEur = await fetch(urlExEur);
    let dataExEur = await respExEur.json();
    let respExTry = await fetch(urlExTry);
    let dataExTry = await respExTry.json();
    let respExCny = await fetch(urlExCny);
    let dataExCny = await respExCny.json();

    let Ex1 = document.getElementById("select-1").value;
    let Ex2 = document.getElementById("select-2").value;
    let N1 = Number(document.getElementById("number-1").value);
    let N2 = Number(document.getElementById("number-2").value);
    if (n == 1)
    {
        switch (Ex1)
        {
            case "RUB":
                switch (Ex2)
                {
                    case "RUB":
                        document.getElementById("number-2").value = N1 * dataExRub.rub.rub;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "USD":
                        document.getElementById("number-2").value = N1 * dataExRub.rub.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-2").value = N1 * dataExRub.rub.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-2").value = N1 * dataExRub.rub.try;
                        break;
                    case "CNY":
                        document.getElementById("number-2").value = N1 * dataExRub.rub.cny;
                        break;
                }
                break;
            case "USD":
                switch (Ex2)
                {
                    case "RUB":
                        document.getElementById("number-2").value = N1 * dataExUsd.usd.rub;
                        break;
                    case "USD":
                        document.getElementById("number-2").value = N1 * dataExUsd.usd.usd;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "EUR":
                        document.getElementById("number-2").value = N1 * dataExUsd.usd.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-2").value = N1 * dataExUsd.usd.try;
                        break;
                    case "CNY":
                        document.getElementById("number-2").value = N1 * dataExUsd.usd.cny;
                        break;
                }
                break;
            case "EUR":
                switch (Ex2)
                {
                    case "RUB":
                        document.getElementById("number-2").value = N1 * dataExEur.eur.rub;
                        break;
                    case "USD":
                        document.getElementById("number-2").value = N1 * dataExEur.eur.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-2").value = N1 * dataExEur.eur.eur;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "TRY":
                        document.getElementById("number-2").value = N1 * dataExEur.eur.try;
                        break;
                    case "CNY":
                        document.getElementById("number-2").value = N1 * dataExEur.eur.cny;
                        break;
                }
                break;
            case "TRY":
                switch (Ex2)
                {
                    case "RUB":
                        document.getElementById("number-2").value = N1 * dataExTry.try.rub;
                        break;
                    case "USD":
                        document.getElementById("number-2").value = N1 * dataExTry.try.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-2").value = N1 * dataExTry.try.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-2").value = N1 * dataExTry.try.try;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "CNY":
                        document.getElementById("number-2").value = N1 * dataExTry.try.cny;
                        break;
                }
                break;
            case "CNY":
                switch (Ex2)
                {
                    case "RUB":
                        document.getElementById("number-2").value = N1 * dataExCny.cny.rub;
                        break;
                    case "USD":
                        document.getElementById("number-2").value = N1 * dataExCny.cny.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-2").value = N1 * dataExCny.cny.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-2").value = N1 * dataExCny.cny.try;
                        break;
                    case "CNY":
                        document.getElementById("number-2").value = N1 * dataExCny.cny.cny;
                        alert("Выберите отличающиеся валюты");
                        break;
                }
                break;
        }
    }
    else
    {
        switch (Ex2)
        {
            case "RUB":
                switch (Ex1)
                {
                    case "RUB":
                        document.getElementById("number-1").value = N2 * dataExRub.rub.rub;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "USD":
                        document.getElementById("number-1").value = N2 * dataExRub.rub.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-1").value = N2 * dataExRub.rub.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-1").value = N2 * dataExRub.rub.try;
                        break;
                    case "CNY":
                        document.getElementById("number-1").value = N2 * dataExRub.rub.cny;
                        break;
                }
                break;
            case "USD":
                switch (Ex1)
                {
                    case "RUB":
                        document.getElementById("number-1").value = N2 * dataExUsd.usd.rub;
                        break;
                    case "USD":
                        document.getElementById("number-1").value = N2 * dataExUsd.usd.usd;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "EUR":
                        document.getElementById("number-1").value = N2 * dataExUsd.usd.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-1").value = N2 * dataExUsd.usd.try;
                        break;
                    case "CNY":
                        document.getElementById("number-1").value = N2 * dataExUsd.usd.cny;
                        break;
                }
                break;
            case "EUR":
                switch (Ex1)
                {
                    case "RUB":
                        document.getElementById("number-1").value = N2 * dataExEur.eur.rub;
                        break;
                    case "USD":
                        document.getElementById("number-1").value = N2 * dataExEur.eur.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-1").value = N2 * dataExEur.eur.eur;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "TRY":
                        document.getElementById("number-1").value = N2 * dataExEur.eur.try;
                        break;
                    case "CNY":
                        document.getElementById("number-1").value = N2 * dataExEur.eur.cny;
                        break;
                }
                break;
            case "TRY":
                switch (Ex1)
                {
                    case "RUB":
                        document.getElementById("number-1").value = N2 * dataExTry.try.rub;
                        break;
                    case "USD":
                        document.getElementById("number-1").value = N2 * dataExTry.try.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-1").value = N2 * dataExTry.try.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-1").value = N2 * dataExTry.try.try;
                        alert("Выберите отличающиеся валюты");
                        break;
                    case "CNY":
                        document.getElementById("number-1").value = N2 * dataExTry.try.cny;
                        break;
                }
                break;
            case "CNY":
                switch (Ex1)
                {
                    case "RUB":
                        document.getElementById("number-1").value = N2 * dataExCny.cny.rub;
                        break;
                    case "USD":
                        document.getElementById("number-1").value = N2 * dataExCny.cny.usd;
                        break;
                    case "EUR":
                        document.getElementById("number-1").value = N2 * dataExCny.cny.eur;
                        break;
                    case "TRY":
                        document.getElementById("number-1").value = N2 * dataExCny.cny.try;
                        break;
                    case "CNY":
                        document.getElementById("number-1").value = N2 * dataExCny.cny.cny;
                        alert("Выберите отличающиеся валюты");
                        break;
                }
                break;
        }
    }
}