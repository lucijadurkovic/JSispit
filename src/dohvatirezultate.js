export default async (terminPretrage) =>{
    document.getElementById('spinner')
        .style.display = "block";
    let rezSaServera = await fetch(`http://universities.hipolabs.com/search?country=${terminPretrage}`);
    console.log(rezSaServera);
    if (rezSaServera) {
        document.getElementById('spinner')
        .style.display = 'none';
    }
    let rezJSON = await rezSaServera.json();
    console.log(rezJSON);
    return rezJSON;
}
