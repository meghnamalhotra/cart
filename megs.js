 tab = [];
 tab2 = [];

 var arr = [{
         name: 'Apple',
         category: 'Fruit', // FRUITS(ARRAY OF OBJECTS)
         MRP: 50,

     },
     {
         name: 'Melon',
         category: 'Fruit',
         MRP: 60.5,

     },
     {
         name: 'Papaya',
         category: 'Fruit',
         MRP: 44.90,

     },
     {
         name: 'Canberry',
         category: 'Fruit',
         MRP: 100,

     },
     {
         name: 'Strawberry',
         category: 'Fruit',
         MRP: 70,

     },
     {

         name: 'Grapes',
         category: 'Fruit',
         MRP: 40,

     },
     {
         name: 'Banana',
         category: 'Fruit',
         MRP: 30,

     },
     {
         name: 'Kiwi',
         category: 'Fruit',
         MRP: 80,

     },
     {
         name: 'Mango',
         category: 'Fruit',
         MRP: 50,

     },
     {
         name: 'Orange',
         category: 'Fruit',
         MRP: 60,

     }
 ];

 var arr2 = [{
         name: 'Pepsi',
         category: 'Drinks', //DRINKS(ARRAY OF OBJECTS)
         MRP: 30,

     },
     {
         name: 'Fanta',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'Limca',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'Dew',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'Coke',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'Sprite',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'PaperBoat',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'Mirinda',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'MixJuice',
         category: 'Drinks',
         MRP: 30,

     },

     {
         name: 'PineappleJuice',
         category: 'Drinks',
         MRP: 30,

     }
 ];

 var arr3 = [{
         name: 'Potato',
         category: 'Vegetables', //vegetables(array of objects)
         MRP: 20,

     },

     {
         name: 'Tomato',
         category: 'Vegetables',
         MRP: 30,

     },


     {
         name: 'Onion',
         category: 'Vegetables',
         MRP: 20.5,

     },

     {
         name: 'Brinjal',
         category: 'Vegetables',
         MRP: 32.75,

     },

     {
         name: 'Capsicum',
         category: 'Vegetables',
         MRP: 25,

     },

     {
         name: 'Ginger',
         category: 'Vegetables',
         MRP: 10,

     },

     {
         name: 'Garlic',
         category: 'Vegetables',
         MRP: 10,

     },

     {
         name: 'Beans',
         category: 'Vegetables',
         MRP: 15.75,

     },

     {
         name: 'BottleGourd',
         category: 'Vegetables',
         MRP: 10.6,

     },

     {
         name: 'BitterGourd',
         category: 'Vegetables',
         MRP: 10,

     }
 ];

 var arr4 = [{
         name: 'Milk',
         category: 'Dairy', //Dairy Products(array of objects)        
         MRP: 40,

     },

     {
         name: 'Curd',
         category: 'Dairy',
         MRP: 20,

     },

     {
         name: 'Eggs',
         category: 'Dairy',
         MRP: 20,

     },

     {
         name: 'Cheese',
         category: 'Dairy',
         MRP: 50,

     },

     {
         name: 'Cream',
         category: 'Dairy',
         MRP: 40,

     },

     {
         name: 'ButterMilk',
         category: 'Dairy',
         MRP: 40,

     },

     {
         name: 'CottageCheese',
         category: 'Dairy',
         MRP: 90,

     },

     {
         name: 'Ghee',
         category: 'Dairy',
         MRP: 70,

     },

     {
         name: 'Yogurt',
         category: 'Dairy',
         MRP: 20,
     },

     {
         name: 'Khoa',
         category: 'Dairy',
         MRP: 30,

     }




 ];
 var len;
 var l = arr.length;
 var l2 = arr2.length;
 var l3 = arr3.length;
 var l4 = arr4.length;
 var func1 = () => {
     /* var Row =
        "<tr><th>NAME</button></th><th>CATEGORY</th><th>MRP</th>";
    for (i = 0; i < l; i++) {
        Row = Row + "<tr><td>" + arr[i].name + "</td><td>" +
            arr[i].category + "</td><td>" + arr[i].MRP + "<td></td>" + "</tr>";
    }
  
    for (i = 0; i < l2; i++) {
        Row = Row + "<tr><td>" + arr2[i].name + "</td><td>" +
            arr2[i].category + "</td><td>" + arr2[i].MRP + "<td></td>" + "</tr>";
    }
    for (i = 0; i < l3; i++) {
        Row = Row + "<tr><td>" + arr3[i].name + "</td><td>" +
            arr3[i].category + "</td><td>" + arr3[i].MRP + "<td></td>" + "</tr>";
    }
    for (i = 0; i < l4; i++) {
        Row = Row + "<tr><td>" + arr4[i].name + "</td><td>" +
            arr4[i].category + "</td><td>" + arr4[i].MRP + "<td></td>" + "</tr>";
    }
    document.getElementById("table").innerHTML = Row;
}*/




     var str = document.getElementById('txt').value;

     var Row = "";


     Row =
         "<tr><th>NAME</th><th>CATEGORY</th><th>MRP</th><th>QUANTITY</th>";
     for (i = 0; i < l; i++) {
         var re = new RegExp(str, "i");
         var res = re.test(arr[i].name);
         if (res == true) {

             Row = Row + "<tr><td>" + arr[i].name + "</td><td>" +
                 arr[i].category + "</td><td>" + arr[i].MRP + "<td><input type=number min=0 max=5 id=" + arr[i].name + "></td></tr>";

             tab.push({
                 name: arr[i].name,
                 category: arr[i].category,
                 MRP: arr[i].MRP,

             });
             // document.getElementById("table").innerHTML = Row;

         } //if loop



     } //for loop



     for (i = 0; i < l2; i++) {
         var re = new RegExp(str, "i");
         var res = re.test(arr2[i].name);
         if (res == true) {


             Row = Row + "<tr><td>" + arr2[i].name + "</td><td>" +
                 arr2[i].category + "</td><td>" + arr2[i].MRP + "<td><input type=number min=0 max=5 id=" + arr2[i].name + " ></td></tr>";

             tab.push({
                 name: arr2[i].name,
                 category: arr2[i].category,
                 MRP: arr2[i].MRP,

             });
             // document.getElementById("table").innerHTML = Row;

         } //if loop



     } //for loop




     for (i = 0; i < l3; i++) {
         var re = new RegExp(str, "i");
         var res = re.test(arr3[i].name);
         if (res == true) {


             Row = Row + "<tr><td>" + arr3[i].name + "</td><td>" +
                 arr3[i].category + "</td><td>" + arr3[i].MRP + "<td><input type=number min=0 max=5 id=" + arr3[i].name + "></td></tr>";

             tab.push({
                 name: arr3[i].name,
                 category: arr3[i].category,
                 MRP: arr3[i].MRP,

             });
             // document.getElementById("table").innerHTML = Row;

         } //if loop



     } //for loop


     for (i = 0; i < l4; i++) {
         var re = new RegExp(str, "i");
         var res = re.test(arr4[i].name);
         if (res == true) {


             Row = Row + "<tr><td>" + arr4[i].name + "</td><td>" +
                 arr4[i].category + "</td><td>" + arr4[i].MRP + "<td><input type=number  min=0 max=5 id=" + arr4[i].name + "></td></tr>";

             tab.push({
                 name: arr4[i].name,
                 category: arr4[i].category,
                 MRP: arr4[i].MRP,

             });


         } //if loop



     } //for loop

     document.getElementById("table").innerHTML = Row;
 } //end of func()



 var func3 = () => {

     /* for (var i = 0; i < l; i++) {
          var x=document.getElementById('arr[i].name').value;
          console.log(x);
      }*/
     len = tab.length;


     var Row =
         "<tr><th>NAME</th><th>QUANTITY</th>";
     for (var i = 0; i < len; i++) {
         let x = document.getElementById(tab[i].name).value;
         if (x > 0) {

             Row = Row + "<tr><td>" + tab[i].name + "</td><td>" + x + "</tr>";
            
            
             tab2.push({
                 name: tab[i].name,
                 category: tab[i].category,
                 MRP: tab[i].MRP,
                 Quantity: x,
                 Price: tab[i].MRP * x,

             });
            

         }

     }
     document.getElementById("table2").innerHTML = Row;

 }



 func4 = () => {
     tab2;
     var len1 = tab2.length;
     console.log(len1);
     var Row1 = "";
     var total = 0;
     Row1 = "<tr><th>NAME</th><th>CATEGORY</th><th>QUANTITY</th><th>MRP</th><th>PRICE</th>";
     for (var j = 0; j < len1; j++) {

         Row1 = Row1 + "<tr><td>" + tab2[j].name + "</td><td>" + tab2[j].category + "</td><td>" + tab2[j].Quantity + "</td><td>" + tab2[j].MRP + "</td><td>" + tab2[j].Price + "</td></tr>";
         total = total + tab2[j].Price;

     }
     document.getElementById("tabbl").innerHTML = Row1 + "GRAND  TOTAL" + " " + "=" + " " + total;

     console.log(tab2);
 }

 var func2 = () => {
     // tab = [];
     document.getElementById('indiv').innerHTML = "";


 }