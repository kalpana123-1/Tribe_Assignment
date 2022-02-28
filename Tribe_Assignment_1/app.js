fetch('https://www.gov.uk/bank-holidays.json')

.then(function(res){
    res.json().then(function(res){
        console.log(res['england-and-wales'].events['0'].date);
        console.log(res);
    })
})
.catch(function(err){
    console.log("error: ", err);
})