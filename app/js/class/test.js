{
  let a,b;
  ({a,b} = {a:1,b:2})
  console.log(a,b)
}

{
  let a,b;
  [a,,...b] = [1,2,3,4,5,6]
  console.log(a,b)
}

{
  let o = {a:42,q:true};
  let {a,q} = o;
  console.log(a,q);
}

{
  let metaData = {
    title: 'abc',
    test: [{
      title:'aaa'
    }]
  };
  let {title:esTitle,test:[{title:cnTitle}]} = metaData;
  console.log(esTitle,cnTitle);
}