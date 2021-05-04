//jawaban tugas no 1

    // 3 method string 
// 1. .concat()
// method concat berfungsi untuk menggabungkan string sehingga didapatkan string baru.
let firstName = "Riki"
let lastName = "Rhenaldi"
let fullName = firstName.concat(" ",lastName)
console.log(fullName); 
// 2. .match()
// method match berfungsi untuk mengambil string dari hasil pencocokan sebuah string lalu string tersebut di outpukan dalam bentuk array dengan indeks dari letak string diambil.
let paragraph = "adik saya pergi ke sekolah bersama ayah"
let mustFound = "ayah"
let found = paragraph.match(mustFound)
console.log(found);
// 3. .slice
// method slice digunakan untuk mengambil string tanpa mengubah is dari string yang diambil.
let paragraph1 = "budi bernyanyi dan erik bermain gitar"
console.log(paragraph1.slice(19)); // mengambil isi string berdasarkan index index awal
let newparagraph1 = paragraph1.slice(5,15) // menggunakan index awal dan index akhir
let reverseP1 = paragraph1.slice(-5) // menggunakan index minus untuk mengambil urutan string dari belakang.
console.log(newparagraph1);
console.log(reverseP1);

    // 4 method array 
// 4 .pop
// merupakan method array yang berfungsi untuk menghapus element terakhir pada array.
const heroes = ['thor', 'hulk', 'spiderman', 'ironman']
const diedHero = heroes.pop()
console.log(`hero yang meninggal ${diedHero}`);
console.log(heroes); 

// 5 .push
// merupakan method array yang berfungsi untuk menambah element baru dibagian akhir pada array.
const newMemberHero = heroes.push("Gundala")
console.log(heroes);

// 6 .short
// merupakan method array yang berfungsi untuk mengurutkan element dengan urutan terkecil ke terbesar jika number dan jika string maka diurutkan berdasarkan a- z.
const newFormationHero = heroes.sort()
console.log(newFormationHero);

// 7. .shift
// merupakan method array untuk menghapus element array dibagian awal.
const leftHero = heroes.shift()
console.log(`yang keluar ${leftHero}`);
console.log(heroes);

// 3 method object
// 8. Object.keys
// merupakan method object untuk mengcopy key dalam suatu object dan membentuk nya menjadi sebuah array dengan isi key yang telah dicopy tersebut.
let data = {
    id: 1,
    name: "Budi detmetal",
    username: "Bret",
    email: "Sincere@april.biz"
}
const dataKey = Object.keys(data)
console.log(dataKey);

// 9. Object.seal
// merupakan method object yang berfungsi untuk menyegel sebuah objek, mencegah properti baru ditambahkan ke dalamnya dan menandai semua properti yang ada agar tidak dapat dikonfigurasi.
const sealdata = Object.seal(data)

// 10. Object.isSealed
// merupakan method yang berfungsi untuk memeriksa apakah suatu object di segel atau tidak.
console.log(Object.isSealed(sealdata));
