let input = document.getElementById('inp')
input.addEventListener("keyup", function  run() {
  for (let index = 0; index < this.value.length; index++) {
    if (!isNaN(this.value[index])) {
      inp.value = this.value.slice(0, -1);
    }
  }
});
