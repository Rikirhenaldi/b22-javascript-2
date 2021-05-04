const dataArray = [2, 25, 4, 14, 17, 30, 8]
let seleksi = {
    validasi1 : function(num1,num2) {
        this.validasi3
       if (num1<num2) {
           return [num1,num2]
           
       }else{
        return ("Nilai akhir harus lebih besar dari nilai awal");
       } 
    },
    validasi2 : function(num1,num2,arr) {
        this.validasi3
        if (arr.length >= 5) {
            result2 = arr
            return result2  
        }else{
          return ("Jumlah angka dalam dataArray harus lebih dari 5");  
        }    
    },
    validasi3 : function(num1,num2,dataArray) {
        let i = this.validasi1(num1,num2,dataArray)
        let j = this.validasi2(num1,num2,dataArray)
        let finaldata = []
            for (let c = 0; c < j.length; c++) {
                if (j[c] > i[0] && j[c] < i[1]) {
                    finaldata.push(j[c])
                }else {
                    
                }        
            }
        
        return finaldata.sort(function(a,b) {
            return a-b
        })
    }
}  

console.log(seleksi.validasi3(5, 20, dataArray));