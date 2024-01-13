// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield'];

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyAppendCat() {
    cats.push('Ralph');
}

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield');

function destructivelyPrependCat() {
    cats.unshift('Bob');
}


cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')

function destructivelyRemoveLastCat() {
    cats.pop()
}

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')

function destructivelyRemoveFirstCat() {
    cats.shift()
}


cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}
appendCat('Broom')

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')

function prependCat(name) {
    const newCats = [name, ...cats]
     return newCats
}
prependCat('Arnold')

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')

function removeLastCat() {
    const newCats = cats.slice(0,2)
    return newCats
}

cats.length = 0
cats.push('Milo', 'Otis', 'Garfield')

function removeFirstCat() {
    const newCats = cats.slice(1)
    return newCats
}
