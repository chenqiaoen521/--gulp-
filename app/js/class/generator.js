{
  

  document.addEventListener("DOMContentLoaded", ()=>{
      let draw = function (count) {
    console.log(`剩余${count}次`);
  }
  let residue = function* (count) {
    while (count > 0) {
      count --;
      yield draw(count);
    }
  }
  let star = residue(5);
  let btn = document.createElement('button');
  btn.id = 'start';
  btn.textContent = 'dddd';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click', ()=>{
    star.next();
  },false);

  }, false);
}


{


  function* ajax () {
    yield new Promise ((resolve,reject)=>{
      setTimeout(()=>{
        resolve({code:1})
      },200)
    });
  }

  let pull = function () {
    let g = ajax();
    let step = ajax().next();
    step.value.then((d)=>{
      if (d.code != 0) {
        setTimeout(()=>{
          console.log('wait ... 1000ms')
          pull();
        },1000);
      } else {
        console.log(d);
      }
    })
  }
  pull();
}
