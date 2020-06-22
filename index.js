

function Create(id){
    var allDivs=[];
    var clock=document.getElementById(id);
    var wrapper=document.createElement('div');
    wrapper.className='wrapper';
   
    for (i =1; i<8;i++){
var div=document.createElement('div');
div.className="line l"+i;
wrapper.appendChild(div);
allDivs.push(div);
    }
    
    clock.appendChild(wrapper);
    console.log(allDivs);
    
    function ukljuci(line){
        line.classList.remove('ugasi');

    }
    function postaviVrijeme(broj){
        for ( i = 0; i < allDivs.length; i++) {
            allDivs[i].classList.add('ugasi');
        }
        switch(broj){
            case 0:
                ukljuci(allDivs[0]);
                ukljuci(allDivs[1]);
                ukljuci(allDivs[2]);
                ukljuci(allDivs[4]);
                ukljuci(allDivs[5]);
                ukljuci(allDivs[6]);
                break;
            case 1:
                ukljuci(allDivs[2]);
                ukljuci(allDivs[5])
                break;
                case 2:
                    ukljuci(allDivs[0]);
                    ukljuci(allDivs[2]);
                    ukljuci(allDivs[3]);
                    ukljuci(allDivs[4]);
                    ukljuci(allDivs[6]);
                    break;
                    case 3:
                    ukljuci(allDivs[0]);
                    ukljuci(allDivs[2]);
                    ukljuci(allDivs[3]);
                    ukljuci(allDivs[5]);
                    ukljuci(allDivs[6]);
                    break;
                    case 4:
                    ukljuci(allDivs[1]);
                    ukljuci(allDivs[3]);
                    ukljuci(allDivs[5]);
                    ukljuci(allDivs[2]);
                  
                    break;
                    case 5:
                    ukljuci(allDivs[0]);
                    ukljuci(allDivs[3]);
                    ukljuci(allDivs[5]);
                    ukljuci(allDivs[6]);
                    ukljuci(allDivs[1]);
                    break;
                    case 6:
                        ukljuci(allDivs[0]);
                        ukljuci(allDivs[3]);
                        ukljuci(allDivs[5]);
                        ukljuci(allDivs[6]);
                        ukljuci(allDivs[1]);
                        ukljuci(allDivs[4]);
                        break;
                        case 7:
                            ukljuci(allDivs[0]);
                            ukljuci(allDivs[2]);
                            ukljuci(allDivs[5]);
                           
                            break;
                            case 8:
                            ukljuci(allDivs[0]);
                            ukljuci(allDivs[1]);
                            ukljuci(allDivs[2]);
                            ukljuci(allDivs[4]);
                            ukljuci(allDivs[5]);
                            ukljuci(allDivs[6]);
                            ukljuci(allDivs[3]);
                            break;
                            case 9:
                                ukljuci(allDivs[0]);
                                ukljuci(allDivs[1]);
                                ukljuci(allDivs[2]);
                                
                                ukljuci(allDivs[5]);
                                ukljuci(allDivs[6]);
                                ukljuci(allDivs[3]);
                                break;
        }

        }
        return{
            setTime: postaviVrijeme
        }
    }
   
   

var br1=Create('clock');
var br2=Create('clock');
var tacke=Create1('clock');
var min1=Create('clock');
var min2=Create('clock');
var tacke1=Create1('clock');
var sec1=Create('clock');
var sec2=Create('clock');


setInterval(function(){
    var sati=new Date().getHours().toString().split('');
    
    
    br1.setTime(+sati[0]);
    br2.setTime(+sati[1]);

},3600);

setInterval(function(){
    var minuti=new Date().getMinutes().toString().split('');
    
    min1.setTime(+minuti[0]);
    min2.setTime(+minuti[1]);
},1000);

setInterval(function(){
    var seconds=new Date().getSeconds().toString().split('');
     
    
    
    sec1.setTime(+seconds[0]);
    sec2.setTime(+seconds[1]);

},100);

