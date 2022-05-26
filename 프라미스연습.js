const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("hen"), 1000);
    });
const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => egg`), 1000);
    });
const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried egg`), 1000);
    });

getHen()
    .then((hen) => getEgg(hen))
    .then((egg) => cook(egg))
    .then((meal) => console.log(meal));
