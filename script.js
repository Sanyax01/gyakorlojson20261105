const API_URL = '/products.json';

async function init(){
const response = await fetch(API_URL);

const adatok = await response.json();


    document.getElementById('shop-name').textContent = adatok.shopName;






for (const adat of adatok.products) {
    const cardBody = document.createElement('div');
    const Name = document.createElement('h5');
    Name.classList.add('card-title');
    Name.textContent = adat.name;
    cardBody.appendChild(Name);

    const Img = document.createElement('img');
    Img.classList.add('card-img');
    Img.src = adat.img;
    cardBody.appendChild(Img);

    const Price = document.createElement('p');
    Price.classList.add('card-text');
    Price.textContent = `Price: $${adat.price.toFixed(2)}`;
    cardBody.appendChild(Price);

    const Button = document.createElement('button');
    Button.classList.add('btn', 'btn-primary');
    Button.textContent = 'Reservation';
    cardBody.appendChild(Button);  
  
    
    
    
    document.getElementById('card-body').appendChild(cardBody);
}
}
init();

