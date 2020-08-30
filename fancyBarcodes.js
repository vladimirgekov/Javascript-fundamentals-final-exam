function fancyBarcodes(arr) {
  let num = arr.shift();
  let regex = /\@\#+[A-Za-z0-9]{5,}[A-Z]\@\#+/g;
  for (i = 0; i < num; i++) {
    if (arr[i].match(regex)) {
      if (arr[i].match(/[0-9]+/g)) {
        let lol = arr[i].match(/[0-9]+/g);
        console.log(`Product group: ` + lol.join(""));
      } else {
        console.log(`Product group: ` + "00");
      }
    } else {
      console.log("Invalid barcode");
    }
  }
}
fancyBarcodes(["3", "@#FreshFisH@# ", "@###Brea0D@### ", "@##Che46sE@## "]);
