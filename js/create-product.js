document.addEventListener("DOMContentLoaded", function(){
    getCategories();
});

const getCategories = () => {
    fetch("http://localhost:8080/categories")
    .then((response) => {
        return response.json();
    }).then((data) => {
        let categorySelect = document.getElementById('categoryId');
        
        data.map((category) => {
            const option = document.createElement('option');
            option.value = category.id;
            option.text = category.name;
            categorySelect.appendChild(option);
        });

    }).catch((error) => {
        console.log(error);
    });
}

const createproduct = (event) => {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let qty = document.getElementById("qty").value;
    let categoryId = document.getElementById("categoryId").value;

    let data = {
        "name": name,
        "price": price,
        "qty": qty,
        "categoryId": categoryId
    }

    fetch("http://localhost:8080/products", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response) => {
        return response.json();
    }).then((data) => {
        window.location.href = "http://127.0.0.1:5500/index.html"
    }).catch((error) => {
        console.log(error);
    })
}