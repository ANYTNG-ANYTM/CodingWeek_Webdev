let one, two, three, four, five, six, seven, eight, nine, ten = [];

function doSomething(Data){
    console.log(Data);
  }
 
  fetch('https://coding-week-2024-api.onrender.com/api/data')
     .then(data => data.json())
     .then(function(data){
        console.log(data);
        one = data[0];
        two = data[1];
        three = data[2];
        four = data[3];
        five = data[4];
        six = data[5];
        seven = data[6];
        eight = data[7];
        nine = data[8];
        ten = data[9];

        const img1 = document.querySelector('.img1');
        img1.src = one.image;
        const img2 = document.querySelector('.img2');
        img2.src = two.image;
        const img3 = document.querySelector('.img3');
        img3.src = three.image;
        const img4 = document.querySelector('.img4');
        img4.src = four.image;
        const img5 = document.querySelector('.img5');
        img5.src = five.image;
        const img6 = document.querySelector('.img6');
        img6.src = six.image;
        const img7 = document.querySelector('.img7');
        img7.src = seven.image;
        const img8 = document.querySelector('.img8');
        img8.src = eight.image;
        const img9 = document.querySelector('.img9');
        img9.src = nine.image;
        const img10 = document.querySelector('.img10');
        img10.src = ten.image;

        const typ1 = document.querySelector('.type1');
        typ1.innerHTML = one.type;
        const typ2 = document.querySelector('.type2');
        typ2.innerHTML = two.type;
        const typ3 = document.querySelector('.type3');
        typ3.innerHTML = three.type;
        const typ4 = document.querySelector('.type4');
        typ4.innerHTML = four.type;

        const head1 = document.querySelector('.head1');
        head1.innerHTML = one.headline;
        const head2 = document.querySelector('.head2');
        head2.innerHTML = two.headline;
        const head3 = document.querySelector('.head3');
        head3.innerHTML = three.headline;
        const head4 = document.querySelector('.head4');
        head4.innerHTML = four.headline;
        const head5 = document.querySelector('.head5');
        head5.innerHTML = five.headline;
        const head6 = document.querySelector('.head6');
        head6.innerHTML = six.headline;
        const head7 = document.querySelector('.head7');
        head7.innerHTML = seven.headline;
        const head8 = document.querySelector('.head8');
        head8.innerHTML = eight.headline;
        const head9 = document.querySelector('.head9');
        head9.innerHTML = nine.headline;
        const head10 = document.querySelector('.head10');
        head10.innerHTML = ten.headline;

        const date1 = document.querySelector('.date1');
        date1.innerHTML = one.date;
        const date2 = document.querySelector('.date2');
        date2.innerHTML = two.date;
        const date3 = document.querySelector('.date3');
        date3.innerHTML = three.date;
        const date4 = document.querySelector('.date4');
        date4.innerHTML = four.date;
        const date5 = document.querySelector('.date5');
        date5.innerHTML = five.date;
        const date6 = document.querySelector('.date6');
        date6.innerHTML = six.date;
        const date7 = document.querySelector('.date7');
        date7.innerHTML = seven.date;
        const date8 = document.querySelector('.date8');
        date8.innerHTML = eight.date;
        const date9 = document.querySelector('.date9');
        date9.innerHTML = nine.date;
        const date10 = document.querySelector('.date10');
        date10.innerHTML = ten.date;

    })

function arrow(){
    const lol = document.querySelector('.navTabs');
    lol.style.display = "none"
    const lool = document.querySelector('.money');
    lool.style.display = "inline"
}

function back(){
    const lol = document.querySelector('.navTabs');
    lol.style.display = "inline-flex"
    const lool = document.querySelector('.money');
    lool.style.display = "none"
}

function search(){
    const search = document.querySelector('.navTabs');
    search.style.display = "none"
    const srch = document.querySelector('.srch');
    srch.style.display = "inline"
}

function back1(){
    const loool = document.querySelector('.navTabs');
    loool.style.display = "inline-flex"
    const bck = document.querySelector('.srch');
    bck.style.display = "none"
}

function message(a){
    if (a==1){
        alert("CONTENT : " + one.content);
    }
    if (a==2){
        alert("CONTENT : " + two.content);
    }
    if (a==3){
        alert("CONTENT : " + three.content);
    }
    if (a==4){
        alert("CONTENT : " + four.content);
    }
    if (a==5){
        alert("CONTENT : " + five.content);
    }
    if (a==6){
        alert("CONTENT : " + six.content);
    }
    if (a==7){
        alert("CONTENT : " + seven.content);
    }
    if (a==8){
        alert("CONTENT : " + eight.content);
    }
    if (a==9){
        alert("CONTENT : " + nine.content);
    }
    if (a==10){
        alert("CONTENT : " + ten.content);
    }
}