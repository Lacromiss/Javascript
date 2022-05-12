 inp.addEventListener("change",function () {
    for (let i = 0; i < this.value.length; i++) {
        if (!isNaN(this.value[i])) {
             this.nextElementSibling.classList.add("d-block")
               return;
           }
       }
     this.nextElementSibling.classList.remove("d-block")
});