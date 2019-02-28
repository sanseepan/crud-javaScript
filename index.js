var app = new function () {

    this.el = document.getElementById('products');



    this.products = ["Samsung", "Apple", "HTC", "Lg", "Nokia", "Microsoft", "Huawwei"];

    this.price = [300, 500, 400, 500, 400, 800,300];

    this.desc = ["android 5.0","ios device","android 4.0","android device","windows device","windows device","android 5.2" ];

    //the count function declare in the counter id which mean how many countries are we added


    //************************************

    this.count = function (data) {
        var el = document.getElementById('counter'); //adding place
        var name = 'product';
        
        if (data) {
            if (data > 1){
                name = 'products';  // if we added one more data (products) name becomes plural
            }
            el.innerHTML = data + " " + name;

        }
            else{
            el.innerHTML = "No" + name; // if we added just one data its declare singular name - country
        }

    }


    //************************************

    this.FetchAll = function () {
        var data = " ";

        if (this.products.length > 0) {
            for (var i = 0; i < this.products.length; i++) {
                data += "<tr>";
                data += "<td>" + this.products[i] + "</td>"; //one by one adding rows with products
                data += "<td>" + this.price[i] + "</td>"; //one by one adding rows with price
                data += "<td>" + this.desc[i] + "</td>"; //one by one adding rows with price
                data += '<td> <button onclick="app.Edit(' + i + ')" class="edit-button"> Edit </button></td>'
                data += '<td><button onclick="app.Delete(' + i + ')" class="delete-button">Delete</button></td>'
                data += "</tr>";

            }
        }
        this.count(this.products.length); // this answer will display count id
        return this.el.innerHTML = data; // return all  data - products;


    }

    //************************************************


    this.Add = function(){
        el = document.getElementById("add-name"); // get the element from form input text.
        element = document.getElementById("add-price");
        elem = document.getElementById("add-desc");
        var  product = el.value;
        var price = element.value;
        var desc = elem.value;

        if (product){
            this.products.push(product.trim());  //add new element and trim function make space both side of string(product);

            el.value = "";
        }

        if (price){
            this.price.push(price.trim());  //add new element and trim function make space both side of string(product);

            element.value = "";
        }

        if (desc){
            this.desc.push(desc.trim());  //add new element and trim function make space both side of string(product);

            elem.value = "";
        }

        this.FetchAll();
    }





    //****************************************************

    this.Edit = function (item) {
       var el = document.getElementById("edit-name");// used to display the value in the field
        var element = document.getElementById("edit-price");
        var elem = document.getElementById("edit-desc");

        el.value =this.products[item];   //used to display the fields
        element.value =this.price[item];   //used to display the fields
        elem.value = this.desc[item];

        document.getElementById('spoiler').style.display = 'block';
        self = this;  //self is being used to maintain a reference to the original this even as the context is changing


        document.getElementById('saveEdit').onsubmit = function () {
                var  product = el.value;
                var price = element.value;
                var desc = elem.value;
                
                if (product){
                    self.products.splice(item, 1, product.trim()); //used to display the new list and splice function used to exist deleted item


                }

            if (price){
                self.price.splice(item, 1, price.trim()); //used to display the new list and splice function used to exist deleted item


            }

            if (desc){
                self.desc.splice(item, 1, desc.trim()); //used to display the new list and splice function used to exist deleted item


            }
            self.FetchAll();

            CloseInput();



        }
    }

    //*********************************************************

    this.Delete = function (item) {

        this.products.splice(item ,1);  // delete  a  row

        this.FetchAll();

    }


}

app.FetchAll();


function CloseInput() {
    document.getElementById("spoiler").style.display = 'none';  //function edit-hidden

}

