// thong bao
// function ine(){
//     document.getElementById("name").setCustomValidity("huythu2444444444444444");
// }

// varibale:
// var: bien toan cuc 
// let: bien cuc bo, co the thay doi gia tri, khai bao 1 lan
// const: bien cuc bo, khong the thay doi gia tri, khai bao 1 lan

// javascipt co 8 datatypes: 
// 1 String   var huy = "huythu2";
// 2 number var huy = 2;
// 3 Bigint 
// 4 Boolean var huy = true;
// 5 Undefined
// 6 null;
// 7 Symbol;
// 8 Object:
    // 8.1: An object const huy = {atributes: "Value",..};
    // 8.2: An array counst huy =["value",...];
    // 8.2: Date const date = new Date("2022-12-27");

// function in java la 1 khoi lenh duoc goi ra de lam 1 nhiem vu nao do.
// syntax: function name(parameter){}

// Object: Cach truy cap cac phan tu trong object syntax: objectName.propertyname; or objectName["propertyname"] ;
// Trong object co the chua cac method chung ta truy cap vao cac phuong phap do bang cach: objectName.methodname();
// Các giá trị trong object có thể là 1 object khác,1 array;
// Hầu hết các kiểu giữ liệu trong java script là object. 1 so kieu giu lieu thuong dung nhu string number boolean co the là object neu đc khai báo với keyword new ;
// Các trường hợp ko phải object là các kiểu giữ liệu nguyên thủy :
// string
// number
// boolean
// null
// ndefined
// symbol
// bigint
//vòng lặp for(let varibale in Object){} để biểu diễn đối tượng
//trong object co thuoc tinh get va set
//   Get va Set trong object:
// const quanghuy = {
//     firtName: 'Quang',
//     lastName: 'Huy',
//     get fname(){
//         return this.firtName;
//     },
//     set fname(newname){
//         this.firtName = newname;
//     }   
// }
// console.log(quanghuy.fname);
// quanghuy.fname='Van';
// console.log(quanghuy.firtName);
// them get va set cho object co the dung thuoc tinh Object.defineProperty(ten doi tuong, "ten cua get hoac set"){get||set : function(){this.}},

// Object Constructors co tham so: 
// function quanghuy(first, last,age,address){
// this.firstname = first;
// this.lastname = last;
// this.age = age;
// this.address = address;
// }

// const huy = new quanghuy('Van','Huy',20,'144pkkqtthn');
// console.log(huy.firstname + ' '+huy.lastname+' '+huy.address+' '+huy.age);
// them gia tri vao object 
// them thuoc tinh: tendoituong.tenthuoctinh = value;
// them method vao object: tendoituong.tenmethod = funcation(){...};
// Thuoc tinh prototype trong object constructor dung de them 1 thuoc tinh hoac 1 method vao cocstructors
// function huy(name, address,age){
//     this.name = name;
//     this.address = address;
//     this.age = age;
// }
// huy.prototype.national = "Vietnam";
// const quanghuy = new huy('vanhhuy','144pkksthn',20);
// console.log(quanghuy.national);

// Object iterables : Cac doi tuong lap lai nhu string, array
// su dung vong lap for...of
// const huy = 'nvqhuy co len';
// for(const x of huy){
//     console.log(x);
// }

// iterator là định nghĩ cách tạo ra 1  chuỗi giá trị từ 1 đối tượng và method next() là method để một object trở thành 1 iterator
// method next() sẽ trả về object với 2 tính chất value và done(true or false) true khi iterator hoàn thành, false khi iterator chưa hoàn thành
// function quanghuynum(){
//     let huythu = 0;
//     return{
//         next: function () {


//             huythu +=1;
//             return{value:huythu,done:false};
//         }
//         };
//     }

// const huy = new quanghuynum();
// console.log(huy.next().value);
// iterator khong the su dung voi for...of . Muon su dung chung ta phai su dung voi ham Symbol.iterator
// const huy = new Object;
// huy[Symbol.iterator] = function(){
//     let huythu = 0;
//     let done = false;
//     return{
//         next(){
//             huythu+=1;
//             if(huythu>2){
//                 done = true;
//             }
//             return{value:huythu,done:done};
//         }
//     }
// }

// for (const n of huy) {
//     console.log(n);
// }
// const huy2 = huy[Symbol.iterator]();
// while(true){
//     const result = huy2.next();
//     if(result.done){
//         break;
//     }
//     console.log(result.value);
// }

// object set la tap hop chua tat ca cac kieu giu lieu nhung moi gia tri chi ton tai 1 lan trong set
// Tao sets:
// const huy = new Set(["NVQ",'Huy',20]);
// Method in sets
// method add() them phan tu vao sets
// huy.add(144);
// method delete() xoa phan tu khoi sets
// huy.delete(20)
// method has() kiem tra phan tu da ton tai:
// method clear() xoa het cac element trong set
// method forEach() vong lap truy cap cac phan tu trong sets
// huy.forEach(function(hs){
//     console.log(hs);
// })
// method values() tra ve iterator chua value trong sets
// for(const v of huy.values()){
//     console.log(v);
// }
// method key();
// method entries() tra ve cac cap gia tri [value , value] thay vi cac cap [key , value] giup sets tuong thich voi maps
// TRONG SETS KHONG CO KEY!!!

// object maps;
// Map tuong tu nhu sets nhung map se giu du lieu theo huong keys va value.
// key co the la moi kieu du lieu;
// map se ghi nho dc thu chen vao cua keys
// map co cac method tuong tu nhu sets
// const huy = new Map();
// huy.set('Ho','Nguyen');
// huy.set('Ten','Huy');
// console.log(huy.get('Ho'));
// console.log(huy.get('Ten'));
// huy.forEach(function(value , key){
//     console.log(key+' '+value);
// })
// for(const v of huy.keys()){
//     console.log(v);
// }
// for(const v of huy.values()){
//     console.log(v);
// }
// // co the su dung object nhu la 1 key
// const huyname = {name: 'Van',name2:'Quang'};
// huy.set(huyname,20);
// console.log(huyname.name)
// console.log(huy.get('Ho')+' '+huy.get(huyname["name"])+' '+huy.get(huyname.name2)+' '+huy.get('Ten'));


// js event Su kien la nhung tuong tac giua browser hoac user voi sever 
// 1 so event thuong dung :
// -onchange: Thay doi phan tu html
// -onclick: event say ra khi nguoi dung click vao phan tu html
// -onmouseover: 
// -onmouseout:
// -onkeydown: event say ra khi nguoi dung nhan 1 phim tren ban phim
// -onload: Browser load xong 1 page

// js html Dom (document object model)
// html document
// Dom element :
// tim kiem element bang Id 
// function getdomelement (){
// const hoc = document.getElementById("h12");
// document.getElementById("demo").innerHTML = "The text from the intro paragraph is: " + hoc.innerHTML;   
// }
// tim kiem element bang class name 
// const hoc2 = document.getElementsByClassName("huy3");
// tim kiem element bang tag name
// tim kiem element bang css selector
// tim kiem element bang object collection