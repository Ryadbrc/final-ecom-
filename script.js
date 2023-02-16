const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}  

//previw setion 
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.pro-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

//the shop filter js code

		
(function() {
		
    let field = document.querySelector('.items');
    let li = Array.from(field.children);

    function FilterProduct() {
        for(let i of li){
            const name = i.querySelector('strong');
            const x = name.textContent;
            i.setAttribute("data-category", x);
        }

        let indicator = document.querySelector('.indicator').children;

        this.run = function() {
            for(let i=0; i<indicator.length; i++)
            {
                indicator[i].onclick = function () {
                    for(let x=0; x<indicator.length; x++)
                    {
                        indicator[x].classList.remove('active');
                    }
                    this.classList.add('active');
                    const displayItems = this.getAttribute('data-filter');

                    for(let z=0; z<li.length; z++)
                    {
                        li[z].style.transform = "scale(0)";
                        setTimeout(()=>{
                            li[z].style.display = "none";
                        }, 500);

                        if ((li[z].getAttribute('data-category') == displayItems) || displayItems == "all")
                         {
                             li[z].style.transform = "scale(1)";
                             setTimeout(()=>{
                                li[z].style.display = "block";
                            }, 500);
                         }
                    }
                };
            }
        }
    }
    new FilterProduct().run();
})();

/*orders to mail

const Phone = document.getElementById('Phone');
const address = document.getElementById('address');
const submit = document.getElementById('submit');
const quantity = document.getElementById('quantity');
const product = document.getElementById('product-final');

submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    let ebody = `
    <h1>Phone Number: </h1>${Phone.value}
    <br>
    <h1>Address: </h1>${address.value}
    <br>
    <h1>Product: </h1>${product.value}
    <br>
    <h1>Quantity: </h1>${quantity.value}
    
    `;

    Email.send({
        SecureToken : "your-token", //add your token here
        To : 'them@website.com', 
        From : "you@isp.com",
        Subject : "New Order",
        Body : ebody
    }).then(
      message => alert(message)
    );
});

//display products from a json file 
let products = "products.json";
fetch(products)
.then((response) => response.json()).then((data) => {
    let output = "";
    for(let item of products){
        output += `
           <li data-category="${item.category}" data-price="${item.price}" class="pro product"  data-name="${item.dataname}"><div>
               <img src="${item.image}" alt="">
               <div class="des">
                   <span>${item.brand}</span>
                   <strong>${item.categoryies}</strong>
                   <h5>${item.title}</h5>
                   <div class="star">
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                       <i class="fas fa-star"></i>
                   </div>
                   <h4>$${$+item.prices}</h4>
               </div>
           </div></li>
        `;
     }
     document.querySelector(".sclass .items").innerHTML = output;
  
   }
);


*/
