//1. 输入：“get1_install2_app3_list4_by5_android6”,输出get1InstallApp3ListBy5Android
let str = "get1_install2_app3_list4_by5_android6";
let _str = str.replace(/\d*[24680]/g,'');//去掉偶数
let newStr = _str.replace(/\_+[a-z]/g,(str)=>str.substr(-1).toUpperCase());//下划线后转大写
console.log(newStr)

//2.不能使用任何循环控制语句和迭代器的情况下实现一个0到1000的数组赋值
let arr = new Array(1000).keys();
let newArr = Array.from(arr);
console.log(newArr);

let array = [...Array(1000).keys()]
console.log(array)

//3. 判断两个对象（注意特殊对象的处理）找出不一致的是哪个变量，返回的格式类似："root变量-父变量-...-不一致的变量"的字符串
let obj1 = {
  name:"xiaoming",
  age:21
};
let obj2 = {
  name:"xiao",
  age:21
}

function verificationObj (x, y,deep) {
  let result = "obj2";
  let k = '';
   if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
     Object.keys(x).forEach((key) => {
     
      if(typeof x[key] === "object"){
        verificationObj(x[key], y[key],deep+1);
       }
      if(x[key] !== y[key]){
        result += `-${key}`
        if(deep >1){
          k = key;
          result += `-${k}`
        }
     }
     })
  }
return result;
}
console.log(verificationObj(obj1,obj2,1))