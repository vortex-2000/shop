

    var click=[5,3,3];
    var parsed = "";
        var arr1 = [{
            name: "mask",
            price: 10,
            id:1,
            qt:1
        }, {
            name: "sanitizer",
            price: 100,
            id:2,
            qt:1
        },{
            name: "handwash",
            price: 200,
            id:3,
            qt:1
        }];

        var arr2 = [];

        function check(){
            var count=0;
            for (var j = 0; j< arr2.length; j++)
             {
                 if(arr2[j])count++;
             }

            if(count==0)
            {
                var dev = document.createElement("div");                 // Create a <p> element
                dev.id="empty";
                document.getElementById("dis").appendChild(dev);
                document.getElementById("empty").innerHTML+="YOUR CART IS EMPTY!!";
            }

        }


        function cart()
        {

            $('#dis').empty();

            check();

        for (var i = 0; i< arr2.length; i++) {
            if(arr2[i]){
            var myobj= arr2[i];
            var para = document.createElement("P");
            //para.id=arr1[i].id;
            para.className="para";
            document.getElementById("dis").appendChild(para);

                para.innerHTML += "NAME" + " : " +arr1[i].name + "<br>";
                para.innerHTML += "QUANTITY" + " : " +arr1[i].qt + "<br>";


                var btn = document.createElement("button");
                btn.innerHTML = "REMOVE";
                btn.className="btn btn-danger";
                btn.id=arr1[i].id+100;

                document.getElementById("dis").appendChild(btn);

                btn.onclick = function() {

                    document.body.appendChild(btn);
                    remove1(event.target.id);
                    btn.remove();


                };
        }}
        var par = document.createElement("P");
            par.className="total";
            document.getElementById("dis").appendChild(par);
            var paisa=total();
            par.innerHTML += "TOTAL AMOUNT:" + "  " + paisa;

        }
        function khali()
        {
            var i=0;
            for ( i = 0; i< click.length; i++){
               if(click[i]!=0)
                   {break;}
            }
            if(i==click.length){

                var dev = document.createElement("div");                 // Create a <p> element
                dev.id="empty";
                document.getElementById("bis").appendChild(dev);
                document.getElementById("empty").innerHTML+="SORRY!!! ALL STOCKS ARE OVER";
                return false;}
            return true;
        }

        function shop(){
           $('#bis').empty();

           if(!khali()){return;}
           for (var i = 0; i< arr1.length; i++) {

            if(arr1[i] && click[i]!=0){
            var obj= arr1[i];
            var param = document.createElement("P");
            //param.id=arr1[i].id+20;

            param.className="para";
            document.getElementById("bis").appendChild(param);



                    param.innerHTML += "NAME" + " : " +arr1[i].name + "<br>";
                    param.innerHTML += "PRICE" + " : " +arr1[i].price + "<br>";

                var btnn = document.createElement("button");
                btnn.innerHTML = "ADD";
                btnn.className="btn btn-success";
                btnn.id=arr1[i].id+10;

                document.getElementById("bis").appendChild(btnn);

                btnn.onclick = function() {

                    document.body.appendChild(btnn);
                    add(event.target.id);

                    //document.getElementById("bis").appendChild(btnn);
                     btnn.remove();
                    //cart();
                    //alert("hi");
                    }}}
       }



        function total()
        {
            var sum=0;
            for (var i = 0; i< arr2.length; i++) {
            if(arr2[i]){
            sum= sum+ arr2[i].qt*arr2[i].price;
            }
            }
            return sum;
        }

        function remove1(id2)
        {

            for (var i = 0; i< arr2.length; i++) {
            if(arr2[i]){
            if(arr2[i].id==id2-100){
                 click[i]++;
                 //alert(click[i]);
             if(arr2[i].qt==1)
             {
                 delete arr2[i];
             }
             else{
                arr2[i].qt--;
             }}}}
             //document.getElementById("dis").appendChild(id2);
             shop();
             cart();


            return;
        }



    function add(id) {

        k=id-11;
        click[k]--;
        //alert(click[k]);
        if(click[k]==-1)
        {click[k]++;
            // var wrapper = document.createElement("div");
            // wrapper.innerHTML = '<div class="alert alert-danger" role="alert">'+"LAST PIECE!!!"+'</div>';
            // document.getElementById("alrt").appendChild(wrapper);
            shop();
        return false;}
        id1=id-10;
        //alert(click[k]);
        for (var i = 0; i< arr2.length; i++) {
        if(arr2[i]){
        if(arr2[i].id==id1){
            //if(arr2[i]==undefined){break;}
            arr2[i].qt++;
            shop();
            cart();
            return true;
        }}}


        arr2[id1-1]=arr1[id1-1];
        cart();
        shop();
        return true;
       }





