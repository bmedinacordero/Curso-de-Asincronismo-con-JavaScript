const { resolve } = require("path/posix");

const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("Hey esta promesa se resuelve!")
        } else{
            reject("Ups! no se resolvió");
        }
    });
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));




    const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(() => {
                    resolve("True");
                }, 2000)
            } else {
                const error = new Error("Whoops, algo no sucedio");
                reject (error);
            }
        });
    }

    somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));



    Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log("array of results", response);
    })
    .catch(err => {
        console.error(err);
    })