function simpleEncrypt(password = 'foo', data){
    if(!data){
        throw 'Gimme some data bro.'
    }

    let dataArray = data.split('')
    let someOtherArray = []
    let randomArray = []
    for(i=0; i<16; i++){
        someOtherArray.push(Math.floor(Math.random() * 1283990))
    }
    for(key in password.split('')){
        randomArray.push(password.charCodeAt(key))
    }

    console.log(dataArray[0].charCodeAt(0), someOtherArray[0])

    for(key in dataArray){
        dataArray[key] = String.fromCharCode(
            data.charCodeAt(key) 
            * someOtherArray[0]
        )
    }

    return {data: dataArray.join(''), array: someOtherArray}
}

function simpleDecrypt(password = 'foo', secretArray, data){
    if(!data){
        throw 'Gimme some data bro.'
    }else if(!secretArray){
        throw 'Gimme a secret array bro.'
    }

    let dataArray = data.split('')
    let randomArray = []
    for(key in password.split('')){
        randomArray.push(password.charCodeAt(key))
    }

    console.log(dataArray[0].charCodeAt(0), secretArray[0])

    for(key in dataArray){
        let x = data.charCodeAt(key)
        while(
            !(Number.isInteger(
                x
                / secretArray[0]
            ))
        ){
            x += 143859
        }
        dataArray[key] = String.fromCharCode(
            x
            / secretArray[0]
        )
    }

    return dataArray.join('')
}

const encrypted = simpleEncrypt('zohan', 'hey there')

console.log(String.fromCharCode(81207672).charCodeAt(0))

console.log(simpleDecrypt('zohan', encrypted.array, encrypted.data))