import Layout from "../view/layout.js";
import dohvatirezultate from "./dohvatirezultate.js";
import RezultatiView from "../view/rezultati.js";


export default async ()=>{
    document.getElementById("app").innerHTML = Layout();
    document.getElementById("search").addEventListener("change", async ()=>{
    let rez = await dohvatirezultate(event.target.value);
    document.getElementById("results").innerHTML = RezultatiView(rez);
    });

};


