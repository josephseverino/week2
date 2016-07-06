function checkPrime(num){
     if (num===1){
            return "1 is not a Prime number - by definition"
        }else if(num==2){
            return "2 is a Prime, indeed!!!"
        }
        else{


    for (var i= 2; i<(num); i++){
        if(num%i === 0){
            return "False: Not a Prime number"
        
        }

        else{
            return "True: Totally a Prime"
        }
    
        }
}

}
