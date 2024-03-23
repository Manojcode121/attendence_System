let save = document.querySelector("#savedata");
let start = 0;
let savedata = 0;
save.addEventListener('click', () => {
    let saveask=confirm('are you sure you want to save data');
    if(saveask==true){
    let email = document.querySelector("#email");
    let pass = document.querySelector("#pass");
    let leadername = document.querySelector("#leadername");
    let nostudents = document.querySelector("#nostudent");
    let batchname = document.querySelector("#batchname");
    let leadernumber = document.querySelector("#leadernumber");
    start = 1;
    let dataem = email.value;
    let datapass = pass.value;
    let dataleadername = leadername.value;
    let datanostudents = nostudents.value;
    let databatchname = batchname.value;
    let dataleadernumber = leadernumber.value;
    let i = 2;
    let j = 0;
    let details = [dataem, datapass, dataleadername, datanostudents, databatchname, dataleadernumber];
    let info=['Email:','Pass:','Leadername:','No_student:','Batchname:','LeaderNumber:'];
    while (j != details.length) {
        document.querySelector('#show').children[i].innerHTML = info[j] + details[j];
        i++;
        j++;
    }
    localStorage.setItem(`array`, `${details}`);
    if (start==1 &&localStorage.length != 0) {
        let displaycontrol = document.querySelector("#next1");
        displaycontrol.setAttribute("hidden", true);
        document.querySelector("#disc").removeAttribute("hidden", true);
        setTimeout(() => {
            let nextpage = document.querySelector("#show");
            document.querySelector("#disc").style.display = "none";
            nextpage.removeAttribute("hidden", true);
            document.querySelector('.block').addEventListener('click', () => {
                let yes_no = confirm("are you sure to go back");
                if (yes_no == true) {
                    let displaycontrol = document.querySelector("#next1");
                    nextpage.setAttribute('hidden', true);
                    displaycontrol.removeAttribute('hidden', true);
                }
            })
        }, 3000);
    }
}
else{
    //do nothing
}
})
//save cheker
view.addEventListener('click',()=>{
    if (localStorage.getItem('array')==null==true) {
        alert('First Login');
    }
    else{
        console.log('coming');
        let displaycontrol = document.querySelector("#next1");
        displaycontrol.setAttribute("hidden", true);
        document.querySelector("#disc").removeAttribute("hidden", true);
        setTimeout(() => {
            let nextpage = document.querySelector("#show");
            document.querySelector("#disc").style.display = "none";
            nextpage.removeAttribute("hidden", true);
            let k = 2;
            let l = 0;
            let name="";
            let details = [];
            let n=0;
            let m=0;
            let info=['Email:','Pass:','Leadername:','No_student:','Batchname:','LeaderNumber:'];
            let size=localStorage.getItem('array');
            while(n!=size.length)
            {
               if(size[n]==',')
               {
               details[m]=name;
               m++;
               name="";
               }
               else{
                 name+=size[n];
               }
               n++;
            }
            while (l != details.length) {
                document.querySelector('#show').children[k].innerHTML = info[l] + details[l];
                k++;
                l++;
            }
            document.querySelector('.block').addEventListener('click', () => {
                let yes_no = confirm("are you sure to go back");
                if (yes_no == true) {
                    let displaycontrol = document.querySelector("#next1");
                    nextpage.setAttribute('hidden', true);
                    displaycontrol.removeAttribute('hidden', true);
                }
            })
        }, 3000); 
    }
    });
