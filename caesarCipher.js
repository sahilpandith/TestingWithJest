function caesarCipher(str,shiftFactor){
    const cipherString = str.split("").map(char => {
        //small alphabet
        if(char.charCodeAt()>=97 && char.charCodeAt()<=122){
            if((char.charCodeAt()+ shiftFactor)<=122){
                return String.fromCharCode(char.charCodeAt()+shiftFactor);
            }else{
                return String.fromCharCode(96 + ((char.charCodeAt()+shiftFactor)-122 ));
            }
        }
        //capital alphabet
        if(char.charCodeAt()>=65 && char.charCodeAt()<=90){
            if((char.charCodeAt()+ shiftFactor)<=90){
                return String.fromCharCode(char.charCodeAt()+shiftFactor);
            }else{
                return String.fromCharCode(64 + ((char.charCodeAt()+shiftFactor)-90 ));
            }
        }
        return char;
    }).join('');
    return cipherString
}

export default caesarCipher;