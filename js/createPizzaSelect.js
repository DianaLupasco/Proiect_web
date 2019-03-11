function createPizzaSelect(pizza) {
    let pizzaList = JSON.parse(pizza);
    let containerHTML = '';
    for (let i = 0; i < pizzaList.length; i++) {
        containerHTML = containerHTML + `
        <div id="card-${i}" class="card ">
            <div class="card-body">
            <img src="${pizzaList[i].src}"></img><br>${pizzaList[i].name}<br>${pizzaList[i].price}<br>${pizzaList[i].description}
            </div>
        </div>
        `;
    }
    document.getElementById('card_container').innerHTML = containerHTML;
}