//data checker
let already = document.querySelector("#Already");
already.addEventListener('click', () => {
    if (localStorage.length == 0) {
        alert("please login ");
    }
    else {
        let displaycontrol = document.querySelector("#next1");
        displaycontrol.style.display = "none";
        document.querySelector("#disc").removeAttribute("hidden", true);
        let random = Math.floor(Math.random() * 9);
        setTimeout(() => {
            document.querySelector("#showcase").removeAttribute("hidden", true);
            document.querySelector("#disc").style.display = "none";
        }, random * 1000);

    }
});
let addnewrow = document.querySelector("#addbtn");
let count = 0;
let arrayofname = [];
let checker;
//adding new row
addnewrow.addEventListener('click', () => {
    if (count < 8) {
        count++;
        let name = prompt('enter the name of the students');
        let div = document.createElement('div');
        if (name == '') {
            //we will do nothing when prompt is empty
        }
        else {
            localStorage.setItem(`${name}`, `${1}`);
            div.className = 'one';
            div.innerHTML = name;
            arrayofname.push(name);
            document.querySelector('#studentdetails').append(div);
        }
    }
    else {
        alert('you cannot add above 8 students')
    }
});
//saving data in an array
document.querySelector('#savestudent').addEventListener('click', () => {
    let checkerx;
    checkerx=confirm('are you sure to save');
if(checkerx==true){
    if (document.querySelector("#studentdetails").children.length != 0) {
        let traverse = 0;
        while (traverse != document.querySelector("#studentdetails").children.length) {
            if (document.querySelector("#studentdetails").children[traverse].style.backgroundColor == 'lightgreen') {
                let pres = document.querySelector("#studentdetails").children[traverse].innerHTML;
                let press = localStorage.getItem(pres)
                localStorage.setItem(`${pres}`, `${++press}`);
            }
            else if (document.querySelector("#studentdetails").children[traverse].style.backgroundColor == 'pink') {
                let abs = document.querySelector("#studentdetails").children[traverse].innerHTML;
                let abss = localStorage.getItem(abs)
                if (abss == 1) {
                    //do nothing
                }
                else {
                    localStorage.setItem(`${abs}`, `${abss}`);
                }
            }
            traverse++;
        }
    }
    else {
        alert(`please add ${8 - count} student or click on show to view the student list `);
    }
}
else
{

}

});
//searching the student in localstorage
let search = document.querySelector('#magnifier');
search.addEventListener('click', () => {
    let searchs = prompt('enter the student name to be searched');
    let k = 1;
    while (localStorage.length != k) {
        if (localStorage.key(k) == searchs) {
            alert(`the student ${localStorage.key(k)} is attended for ${localStorage.getItem(localStorage.key(k))} class`);
            break;
        }
        else {
            k++;
        }
    }
});
//for removing a student from localstorage
document.querySelector('#remove').addEventListener('click', () => {
    let deletedstudent = "";
    deletedstudent = prompt('enter the student to be deleted');
    let child = document.querySelector('#studentdetails').childElementCount;
    for (let index = 0; index < child; index++) {
        if (document.querySelector('#studentdetails').children[index].innerHTML == deletedstudent) {
            document.querySelector('#studentdetails').children[index].remove();
            localStorage.removeItem(deletedstudent);
            alert(`student have been removed: ${deletedstudent}`);
            count--;
            break;
        }
    }

});
//showing every detail on page
document.querySelector('#showdata').addEventListener('click', () => {
    let j = 0;
    if (localStorage.key(1) == null) {
        alert('there is no element to be see');
    }
    else {
        while (j!=localStorage.length) {
            let div = document.createElement('div');
            if (localStorage.key(j)=='array') {
            j++;
            }
            div.className = 'one';
            div.innerHTML = `${localStorage.key(j)}`;
            if (localStorage.key(j) == null) {
                localStorage.removeItem(localStorage.key(j));
            }
            let click = true;
            div.addEventListener('click', () => {
                if (click == true) {
                    div.style.backgroundColor = 'lightgreen';
                    click = false;
                }
                else {
                    div.style.backgroundColor = 'pink';
                    click = true;
                }
            })
            document.querySelector('#studentdetails').appendChild(div);
            j++;
        }
    }
});
//clearing the data logic
document.querySelector("#clear").addEventListener('click',()=>{
    let checking;
    checking=confirm('Are You sure to remove all data');
    if (checking==true) {
        localStorage.clear();
    }
    else{

    }
})
