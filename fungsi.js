function hitung(){
    var bb=String(document.kalk.berat.value);
    var tb=String(document.kalk.tinggi.value);
    var tb2=tb/100;
    var ideal;
    var bmi;
    const kelamin=document.querySelector('#gender');
    
    if (kelamin.value==1) {
        ideal=(tb-100)-((tb-100)*10/100);
        document.getElementById("hasilideal").innerHTML=ideal;
    }
    if (kelamin.value==2) {
        ideal=(tb-100)-((tb-100)*15/100);
        document.getElementById("hasilideal").innerHTML=ideal;
    }

    bmi=bb/(tb2*tb2);

    if (bmi<18.5) {
        document.getElementById("hasilbmi").innerHTML="Kurus";
        document.getElementById("hasilbmi2").innerHTML=bmi;
    }
    if ((bmi>=18.5)&&(bmi<=24.9)) {
        document.getElementById("hasilbmi").innerHTML="Normal";
        document.getElementById("hasilbmi2").innerHTML=bmi;
    }
    if (bmi>=25) {
        document.getElementById("hasilbmi").innerHTML="Obesitas";
        document.getElementById("hasilbmi2").innerHTML=bmi;
    }

}