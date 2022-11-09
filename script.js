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