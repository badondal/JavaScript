window.onload = function(){
    var cal1 = document.getElementsByClassName('cell');
    var num = document.getElementById('res');
    var op = document.getElementsByClassName('func');

    var fir = 0;
    var sec = 0;
    var calc = null;
    var oper = false;
    for (var i =0; i< cal1.length; i++) { 
            cal1[i].addEventListener("click", (e)=>{
            var userVal = e.target.firstChild.firstChild; 
            if(userVal !== null){
                userVal = userVal.nodeValue; 
            }
            else{
                userVal = e.target.firstChild.nodeValue; 
            }
                
            if ('1234567890'.indexOf(userVal) > -1) {
                if(num.value > 0){
                    if(oper !== false){
                        num.value = userVal;
                        oper = false;
                        console.log(1);
                    }else{
                        num.value = num.value + userVal;
                        console.log(2);
                    }
                }
                else{
                    num.value = userVal;
                } 
            }         

            
            if(userVal === 'AC'){
                num.value= 0
            }
            else if(userVal === '+'){
                fir = Number(num.value);
                oper = true;
                calc = '+';
            }
            else if(userVal === '-'){
                fir = Number(num.value);
                oper = true;
                calc = '-';
            }
            else if(userVal === '*'){
                fir = Number(num.value);
                oper = true;
                calc = '*';
            }
            else if(userVal === '/'){
                fir = Number(num.value);
                oper = true;
                calc = '/';
            }
            else if(userVal === '%'){
                fir = Number(num.value);
                num.value = fir/100;
                oper = true;
                calc = '%';
            }
            else if(userVal === '='){
                sec = Number(num.value);
                if(calc ==='+'){
                    num.value=fir+sec;
                }
                else if(calc ==='+'){
                    num.value=fir+sec;
                }
                else if(calc ==='-'){
                    num.value=fir-sec;
                }
                else if(calc ==='*'){
                    num.value=fir*sec;
                }
                else if(calc ==='/'){
                    num.value=fir/sec;
                }   
                else if(calc ==='%'){
                    num.value=fir/sec;
                    console.log(fir,sec,calc);
                    // 이건 모르겠다
                }   
            }
            else if(userVal === '+/-'){
                if(num.value >0)
                    num.value = 0-num.value;
                else{
                    var str = num.value;
                    str = str.toString();
                    num.value = str.replace("-","");
                    // num.value = num.value.replace(num.value.toString,'-');
                }
            }
                
        })                 
    }
}