 // we need to generate random color from hex code...
    // range of hex code goes from 0 to 16 that is (012345789ABCDEF)
    
    const randomColor = function(){
        const hex = "0123456789ABCDEF";
        let color = '#'; // hex code begins with a pound symbol...
        for(let i = 0; i<6;i++){
            color += hex[Math.floor(Math.random()*16)];
        }
        return color;
    };
 
    let intervalId;
 
     const startChangingColor = function(){
     if(intervalId==null){
         intervalId = setInterval(changebgColor,1000);
         console.log(intervalId);    
     }
     
     
     function changebgColor (){
         document.body.style.backgroundColor = randomColor();
     }
    }
     const stopChangingColor = function(){
     console.log(intervalId);
     clearInterval(intervalId);
     intervalId = null;
     console.log(intervalId);
     }
 
 
    document.getElementById('start').addEventListener('click',startChangingColor)
    document.getElementById('stop').addEventListener('click',stopChangingColor)
     