{
  console.log('a', '\u0061');
  console.log('s', '\u20BB7');
  console.log('s', `\u{20BB7}`);

}

{
  let s = '𠮷';
  console.log('length = ', s.length);
  console.log('0 = ', s.charAt(0));
  console.log('1 = ', s.charAt(1));
  console.log('at0 = ', s.charCodeAt(0));
  console.log('at1 = ', s.charCodeAt(1));

  let s1 = '𠮷a';
  console.log('length = ', s1.length);
  console.log('at0 = ', s1.codePointAt(0));
  console.log('at1 = ', s1.codePointAt(0).toString(16));
  
}

{
  let str = "string";
  console.log('includes', str.includes('r'));
  console.log('start', str.startsWith('str'));
  console.log('end', str.endsWith('ng'));
}

{
  let str = 'abc';
  console.log(str.repeat(2));
}

{
  console.log('1'.padStart(3,'10'))// 补白
}

{
  let user = {
    name: 'list',
    info: 'hello'
  };
  abc`i am ${user.name}, ${user.info}`;
  function abc(s, v1,v2) {
    console.log(s+v1+v2);
    console.log(s,v1,v2);
  }
}

{
  console.log(String.raw`Hi\n${1+2}`);
  console.log(`Hi\n${1+2}`);
}