function Create1(id){
    var clock=document.getElementById(id);
    var tacke=document.createElement('div');
    tacke.className='tacke';
    tacke.innerHTML=':';
    clock.appendChild(tacke);
    
}






        
    
        
        /*var cars=[];
var id=0;
function SaveCars(){
    var car={
        id:setID(),
        marka:getVal('marka'),
        model:getVal('model'),
        cijena:getVal('cijena'),
        godiste:getVal('godiste'),
        gorivo:getVal('gorivo'),
        stanje:getVal('stanje'),
        slika:getVal('slika')

    }

    if(getVal('marka')===''){
       
        getID('marka').style.cssText='border: 2px solid red;';
        getID('model').style.cssText='border: 2px solid red;';
        getID('slika').style.cssText='border: 2px solid red;';
        getID('godiste').style.cssText='border: 2px solid red;';
       

       
    }
    else {
       
       getID('marka').style.cssText='border:2px solid initial;';
       getID('model').style.cssText='border:2px solid initial;';
       getID('slika').style.cssText='border:2px solid initial;';
       getID('godiste').style.cssText='border:2px solid initial;';
        cars.push(car);
        Read();
    }
   
    
   
    console.log(cars);
    
}
function getID(id){
return document.getElementById(id);
}

function getVal(id){
    return document.getElementById(id).value;
}
function setID(){
    return ++id;
}

function ResetVal(id){
   return document.getElementById(id).value='';

}
function Clear(){
    var fields=['marka','model','cijena','godiste','gorivo','stanje','slika'];
    for(field of fields){
        ResetVal(field);
    }

}

function Read(){
    var div =document.getElementById('sidebar');
    for(i=0;i<cars.length;i++){
        var div1=document.createElement('div');
        div1.classList.add('result');
        var h4=document.createElement('h4');
        h4.innerHTML=cars[i].marka+''+cars[i].model;
        var img=document.createElement('img');
        img.src=cars[i].slika;
        img.style.cssText="width:150px;";
        var h5=document.createElement('h5');
        h5.innerHTML=cars[i].cijena+" KM "+cars[i].gorivo+''+cars[i].godiste;

    }
    div.appendChild(div1);
    div1.appendChild(h4);
    div1.appendChild(img);
    div1.appendChild(h5);
    
}





var arr=['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIWFhUXGRUXGBgYFhUYGBYXFxYXFxcYGBgYHSggGB0lHRcYITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLy0tLy8vLy0vLS0tLy0tLS8tNTUtLS0tLS0tLS0tLS0tLS0tLTUtLS0tLS81LS0tLf/AABEIAM0A9gMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABAEAACAQIEAwYDBQcEAQQDAAABAhEAAwQSITEFQVEGEyJhcYEykaEjQlKx8AcUM2JywdEVguHxoiRDU5IWY8L/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMBBAUG/8QAMREAAgIBAwIEBAUEAwAAAAAAAAECEQMSITEEQRMiUZFhcaHwFIHB0eEFQrHxIzJS/9oADAMBAAIRAxEAPwDUkUeWl5KAr5JI9way0cU4RSStDRtjLCjApRFKVaU0RFLCUtVp5UrVExyGVSK552s4e+HxPf25XMRcRh919m+u46NXSHFVnaTAi7hnWJKguPbce6z9Kv08tE/gRyrVGxHZbjoxVrMRFxTluL0PIj+UjUfLlTvari4wmFuX4BYABByLsQqj0kz6A1zHhnE3wWJFwSV0Dr+O2efqN/UedXX7W+Jq9jDJbYMtwtdBGxVRA+rfSuj8MvFS7Mn43kfqc4xOKuX7he65d2Mkk/QdB5Ur92KGD6ik8O/ij3q/uYUMuvt5V6WTLoaXY4uWZtFM6elSsPcCOc2xBMcidYnqJ5UV22VY8xrNNX74YD8Qn3FVTsZM0XDsSzgh28DGW/Fc5RPIbCafu8QXvHvGBlVRp8IAIIReswJ8gBz0ruHoSik6KBp+J26DoOU9J9+n9huwC92HxCyTlbKfnB66cvM1ydT1EMS33b4XqWj6mEV7iXgt2UYwd4K5lBT5aa12XhOPOJsZ3H2lvIrEcyQJY+4+tc+/azg1tYmzcXUsjKR/QZB+TR7CrL9nXHFQ3Ldw6NbczrqwZFQAc+fzPSuTDLxcSk9rW/zX8nQ5XH49jUcXx4sW8xEsdEX8Tf4qr4HwtnYYq8ZZiSnSBpIHSdv6fOo1rCXMdigpkLrqP/btj4o/mO1bPFqoOVQAqAIoGwCiABUY+aOrsVn/AMfk7vn5Ec0yxpx6aapSZNDbUKUaTSjiWFIJpV1oFN2zJApRkidw9wDvGketSyMoMCSfpUBVE+lTlvaV0wW25GXJBuhuutCnBc10oVFopYzlpOWnaImtoyxphRZKcowtJRtjWSlC3TypS1SjSGoaW3So+dOxRZaZIyxmKMClMaTNAHLu0XCfG9sfHbY5P5kbxKvsDHtWM4gpgTPgkQfuyZYActZPrXTO2BUYgt0sqx9muZaw/aFJIuRAupJ/qHhb+x969LDlto8zJ5ZNFHhVy3ENaTkBzrN4MFiijlDegjWtPbYc4jkRr86r1QqkVPFLRzAxyg/2qqbD+KtficNJUdfyp/AcBzNygdalDqVCNMtVPcPsLwxr14O3wJEAjTSP17V3+wAFrn3ZvCLbWBGkSfOtlYxDldF+ZFebmzvxddbVQPc43+1zFH97EbBAPdiSfyH1pXZHCHIb0f8A67I56/E/qf8ANSf2rcHcOt8rK/DPQiSDp1zH5Vd9lsORaw7iCFsrc92UZD9fmhrJTroY1+Z14357NvwLCiwoQAZgmZ25yBMekkfLzptqd4XfW7h1xAGpt92fUOAfyFNkV1SVY4pel+4idybfIyRTbCnm8qQ6xUGiiGMtJuwKcIOsU3iWygD5+tZVjrkYvWpE7ULBA19qba7rrrTZuE6VsaRSnRNVulLN35fnUeynM70V4zv8qdyoWtw8Q4O00KaWaFQe4y2J1A0BSZpmTQBTiimxT6LWJAw1FOCjVaVlqiQliSKbIpbUg0GoaNJJpTCmyaRjGB7co3fvEHMlrcxoC3keYrH9osc5TIUtBVZgCl3MR4Qp0IBiQDMb1sO2/FLa4y3aY65AGP4WYhrYPtr/ALx10ynE8I3dYgtBAI36kzpO24ruwJxcXJHm50tTM/w9chJnfc9I5ec1puABXMKNdPMEHaPKsmAyAEHf13B18jVpwPiPdmVYAqQw6ZSfEPKCf1y7eoxucXT3Fikma+/gGVtFJg6AHUEan2q14aALpQmCQY0O4GaP10qbwLjeGvlLTgLdyiR90kaHKeciD71G4t9niGYEhfDryGcGSOmxrwmpuWmSou4F9gsVktgkEAkxzZj/AE8hVzgzbID3YjTVtdTsB5zppWSTtJYw+HLuAS06CCSNtTyH5Vl+0PbDvSpPhtJJCT8UqQAfxEg68oMczLQ6WeR8bDtJG87ScZw+Js3sOgUWgrBrxEKjgSGB6KYMiT0GoJoOynHrNq2Et3O8yEJ9r9imUt91ZdyAW5qp26ViE4hdxOW1aYnUuRACgklgZbQvoYM6GYJrV9n+GM2CsuHhDdzHQCBHiLHyYak7EmuvJgjjxONd1sbja4N1wLHLawpD+G2byICrZ9WOhEhYHM7/AOb82cpg8vrXLO23ae2q4fD4a5OVjeuOu5uFYQewkwf5a6hwvHd/hrF87uikx+IaGnhj/wCFXz/P6GytO/UMp7TTFxacvPTAGh8652xkN3m6VBurvJqVcXTyqBiH5DakbLQQw/rR2CC3lSSsUIrEWLExrHvUNmHLnTXempOHXmRrScsWtIVpCwkelClXbmmlCjYzclTSTTWIxKoMzGBIHuxgD50/ctkQdCrCVYbEfrlW6XV9hLV0HaWpa26awwqbFPGOwkpbjcUTGnCKi8RxS2rb3W+FFLH25e+1Uq+BbK/EcWRcQuHnxRnaOSgjT1INWeLs5GI3G4PUHY1zjsdZfEYi9fc+LLmP+64ggeQBA+VdSsWTetZY8SaqeoO61aeJX4a5r/YuukpMqHNJQSQOpijdCDBBkcudReN4juMHib7JOS24GbQZmEAfXb251y48byTUS0pKMbOSY3BPj8dfCsqg3LzvcbRLdq2T42I1gIoA6nKOdDiOKU4e4isbigwHIytdAPxRJy+IHnspOmwq+D8Z7rv0bQX7YQnbKy3bdwctPgI+VRmNxbHdMylQTEAyAdYzbEEyY/lPKveeNP8AI8ye7SZKbh2ZLajQwOoknXX8qVxJ7T6GwyXvGZRlWWYfeBE5ZA01ESBqS1S+C8TAjMBKwPUf2NbA8Uwptz3cuuokQAfUcorkn1E8UtlaZsccZrz9nZzfh+Eui4hBKkkAHz5emtbnhWI70Nh7hU94YN03IZCIyZQywSpnw85jSqriGMW9myW1OsE/CJI+FI6CJPnzq67A3wLwzNoWG+sNoB9Y/Op9RO8eprceMknRlO1PBbtq93ZcuQoOaGVT0yqxO351F4Tlsy12wbjsCAWYwVP8sf529RXbu0vDEa2XxVtWRTGdJD2pMBgRuDpIquvcETDtbu2odGU+I9DrFRxf1JwirW4TxQntLgq/2bYC4cVdvX7cNeBuaIoADNoDHwbzl6RIqFwTFrbwl6ywHc94tps2ZhbYs9m8Sq6wQlg6c7k9RWs4l21s4SwWyAMQcqqF8TR+XUmuPYXiLPh8YLjEMzKx0MFrjBiTA01tgj1p8GN5tUpcOvp+w2ouu2tx17izicrYm0QFxCmTfw7oDbY3AfGJEqTJ3mN26b+z/iKrwy0buid93QO4Uu0KfJcxA8p8q4txXiYxFzCoDK2bYWecZ2cg6nYGNOprpWAxdu1wVbJbK1xBdG85xfA28soM12adK3GT1KjfXUgkHlpTJJOwgVJtYu1fllvWs6j7Rc4m2djm6a021h2+GB6z9B/mK87LjcGUjNMg4jeOVR/3Yt8Kk+gJpPajB3lsN3IZ7og+o1kACJ6e9YYXHD27wxl67eLLFtXjuyBOUrOVYMCPhPpSxxxauTOjGpT2ibW9hXG6n5God0keXrWwu4nvVDozqQIbKxUZtNehM89elUPEuMm2IOLDdVdLd0D1yJI+dZJYm6Un7fyLDNNunH79itsyfSpdx4WqHEdvbKkZsIl2dCbRuWSPPKRB/WtXPEMVY7lcTbf7FhJzfFbYRKPGx/WtbPpZxWpbr6j+Im6aojk9T9YoVzvtPxM4l8okWl+EdTtmPn06D1NCuiH9PbjcnTJy6unSRrO3uNKi1aB3Jc/7YC/Un5VsuAXla0IhlZVc2+YzCT/SQSRI+tcu7SY7vMVcO4TwDp4N/rmrpfZG9bu4Wxc7tMxTKx8QJuWzkY6HnAP+4VssTjhjX3ZFzTbstv3ePEplDz5g9GHI05NLDhTKqNdxLEHyIJpRVcpZTAGrAkSnvzHnXNBKXHP3wGv1GGrFduscbhTCWgXYkMyqCxP4Vgb/AIj6CtuLeYSDA69R1E/n8pqHbuWMMSLSpnJzXTmObKfiZmMs8bxOkz1q8I6fMzHPsiD2I7L3bVlu9QW3d/FJUtkyrA8JMeIExPSr+xwqzbJuPeZivi0JVQB/Ty9TVWO1uFbMq3C7L91VOvvt865X2/7VXMQ5tBsttTqik5Sf5vxR508IqWTaO/x3+nArUqtukdB4/wDtWwtknuU79uqkBZ/rgztyrEftP7cPibSWVXJbe2Lp/mPeLt5AZxrudawGap/afVMHdHwHDi2T0e1NtgRy8SN66kV6Si1yyO3Yo7VrYnQfrarHhFkP3dpv/cvIImDlYpnOn8oEf1GofDLWYsTqFWfrA+pHyqRYfuLtlySX71WYD7qBhp6nU+kcyaZq1QrdG87Z8FsLbw1+1aS0GN6w4QAAXLbsyGBzKGfRRWeQlvsgdIl25+QFXPEsOmIcNbuTbYyzBgRbIgF8k75QQQPEco6aUuIsnD3An3sltmI1BdkBcDyDH5RXFkhJR+QjncnJFZxC09poVyMgd1jYwC0EbHarDgvGDZcPlkiHCkGc+WUXXlmyn0NKxSi4QVMMsETt6EdD/c0nDhluqGRmZAFCkp4QBAHeAZgoWIOpAjXQVLWpw0y5MTbkdK7KcKxLO3f4lrqYizh7zyWyxcFwm2qk6fCskRp61cYu2mHP7rcJ7twWsv8AhP3kJPTQif7VWdnOKlFgsC3M7BYUABegAAAHkTuaGN4mmMx+Fwx1AYvc12AWB8y0fKvJnj8Wbpftsjrt7WV2N4Ev7/hEIFxWZWIbXw2zJDTy39fnVX28CWuOOrKDbv27HejYFCDbc+ZCiesgEbVfdlFZ713E4gx3RNlDm0+ykXSDzHhInmXfppzTjXEzi8dmdzmZVRmjLBtyGZB91fvidRMHaT6/RKWlqXYSTpolY/BW1c/Zm26ZsPcKhe7d7RyZwJBRisEjbmJ1iYmAxGNv4bC4dpyWlFxvu210JLEdGLAAaztTWMxdzHYnu8Ms3MWtq7B+G2wLozsR8MIdfQDXQV2jsn2ew/D7AtWtzrcc/Fcb8TdB0Gw+ddcubYeJSpDfZPsfZwayTnut8Tka+SqPuj6nma0oE7CBUZ8co0/Xt1ocV43aw9o3brQo2G5Y8lUczXNUW9mK5SfIriDIiFrhCqNSWMAe/Kuf8Z/aBYQnubebrdYRMdM2482geRrJduu2zXmBeQu9uyDoOjP1b6DlzNYaxh8RjbhABIUF25JbQbsxOg9TqeU7Vv4SE/NMrF6TX8W/aYzk5UNz1YhB6Db5AVmLvFsXiGzBso6KAFA/qbf2Na/gHYy2/DjikXPfUuSjDMuVHKEgcyApbWR5bVheIu5c52JPTl5QBpVMUMSbUEUlOdbvb4B3EgnvMQSeiszfXYVK4cpkeJiDDHU7H4fU/F6GqW4kVa8ExcSDsND1gmV/8pH+4V0US1FpeuDrA2FCtH2a4SrrcvX1GQMltVIkBipdp6sAE128RA2MihyMUTPIfiPka2v7NeKHLfw+5XLfQc4JFu77T3R+dc4GM86vuw7smI78fwkDC8zHKi23Uggsec5SBucugqPUJODGx8nY/wDU0HxEAHUeo13qhvcdTD3DcvNCsAUtnd9f4jiPCvQb7HlWYHa62FN0J4FJFsGc15hzg/w7Snl8TGBIAYHE8V4jcvszOxLMZJ95ry+n6ecZXI63GFNI6zi/2gYJlVbqXoYlWdSVyN/IBJaJ33/KsFg7t29fcWLz93bdibpBEKGgO4G7HYLux5bxnsLhrmIuIk5z5wAoG7NHIefkNyK1N4C0ow9r4QQW2lmj4m9thyHvXZPZU93/AIJqKuo7E26UwwJtNNlwQSQFNq+BmKiNCrqGZQNsrDlWEutJJ6mtXx+/kwxTndKf+BzT9SP91Y+44Gp/7q/Sx2cvU588rekl8Mw3eXAp2hmPoqlm+g+tUt7FM7MSxhhGXllBlVjYAVsOxNrvE4gwEumFcIPO4Y/JY9zWPW34C3IGB5+ldRFcD3B7+XvB1X55HV4+Sml8aSPHOjM0EdFJ/vUHDyDm8z/z9NKmcQuZrKR9xnX/AO3iHz1HtQ+QXBYfvdzK4clXIRWXQKysST5gyWJy7Zm1E1JxHFbT3bT3U+EAODmKllBWRGrDaR/LUjjS4drrNuoIKMkwbeUFmJGpJJb0iKqLtxUJKJuIJ3GrB5BOn3RoNYJqDlqfAicUWtm33isLStmLuyFicqpCwvi1iZM9CKuMNwu491SQCmg/ig3IE+EHbeYnYRWQbF3WECeW3+TTarfzzlJb6+0etcuTDKX9yX3+RWOWC7fU6BYtY62lyLDG47Jke0bbC3B8S5HMmVBAJBgmdNqg4ztClvFXL1u1cQlQDmDhywB1OfVdGHTYeVZwYjFW9SX/AKST8xt+Rq2wXaRb6XLeNUPmW2AzSHBtFwkPoSfGZ/lAnzWEHBXs/Wh9cJOuCHj+1F42kw5cNkBjL8OYiJJgZt2PmTWe4dcK3szHVQ2pPRCNTU+5h7aOxXUCMpmd/wDr9aUXZxEOIN94yWiH8i8+AeeuvsK68UoqPlWws93Z0vsrhk4Zg2xF2ReKLm/EqgfZ2VHJix1826AVa9n+0L4xUWzjMIl/KGNh7V5sxjVc5dZOknIpjzrP45Ti8K2QzcZ1uIGIAuFWBCyxA11G4qgwXCLtjEpeKvY7psxLQOUwhH8TeJAjU1zxyRduT39CnhPg6BxLj62u5f8AhM3ercBJudzdtP3Vwa/xFzfD1HKsN2w7SAtpce6ROUvO/Nsv3V6Dc0ntBjlbK0gKA9wgblnckExoJkmJJgrO9YoXO8cuwmToOp5D0qvT4YrzVRk5VsWHCuHtiboBaXaWLMYVEG9y4eSjkBvoBuK0OP4pbW2MPhZXDqZZjo+KubC4/wDLuQuwgaVUNihbtGyuruQbx5sfu2/6Ruf+aj4hzMdN/U6n/HtV3HUxVLSd67B4fLgcOwjVJjrLGZ/XSuaftT7L9xiVuWVi3eBKgbBhGZfLUg+/lXWOyVvLgMMOli19VH+ZqLx7AnGZLKgNlm40mI0KiNDJPTTffSvNUvCzfMeLcjinBOyD4lktm6tproPdZlJR3GbwFgfAfCRsYqq4YvdXgLqPlVstzJGbwtrlO0yo9q6nbw6W7hVlXMs+JkQt6yRO1LsYe2HDBCNdIXfT9GvQWS0Y0UdrtPbOGXDDD3wqtnzBbYYkm4xmb0HW6degHpRVoMG1/GXLiYLJFrS5dufBn27saGW3Pt5iRRqozb1ORcF4XcxN5LNoEs5iT8KDdmY8gBJPpWk4ti7bBMNh5GGtSVJ0N1hAfEXJ+IsSAq8hHs7wte4wtwyouYhnsoQdBZQ/busfiMJNVVrxeKN9QOij4R/f3rZu9zY7D7rmMnwoogDoBy/586hti0XYGNdYn60/imOWCCB761N4Bgke6M4Hd2gHK/iaYRD5EyT5KRzqG1Nso5NFjhbHcWZCkXLgUsOarEonrrmbzIHKkmz4A/MHXzHMHyqRfxGdySZkk0WIvKttyTpH/JqDT5HxZLnTKLtZjwzKBso26E8vyrMzOpp3FXi7Fjzq/wCyvD0Ft8bdGZbRi2unjunRTroYJ5/hr0IR0Ro5Zu2J4Rizgr2USbly0RcHK3Ks6L5sPCT6x650ZrkrbBIktAExMGPbX5VZcVQZXuRDMZmSZLHqSZnXU0WFxXcpltxmI1OuYyNdth606EexS5T1qTgRLBYBzFRBk6zC6DfU7c5oY28GMn4jy/ufOiwt3IwYbiSPWDB9jB9q0VErjtk23KqTCwpIMKzR4iANI9NN6hYS3J1+R5VbtY8JuiPCbdtJ18bqpJ19Rr0qleQzZSSATr18/wBdaVrYRo0eAAWIH+PrVliceFZQCPbr51lFxL9NAJPoKeKGMxOs/wD8gj864ZdHqlbYmhmtvY5GtkPB6dQfKsjxTaRv1pm7in9vnUe65Iljpy86bB0vhPkdJkcudprSYLCBbMNppmPm5ghflpVLw+wGuAchqZ6D9Ae9XV26SInQfnV8r7I6MS7ssMHxE2VganfqF9KTdxz3Y7xy0n4dp8tOX5amq+yBInal4nEBAzjcCF/qO3yH5mueONOR1TytRogcdxmZu7BmDLHq3+BsKb4f4ZunZPh9f88vfyqvtIWYAbsYqVxG6NLSnwr9T1/P5121tRx2SOHGWDtsWPu0ST7afOpuWcxPmah22GW1l+EEA+TFTmn1Yn5irDFXIQ/L51tCNs9A4TFLbtW1MBUt2x7BQKrv9ZW22bMFLxH9IkJ88xPuK5Rxbtbdu+DOwt5mgbECTAPPTpOlRuJ8QdwtzvNxqJ5jTQctAK8/N07nO7OrHSjv3N52ixtu5da7KhC2SQfvhFYz6yY/pNU9ziN2+64XDfxLmhc7W0+8x6afmOZFZPEY7u7ZS6xXPnbIBrMJkkctVkz+elT+H8T/AHPCO4b/ANRfAWeaW99ehP8Afyq7hoikuRYS1WbHEYxcPbXB4J2t2rRJa4sBrt0/G0wZEz8gBotCuc4jjRKqZPpMQBQrViXdBqQXEsSGuraQnJbtpaB8h4rjepM05w7iVtbo72QoE+EDNPICZA05n28q7BNLO7c/zJk/rzpJwwbxBlE7hiQR5iBrpTNLhiq+UabjuMw9wJ3NxyrAllZi2RgVjeYmTImNBHOS4Q2W0W5uZ9tgPkAfessGyqVXXXeN/wDHpWit3coA/CoHyEf2qco7UEm9OxaW7gn9aVR9pOISe7G27efQH9dKnfvGVZPrWVuOXYnmxn51uOG9ixdJi7QgFiJ5L0zdfOKt3x+XAWLI5vdunzh2XWoVy1mZLQMASJ9AS7fQ/IUXFXXwKgIUBgJ3iZk9CSSfergxHFMQCiKOq/8AiCD9SKjJg2YFmJUchtPn50rA2yTnMCJy5o58wu5+VHxHERoGljvTIRkEKOVKJpu0DUi2hOnLc0ALN8m3lnZw/wAkKz8gKawoBEHYtB9IMfUUqBmaNtY9Kj5T89KGYiY4yo/XwfnP/HtT63NI5x/5HQD1gD51Eu3p18h8xV5gOAYlQLxtgW18ZzOqkgKTMakddRypHJLkaiqx1s2zk3eJPRZ1gf5qvuvMeQA/z9TT+Kvl3Zz94zpy6DXoKYuAcqYWix4SsKzdYA9Bv9T9KfF9ZiRPrSMhCKvt6mJj61Y4HiSqGtYiyjIwgeEAqY0ysKhN9ykXWxHzRJ6fnyqt4td1C9N/M8zU3DmEBJmNfXLt+f0qmaSZpsaNlKyXwxMqvdP3RA82NQeetTzrZAH3T4h59fr9Ki5asTQeGvZD1B0YdRVth7ksgPiUspDdQGGhHXr6VUFOcafrnTuCxfdtMSN46HqKAkifetFrjQDBOaeXiEnXbeaRcx62/g8T/i+6v9I5nz/KouJxrN4Rov1PrTaYY7nwjz/xS1vY1uqFYRO8uS5n7zE86TisSXcnkdh5Db9edKZgqlVMydT5e1FhbMkCj4gP4W2N2E9B/ehUxUjl6elCpue5RRGcMPCPc/r6UHJo0IgCjuTFHcy9hFlZYeoq3Bqrwwg/r9cqmi7r5Ust2anSD4pfhI66f5qotPBn9CpHE7skCo1vaqQWwj5JmFuwW9AvsTLfOAPeo+LOdx0/x/1U3h/BrlwZwVVTsSd/Yf8AFMXsAYJzgQzKB1jc7+nzo1IKIt3Ezov69Ki3F51YNYVV13/P3FRsudvIflTWKLtWtF8wfoYNKXwuD6kSARPLQ6GpmFTNYZRq1tswjWVOjAdetaH/AEjCZQb4aw4VSRnkZyTtmI0gdZDBl1ipyyKL3N0tmMAO56x70UVo7uHwqqV8RE5pnXSQNZjXf5U1YwmGdgi5mcmAoJknkPi507bq3F+wqp8Ne5RW2ysDzGo05jY61YXuK3Y8TsZkQbjE+kbc+lbvgfZTDFSxKDq7eOCvK0h5TPjadRtpFM4+xh8xRWY76nIQw8hEVXH0+TIrr3OXP12HC6k/bc507A6gRSLa+IVp+I8HtK2Yjw+Ryjfc8hp6CowtYRdZbTz5c/vaVOSlF6WnZfFlhlipxexGVZUz6+c8iKaNqdSxMcjtVzh2wjEAsQNOfI+9Tsdw7D925shrrZVYHNGUa5yVUkMRGgBMwx+7B55ScXumi1XwZfFvFuPxEAeg1NRbdvSnsadUHRZ921oq6ILYSTE4Vwrwdm0P9v8AHvSHt5WI5A/SjuLTzjOAQRmiCCY1rQEWrzoCAfCwKsDqpHl+dR7VqSAN6kHCv+H8qJzAKj/cf7CgLEPcC6Jqebf4plwTuSfWlKKUflWGjIFTuHRtzP5c6j2bWYx86mfuy7gkUsmMic4nWhUJLzDQMGoVLSxrYm2KW5phiJ0o+8kUwDlltTz/AF/3TztTFnn0/wC6Nmo7h8CLfaTQnSknelqhMACTVBB796ZvOOskew5U015jM1IbB3APugdJ6+1RVMTP6MED86VUbuEbhOmpnbrNaDA8JFu0zOxW8ICiVygk6iACS408Omjb012f4OrlHcjxGEn4QcxUZogycrERp4Papz4tbt1bbuzKHHeupC5gxUZl3HhVV3BB7vzBC7zlpj23YNqKtgwFlLd7vzeVm/DkyLmIhT8R2ImI1jrUm1xB0xK3laSpt5ZJhkyqdfIrC+gp3tTwJMLfW3bzspDAl8hZmHTKogbddx6Urs/woXL72ruZVtC6X7vLIFuPhzqR8ROkCeoq3Tz6aMPxEpaotPau23x+JzdR48n4UY07W97b3X+C+GFuBHW1LmWvYI5jmZLiRetjq9sExP30nmaq+H282JZFfObGGupYBGYXcTkLSAfiJJYgc/AtRra577La75hbzC2shrkAfat4AuVZYjkNNTTNnDd6ltLKMzXNUUCXaTIygdOukRuBW/hdWOUtS4teqXq9+6925eqqH4lwyrHJPmm+11wn8H+hc8Hvg30V8Z31slu9tsuVVsqGz3GJPhyhQ4bQgwOslgLhfD21XEtZL4zIj5cwXNYSAQSMoJg7QCdRvVDjFvuWtXnuFgyh7ZYMWIIyCfvgnYzBNXvEOz1xLD2lxJe9bAuXrAf7JQ2gVP51gEttLAGAZCdQ8eOMdUklOqrdLlauK5aXG+35XxY5ZMj0ptxu+z7bC+F4ktxNZTuJe+GszopFm4cpjQwR0ifassiFblu6rGC1glpnVurDYnK3nvU4Pi3t/vZ7wIgC/vKSjsI0zMCO8CgasBoBqYGgNy46oGv3mYtNtQ5d8wEDIImddwOdVhFynJxa2jpe/Fer/Pvv6kJVhxpO3crW3Pfgl47HXhxK7aX7VXxDobTjMpXvCCpUyMuWeWgE6b1FDpZxV8WH+xVnyMSSMouDL1zAnLE7wKdxPe2ywxVy4Cpystx8x1UNlaCcxgjTUj2pF/gd45M1i4O9nImmdoEgskysyYneDT+Dijjqc4x1JJb7bf3ffuZHPkeTyQk9Ld7fT9yo4hwy07tcW6FB1CBJC/yhs2okdKGP4SuRWs5mbLLCQQTrmCaBiRAJEaZhvNWGK7I30RmOFvIFBJc24CgDUkzOlS/3YWRbsi8ZYwrOQQysPGOseFJIMaIASduPK4468PIpfLf3o7sM3lvVFx+ZhyabyzV1xvh6pLp8GbKegMsJX+WUYa7EDUzpULVFJSVo2mgKnQmjik5aMmtsyhAp1UnzolWpCClchqDs24mTqaDqZA8pjrSxS4HUyNjSWakS8KbbDLcRZGx2n5UKiGJk6/T6ChS0BCtXSDIo2aST1pFKBpzRy2dP11orhpINExrAGlFKVyPyopo0NMZQ4t9hsB/n1os4J8XhB3KifpI/OkiktWDNG2LZMIhRnjJMsiwwFyAcy3DkKkoQjAmQpkDSqZAJ2Hin6/qam9m8Ylwd3eIyi2yExqAFbLrPwwAIj77mRrMC3hDmAsqbwJhTbBY6mAuWM07chzGkGOnoMsccnGWz5s4uuxSnFOPsdLxuGGLXh+I/Ebdy55d1aL3J/wB1gKf6ql8N4WLV/F3m1DWbWvXvGZn1/wBs+9VHAuOW8Lh/3a82S9bbEDId1FwZgGjY52aN9CDTdvtTbPDhZzxe7koZBElFdF9yuQx10r5XJ0fUpyxY09F6V8tTafypJHsYssHGMpPek3fw/wBjnYvGnuEtED/1j4t1gAGU8aFiPih7bgE7SByFN9m+DXIxNk5lQ5CsMk3Ea9lAJU5suXTIxiSdKgtxzuUwlrD3B3dtLYuwpBY22DkMSNbbMz6edWScXwaX8XcW4uXEJaSCDMo7yWHTIVHtXTlw9RFSlCLqe62d7T+j0/Ph+uy4p424q1cWvTut/mRe0jL+8YNLhT96DWBdNrRCe+SQJ1I3nkSNBoYqO31l1xz5FBlc0nlN698wY2MipY4zZbC4Y3WU37V221yFaclq+plABBzIJ031qd2mwhxF/wDee+t2rJtfG0kzmuOmmxBzCSNh61fpawZoLMmopTXz3/tVcPsvQTOpZMUvBpvy/b3Lbh63StrF37s2DhrXeBhmLO6BlWwJ8DZtdIUDfqMxwHFMr4q/h5At2lFtV0LO92LaeHWPCwC/zHSIAt8B2pSycAiXvs0W3ZxIykh1FvKSQQZUNrO4jzqLjeN20/eWw10K967bdWUMCLa2ltEAEfEZuH384qeDDmtwcH5q7bUpd9ua9lQ880HTbXl37f8Ant+vqT+N8PdOIWb9o20DtZUh2UXBncKwRG1LBWUSIIyHeqbtRgMTbS+5vIyMy5lz5rgbvMqMyFSJBI8WaYan8Pxaw1jAi7di9h7qO0hj4BdOhMasFYk9YHOqftVjrV7E3LqkMGywYMqJOkdRvHpVei6fO8qhNf8AVVbjzpe3uuH2J5s0Y4m4vlrh72/0vdrgldpMIbRw+SEz4dGMBdTkt5idOec/OsxiTlOZTDLBBEaEbGthx66uMOGt4Y969m1kZFks0W7csojVfsyOuo01rI2sIC32/wBlbkaMIZtSCI3G3OOeogkex/T8kYdGvEXm3td+XW3yPP6xZcvU87JKvThX9VuXfEQrYM5mcD7GMtsZFDKWCDNcm6sKuwGWBIMg1kWReWo66j6Sa0PanGqGuWrZ8JIG2pCkGWM66qGGggu4jmc8DXHj4s65CMgoxFBqUlyNDtVBQ4pStTYNAmg0dzUDcpmaE0UA41yjpkmhRQBUdFQoAMUJoqFABRQFHQoAFEaOhQAlWIMgxWx4Px+1dRLeIjvEKnMULd8LauEEgjI4DfFBBgE5YJOPIpJFZKKkqZqdGiPGra+GTc8TElrYP3hB1bxeHnodNZ3pH+vINrY91X2561QRRxTLbhitJ8ovz2iX/wCIcvup77g0hu0AIP2az/Qmn0qjihFbfxfuzNEfRexe2u0CKZFlecHKpO2n/PrVvd4nhxYW4MxUM/d2iykK+W02bJHwli0LOhBPmcVFCKRxvuMtuDQXe0ak/wALryUHy5amf+qL/wDIhp9mv/1T35aVQRRxT2/V+7F0R9F7F7/r1s72V90Q/kBSRxiyfisrE/8Axof7iqSKEVn5v3NpehpcHxi0WtjVArDRVCgiNRmDeGSAPzMCnuOcetpbNjDRrIa4ts2wLZdn7tVYk7tBJjTTKJM5OKMCkeOLdjWxWadTRik0dMYChQoqAFTRUVCgA6KjoUAFQo6FAAoUKFAAoUKFAAoUKFAAoUKFAAoUKFABUdChQAKFChQAKKjoUAFR0KFAAoUKFABUKOhQAKFChQAKFChQAKFChQAKFChQAKFChQB//9k='
,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4M0WelrjZox3oWdQwLXaPNukrhSFSMRev1GfSstaNceZrR4Iw&s',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNoBJOIjg-vdc7oIBXexITW-Be-RdGqQEeJATIAJNVDPmWMwxQeg&s'];
var count=0;
var images=document.getElementById('image');
images.src=arr[count];
function switchImages(){
   
   
    
    images.src=arr[count];
    count++;
    if(count>=arr.length){
        count=0;
    }

console.log(count);


   

   
}
function Back(){
   
    
    images.src=arr[count];
    count--;
    if(count==0){

    }
    
    console.log(count);
    
}
*/