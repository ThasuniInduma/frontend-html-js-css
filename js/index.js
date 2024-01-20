document.addEventListener("DOMContentLoaded", function(){
    getProducts();
    getCategories();
});

const getCategories = () => {
    fetch("http://localhost:8080/categories")
    .then((response) => {
        return response.json();
    }).then((data) => {
        let categoryList = document.getElementById('categories');
        
        data.map((category) => {
            let listItem = document.createElement('li');
            listItem.innerHTML = category.name;
            listItem.onclick = getProductsByCategory();
            categoryList.appendChild(listItem);
        });

    }).catch((error) => {
        console.log(error);
    });
}

const getProductsByCategory = (categoryId) => {
    
}

const getProducts = () => {
    fetch("http://localhost:8080/products").then((response) => {
        return response.json();
    }).then((data) => {
        let products = "";
        data.map((product) => {
            products += `<div class="col-lg-3 col-sm-6 col-12">`;
            products += `<div class="card mb-4">`;
            products += `<div class="card-body">`;
            products += `<h5 class="card-title">${product.name}<span class="badge bg-secondary">${product.category?.name}</span></h5>`;
            products += `<p class="card-text">${product.price}</p>`;
            products += `<a href="#" class="btn btn-primary">View Product</a>`;
            products += `</div>`;
            products += `</div>`;
            products += `</div>`;
        });

        document.getElementById('products').innerHTML = products;

    }).catch((error) => {
        console.log(error);
    });
}