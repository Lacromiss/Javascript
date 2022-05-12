var kubb= document.getElementById('kubbb')
var gameKub= document.getElementById('gamekubb')
var x=300
var y=300
window.onkeydown=function(event) {
    switch (event.keyCode) {
        case 37:
            x=x-2
            gameKub.style.left=x+"px";
            
            break;
    
            case 39:
                x=x+2
                gameKub.style.left=x+"px";
            
                break;
                case 38:
                    y=y-2
                    gameKub.style.top=y+"px";
            
                    break;
                    case 40:
                        y=y+2
                        gameKub.style.top=y+"px";
            
                        break;
                        case 32:
                            
                            gameKub.style.marginTop="120px"
                            gameKub.style.marginLeft="120px"

                
                            break;
                                          
                      
    }
   
}


