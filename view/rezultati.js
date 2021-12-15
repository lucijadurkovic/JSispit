export default (rezultati)=>{
    var x = rezultati.slice(0,10);
    let popis = [];
    for (let i = 0; i < x.length; i++)  {
        popis.push(`<a href=${x[i].web_pages[0]}>${x[i].name}</a><br>`);
    }
         
    return `
    <h2>Rezultati pretraživanja za ${x[0].country}:</h2>
    <ul>${popis.join()}</ul>`

    
}
