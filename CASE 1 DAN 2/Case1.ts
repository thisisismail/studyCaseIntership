type IFruit = {
  fruitId: number,
  fruitName: string,
  fruitType: "IMPORT" | "LOCAL",
  stock: number,
};

const fruits: IFruit[] = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// FILTER KEY PADA BUAH, UNTUK MENCEGAH PERULANGAN
const fruitFilter = (fruits : IFruit[], key : keyof IFruit) => {
  const seen = new Set();
  return fruits.filter(fruit => {
    const duplicate = seen.has(fruit[key].toString().toUpperCase());
    seen.add(fruit[key].toString().toUpperCase());
    return !duplicate;
  })
}

// ========================================================================
// 1. Buah yang dimiliki Andi (fruitName) 
// ========================================================================
const fruitName = (fruits : IFruit[]) => {
  return fruitFilter(fruits, 'fruitName').map(res => {
    return res.fruitName;
  })
}
console.log('\n=================[1]===============');
console.log(fruitName(fruits));
// [ 'Apel', 'Kurma', 'Manggis', 'Jeruk Bali', 'Salak' ]

// Catatan: asumsi APEL === Apel, karena sama - sama buah apel. Begitu pula dengan kurma.
// Untuk asumsi APEL !== Apel, solusinya ada dalam komentar di bawah ini:
// const fruitName = (fruits : IFruit[]) => {
//   return fruits.map(res => {
//     return res.fruitName;
//   })
// }


// ========================================================================
// 2. Jumlah wadah sesuai tipe buah dan daftar buah dari setiap tipe 
// ========================================================================
// HITUNG JUMLAH TIPE BUAH
const fruitType = (fruits : IFruit[]) => {
  return new Set(fruits.map(fruit => {
    return fruit.fruitType;
  })).size;
}
// LISTING DAFTAR ANGGOTA TIPE BUAH
const fruitFromType = (type : string) => {
  return fruitFilter(fruits, 'fruitName').filter(fruit => {
    return fruit.fruitType === type;
  }).map(res => {
    return res.fruitName;
  }).join(', ')
}
console.log('\n=================[2]===============');
console.log(`JUMLAH TIPE: ${fruitType(fruits)}`);
console.log(`BUAH LOCAL: ${fruitFromType('LOCAL')}`);
console.log(`BUAH IMPORT: ${fruitFromType('IMPORT')}`);
// JUMLAH TIPE: 2
// BUAH LOCAL: Manggis, Jeruk Bali, Salak
// BUAH IMPORT: Apel, Kurma

// Catatan: asumsi APEL === Apel, karena sama - sama buah apel. Begitu pula dengan kurma.
// Untuk asumsi APEL !== Apel, solusinya ada dalam komentear di bawah ini:
// const fruitFromType = (type : string) => {
//   return fruits.filter(fruit => {
//     return fruit.fruitType === type
//   }).map(res => {
//     return res.fruitName
//   }).join(', ')
// }


// ========================================================================
// 3. Jumlah stok pada masing - masing wadah (IMPORT dan LOCAL)
// ========================================================================
// HITUNG STOK DALAM WADAH
const totalStockFromType = (type : string) => {
  let stock = 0;
  fruitFilter(fruits, 'fruitName').filter(fruit => {
    return fruit.fruitType === type;
  }).map(res => {
    stock = stock + res.stock;
  })
  return stock;
}
console.log('\n=================[3]===============');
console.log(`STOK LOCAL: ${totalStockFromType('LOCAL')}`);
console.log(`STOK IMPORT: ${totalStockFromType('IMPORT')}`);
// STOK LOCAL: 260
// STOK IMPORT: 30

// Catatan: asumsi APEL === Apel, karena sama - sama buah apel. Begitu pula dengan kurma.
// Untuk asumsi APEL !== Apel, solusinya ada dalam komentear di bawah ini:
// const totalStockFromType = (type : string) => {
//   let stock = 0;
//   fruits.filter(fruit => {
//     return fruit.fruitType === type;
//   }).map(res => {
//     stock = stock + res.stock;
//   })
//   return stock;
// }


// ========================================================================
// 4. Komentar untuk kasus ini
// ========================================================================
console.log('\n=================[4]===============');
const komentar = `Kasus ini cukup menarik, akan tetapi struktur data\n\
pada kasus ini kurang baik, dengan alasan:\n \
1. fruitId yang merupakan Id seharusnya tidak boleh sama antar item\n \
2. penggunaan nama buah pada fruitName juga seharusnya tidak dibedakan \n \
   hanya dengan cara penulisan huruf besar dan huruf kecil,\n \
   karena akan membuat rancu, untuk penamaan buah yang sama \n \
   sebaiknya dilakukan dengan menambahkan parameter lain \n \
   seperti warna atau ukuran, contoh: Apel Merah dan Apel Hijau\n`;
console.log(komentar)


// ####################### follow me on github thisisismail ###################