let products = [
    { id: 0, price: 70000, title: "Blossom Dress" },
    { id: 1, price: 32000, title: "Check Shirt" },
    { id: 2, price: 15000, title: "Black Tie" },
    { id: 3, price: 67000, title: "Springfield Shirt" },
    { id: 4, price: 82000, title: "Red Mini Dress" },
];

// 가격 낮은 순

let lowToHigh = function () {
    products.sort(function (a, b) {
        return a.price - b.price;
    });
    console.log(products);
};

lowToHigh();

// 가격 높은 순

let highToLow = function () {
    products.sort((a, b) => b.price - a.price);
    console.log(products);
};

highToLow();

// abc순서도 구해보기

let atoz = function () {
    products.sort(function (a, b) {
        if (a.title < b.title) {
            return -1;
        }
        if (b.title < a.title) {
            return 1;
        }
        return 0;
    });
    console.log(products);
};

atoz();
