function akarPangkat2(x) {
    if (x < 0) {
      return "Tidak bisa input bilangan negatif";
    }
    if (x % 2 !== 0) {
      return "Tidak bisa input bilangan ganjil";
    }
    return Math.sqrt(x);
}

console.log(akarPangkat2(-5));
// Output: "Tidak bisa input bilangan negatif"

console.log(akarPangkat2(7));
// Output: "Tidak bisa input bilangan ganjil"

console.log(akarPangkat2(16));
// Output: 4
