var json = null;
window.onload = function(){
	(async () => {
	  const response = await fetch('./data/pizza.json')
	  json = await response.json()

    let containerHTML = ' ';
    for (let i = 0; i < json.drinks_pizza.length; i++) {
        containerHTML = containerHTML + `
        <div id="card-${i}" class="card ">
            <div class="card-body">
            <img src="${json.drinks_pizza[i].src}"></img><br>${json.drinks_pizza[i].name}<br>${json.drinks_pizza[i].price}<br>${json.drinks_pizza[i].description}
           <br>
            <button type="button" class="btn1 btn-info">В корзину</button>
            <button type="button" class="btn2 btn-info" id="more-${i}" data-toggle="modal" data-target="#modalBasket${i}">Подробнее... </button>
            </div>
        </div> 
        `;
    }  
    document.getElementById('card_container').innerHTML = containerHTML;    
    // adaugat 
//     drawBox('0');
//    function drawBox (id){
//     let moreInfo = document.querySelector('#more-'+ id)
//     moreInfo.onclick = function () {
//         for (let i = 0; i < json.length; i++){
//         let where = document.querySelector('#content')
        
//         where.innerHTML += `
//         <div class="modal fade" id="modalBasket${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                     <div id="contCard" class="modal-header">
//                         <h5 class="modal-title" id="exampleModalLongTitle">Описание</h5>
                        
//                     </div>
//                 <div style="width:48%;" class="modal-body">
//                     <ul class="list-group">
//                     <img src="${json[i].src}"></img><br>${json[i].name}<br>${json[i].price}<br>${json[i].description}
//                     <br>
//                     </ul>
//                     <div class="btn-group" role="group" aria-label="Basic example">
//                         <button type="button" id="decrease" class="btn btn-secondary">-</button>
//                         <span class="input-group-text" id="productCount">Количество</span>
//                         <button type="button" id="increase" class="btn btn-secondary">+</button>
//                         <button type="button" id="remove" class="btn btn-danger">Убрать</button>
//                     </div>
//                 </div>
               
//                 <div id="choise">
//                 <h4> Тесто </h4>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
//                         <label class="form-check-label" for="inlineCheckbox1">Тонкое</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
//                         <label class="form-check-label" for="inlineCheckbox2">Толстое</label>
//                     </div> 
//                     <h4> Форма теста </h4>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
//                         <label class="form-check-label" for="inlineCheckbox1">Круглая</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
//                         <label class="form-check-label" for="inlineCheckbox2">Овальная</label>
//                     </div> 
//                     <h4> Размер </h4>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
//                         <label class="form-check-label" for="inlineCheckbox1">Маленькая</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
//                         <label class="form-check-label" for="inlineCheckbox2">Средняя</label>
//                     </div> 
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
//                         <label class="form-check-label" for="inlineCheckbox2">Большая</label>
//                     </div> 
//                     <h4> Дополнительные </h4>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
//                         <label class="form-check-label" for="inlineCheckbox1">Зелень</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
//                         <label class="form-check-label" for="inlineCheckbox2">Перец</label>
//                     </div> 
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
//                         <label class="form-check-label" for="inlineCheckbox1">Маслины</label>
//                     </div>
//                     <div class="form-check form-check-inline">
//                         <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
//                         <label class="form-check-label" for="inlineCheckbox2">Сыр</label>
//                     </div> 
//                     <div class="form-check form-check-inline">
//                 </div> 
//                 </div>               
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Закрыть</button>
//                     <button type="button" class="btn btn-primary" id="acceptOrder">Заказать </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     `;
//         }
//     };
//    }
    class Ingridiends{
        constructor(){

        }

        loadData(){

        }
        

    }

})() 
}

	setTimeout(function() {
        // console.log(json)
        console.log(json)
    }, 2000);



