let searchName = (keyword, length, callback) =>{
    const nama = [
        'Abigail', 'Alexandra', 'Alison',
        'Amanda', 'Angela', 'Bella',
        'Carol', 'Caroline', 'Carolyn',
        'Deirdre', 'Diana', 'Elizabeth',
         'Ella',  'Faith', 'Olivia', 'Penelope']
        
         let search = (name) => {
           return name.toLowerCase().includes(keyword)
        }
        let findName = nama.filter(search)
        callback(findName,length)
}
let limiting = (data,limit) => {
    let limiter = data.slice(0,limit)
    console.log(limiter);
}
searchName("an",3, limiting)
