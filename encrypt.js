const cryptoRandomString = require('crypto-random-string')

function encrypt(password, randomArray, data){
    if(!password){
        throw 'Gimme a password bro.'
    }else if(!randomArray){
        throw 'Gimme an array bro.'
    }else if(!data){
        throw 'Gimme some data bro.'
    }

    let dataArray = data.split('')
    let someOtherArray = []
    for(i=0; i<16; i++){
        someOtherArray.push(Math.floor(Math.random() * 1283990))
    }
    for(key in password.split('')){
        randomArray.push(password.charCodeAt(key))
    }

    for(key in dataArray){
        dataArray[key] = String.fromCharCode(((((((((((((((((((data.charCodeAt(key) + someOtherArray[0])
        / someOtherArray[1])
         - someOtherArray[2])
          * someOtherArray[3])
           / someOtherArray[4])
            - someOtherArray[5])
             * someOtherArray[6])
              + someOtherArray[7])
               / someOtherArray[8])
                + someOtherArray[9])
                 - someOtherArray[10])
                  / someOtherArray[11])
                   + someOtherArray[12])
                    * someOtherArray[13])
                     - someOtherArray[14])
                      / someOtherArray[15])
                       * randomArray[key % randomArray.length]) * 1000000000000000) % 143859)
    }

    for(key in dataArray){
        dataArray[key] = String.fromCharCode(Math.abs(((((((((((((((((dataArray[key].charCodeAt(0) / 1000000000000000)
        / randomArray[key % randomArray.length])
         * someOtherArray[15])
          + someOtherArray[14])
           / someOtherArray[13])
            - someOtherArray[12])
             * someOtherArray[11])
              + someOtherArray[10])
               - someOtherArray[9])
                * someOtherArray[8])
                 - someOtherArray[7])
                  / someOtherArray[6])
                   + someOtherArray[5])
                    * someOtherArray[4])
                     / someOtherArray[3])
                      + someOtherArray[2])
                       * someOtherArray[1])
                        % 143859)
    }

    console.log(dataArray)

}

encrypt('hey', [1], 'hey there this be zohan')