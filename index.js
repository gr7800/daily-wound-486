let image = [
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660248119/xlo6p2xtbov5ethy5fte.png",
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1661187309/sl2hhxxucqvyk9tlwb89.png",
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660839659/adn5fyx0mwvoivuth0hf.jpg",
    "https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/f_auto/v1660332984/q36ll0e34a9l3irkm9jm.jpg",   
];

let title1 = [
    "FEATURED",
    "GOGOPICKS",
    "GOGOPICKS",
    "GOGOPICKS",
];

let title2 =[
    "Indiegogo & StartEngine Team Up to Help Entrepreneurs Raise More Capital",
    "Last Charging Cable & Power Bank You'll Ever Need?",
    "Smartmi Ai",
    "Cooler Keg",
]

let title3 =[
    "Learn how entrepreneurs can use equity crowdfunding to access more capital after their Indiegogo campaign.",
    "The beautiful, premium charging cables & powerhouse power banks for the rest of us",
    "World's Cleanest Robot with Wet Dry Vac",
    "The Bar Experience You Take With You",

]
let title4=[
    "LEARN MORE",
    "SEE CAMPAIGN",
    "SEE CAMPAIGN",
    "SEE CAMPAIGN",
]

let index =1;
let address;
let slidShow = () => {
    let con = document.getElementById("slidshow");
    let title = document.getElementById("title");
    let count = document.getElementById("count");
    
    let t1 = document.getElementById("t1")
    let t2 = document.getElementById("t2")
    let t3 = document.getElementById("t3")
    let t4 = document.getElementById("t4")
    //0 to arr.length-1

    address = setInterval(() => {
        if(index === image.length){
            index=0;
        }
        con.innerHTML = null;
        
        t1.innerHTML = null;
        t2.innerHTML = null;
        t3.innerHTML = null;
        t4.innerHTML = null;
        count.innerText =`${index+1} / 4`
        let img = document.createElement("img");
        img.src = image[index];
        

        t1.innerText = title1[index];
        if(t1.innerText == "FEATURED"){
            t1.style.textDecoration ="Underline"
            t1.style.background = "transparent"
            t1.style.color= "#FFFFFF"
        }else if(t1.innerText == "GOGOPICKS"){
            t1.style.textDecoration = "none"
            t1.style.backgroundColor = "white"
            t1.style.color = "#040404"
            t1.style.width = "2.3cm"
        }
        t2.innerText = title2[index];
        t3.innerText = title3[index];
        t4.innerText = title4[index];
        title.append(t1,t2,t3,t4)
        con.append(img,title);
        index++;
    },2500);
};

let stop = () => {
    clearInterval(address)
}

let previous = () => {
    clearInterval(address) ;

    let con = document.getElementById("slidshow");
    let title = document.getElementById("title");
    let count = document.getElementById("count");
    
    let t1 = document.getElementById("t1")
    let t2 = document.getElementById("t2")
    let t3 = document.getElementById("t3")
    let t4 = document.getElementById("t4")

    if(index === 0){
        index = image.length-1;
    }else{
        index--;
    }
    con.innerHTML = null;
        
    t1.innerHTML = null;
    t2.innerHTML = null;
    t3.innerHTML = null;
    t4.innerHTML = null;
    count.innerText =`${index+1} / 4`
    let img = document.createElement("img");
    img.src = image[index];
        

    t1.innerText = title1[index];
    if(t1.innerText == "FEATURED"){
        t1.style.textDecoration ="Underline"
        t1.style.background = "transparent"
        t1.style.color= "#FFFFFF"
    }else if(t1.innerText == "GOGOPICKS"){
        t1.style.textDecoration = "none"
        t1.style.backgroundColor = "white"
        t1.style.color = "#040404"
        t1.style.width = "2.3cm"
    }
    t2.innerText = title2[index];
    t3.innerText = title3[index];
    t4.innerText = title4[index];
    title.append(t1,t2,t3,t4)
    con.append(img,title);

    
}

let next = () => {
    clearInterval(address) ;
    
    let con = document.getElementById("slidshow");
    let title = document.getElementById("title");
    let count = document.getElementById("count");
    
    let t1 = document.getElementById("t1")
    let t2 = document.getElementById("t2")
    let t3 = document.getElementById("t3")
    let t4 = document.getElementById("t4")
    
    if(index == image.length-1){
        index = 0;
    }else{
        index++;
    }
    
    con.innerHTML = null;
        
    t1.innerHTML = null;
    t2.innerHTML = null;
    t3.innerHTML = null;
    t4.innerHTML = null;
    count.innerText =`${index+1} / 4`
    let img = document.createElement("img");
    img.src = image[index];
        

    t1.innerText = title1[index];
    if(t1.innerText == "FEATURED"){
        t1.style.textDecoration ="Underline"
        t1.style.background = "transparent"
        t1.style.color= "#FFFFFF"
    }else if(t1.innerText == "GOGOPICKS"){
        t1.style.textDecoration = "none"
        t1.style.backgroundColor = "white"
        t1.style.color = "#040404"
        t1.style.width = "2.3cm"
    }
    t2.innerText = title2[index];
    t3.innerText = title3[index];
    t4.innerText = title4[index];
    title.append(t1,t2,t3,t4)
    con.append(img,title);
}


let learn =() =>{
    window.location.href ="https://www.indiegogo.com/about/what-we-do"
}