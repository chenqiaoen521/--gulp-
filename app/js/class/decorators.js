{
  let log=(type)=> {
    return function(target, name, descriptor) {
      let scr_method = descriptor.value;
      descriptor.value = (...arg)=>{
        scr_method.apply(target,arg);
        console.log(`log ${type}`)
      }
    }
  }
   class AD {
    @log('show')
    show() {
      console.log('ad is show');
    }
   }
   new AD().show();
}