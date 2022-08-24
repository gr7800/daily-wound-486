// https://quiet-waters-60994.herokuapp.com/api/Indiegogo

let getData = async () => {
 let res = await fetch(`https://quiet-waters-60994.herokuapp.com/api/Indiegogo`)
 let data = await res.json()
 console.log(data)
 append(data)
}
getData()

let append = (data) => {
     let card_section = document.getElementById("card_section");
     card_section.innerHTML = null;
     data.forEach(({funding, image, para, percentage, price, s_title, title, last_title}) => {
          
          let div = document.createElement("div")

          let img = document.createElement("img")
          img.src = image;
          let p = document.createElement("p")
          p.setAttribute("class", "funding")
          p.innerText = funding;
          let img1 = document.createElement("img")
          img1.setAttribute("id", "heart")
          img1.src = `https://cdn-icons-png.flaticon.com/128/1000/1000621.png`;
          let h3 = document.createElement("h3")
          h3.innerText = title;
          let p1 = document.createElement("p")
          p1.setAttribute("class", "para")
          p1.innerText = para;
          let p2 = document.createElement("p")
          p2.setAttribute("class", "s_title")
          p2.innerText = s_title;
          let p3 = document.createElement("p")
          p3.innerText = `$ ${price}`;
          let p4 = document.createElement("p")
          p4.innerText = `${percentage}%`;
          let s = document.createElement("p")
         s.setAttribute("class", "span")
          let p5 = document.createElement("p")
          p5.setAttribute("class", "last_title")
          p5.innerText = last_title;

          let div1 = document.createElement("div")
          div1.setAttribute("class", "price")
          div1.append(p3, p4,)
          let div2 = document.createElement("div")
          div2.setAttribute("class", "price-heart")
          div2.append(p, img1,)

          let div3 = document.createElement("div")
          div3.setAttribute("class", "padding")
          div3.append(div2, h3, p1, p2, div1, s, p5)
          div.append(img, div3 )
          card_section.append(div)

     })
}




