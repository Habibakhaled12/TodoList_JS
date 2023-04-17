// const x=document.querySelector( ".tail" );
// x.remove()
// const task=document.querySelector(".tail");
// const x=document.createElement("p");
// task.append(x);
// x.classList.add("amb");
// x.innerText="the first";
// const x=document.querySelector(".tail");
// x.remove();
// x.setAttribute("id","hhh");
// const con = ()=>
// {
//    const x=document.querySelector(".tail");
// x.remove();
// x.setAttribute("id","hhh");
// }
//  setTimeout(con , 2000)
// console.log(typeof con);

// const buy = document.getElementById("bin");
// buy.addEventListener("click", () => {
//   const value = document.createElement("h5");
//   value.innerHTML = "hello world";
//   buy.append(value);
// });
// const bin= document.getElementById("bin");
// bin.addEventListener("click",(eo)=>{

// cuteAlert({
//   type: "success",
//   title: "Success Title",
//   message: "Success Message",
//   buttonText: "Okay"
// });

// });

// const x = document.querySelector(" .icon-star-full");
// const xx = document.getElementById("taskk");

// x.addEventListener("click", (eo) => {
//   xx.classList.toggle("bbb");
// });

// const s="ali hassan";
// const task =Array.from(s);
// console.log(task);
// console.log(task.length);
// const title=document.getElementsByTagName("p");
// const ex=Array.from(title);
// console.log(ex);
// ex.forEach(item => {
// item.style.color="red"
// });
// const hello = (document.querySelector = "#upload");
// const box = (document.querySelectorAll = "#container");
// hello.addEventListener("click", (eo) => {
//   const con = `<span class="icon-star-full icon "></span>
//   <p >task1</p>
//   <div>
//     <span class=" icon-bin icon" id="bin"></span>
//     <span class="icon-angry2 icon"></span>`;
//   box.innerhtml = con;
// });

// add.addEventListener("click", (eo) => {
//   const content = "<p>hello</p>"
// //   <div class="task" id="taskk">
// //   <span class="icon-star-full icon "></span>
// //   <p >task1</p>
// //   <div>
// //     <span class=" icon-bin icon" id="bin"></span>
// //     <span class="icon-angry2 icon"></span>
// //   </div>
// // </div> `;
// box.innerhtml=content;
// })
// // const buy = document.querySelector(".icon-bin");
// // console.log(buy);
// // buy.addEventListener("click", () => {
// // document.getElementById("taskk").style.display ="none";
// // });
// const buy = document.querySelector("#todo");

// buy.addEventListener("click", (eo) => {
//   if (eo.target.classname == "bin1") {
//     document.getElementById("taskk").style.display = "none"
//   }
//   else if (eo.target.classname == "bin2");
//   {
//     document.getElementById("tas").style.display = "none"
//   }
//   console.log("done");
// });
// const x = document.querySelectorAll(".icon-star-full");
// const xx = document.getElementById("taskk");
// const xxx = document.getElementById("tas");

// x.forEach((item) => {
//   item.addEventListener(
//     "click",

//     (eo) => {
//         if(eo.target.classname=="ic");
//         {
//       xx.classList.toggle("bbb");
//       console.log("hello");
//     }
// if(eo.target.classname=="ico");
// {
//     xxx.classList.toggle("bbb");
//     console.log("hello");
// }

// }
//   );
// });
const input = document.querySelector("input");
const form = document.querySelector("form");
const button = document.querySelector("button");
const container = document.getElementById("container");

container.addEventListener("click", (eo) => {
  if (eo.target.className == "icon-bin icon") {
    eo.target.parentElement.parentElement.remove();
  } else if (eo.target.className == "icon-angry2 icon") {
    eo.target.classList.add("heart");
    const heart = `<span class="icon-heart "></span>`;

    eo.target.parentElement.parentElement.getElementsByClassName(
      "under"
    )[0].classList.add = "underr";

    eo.target.parentElement.innerHTML += heart;
  } else if ((eo.target.className == "icon-heart ")) {
    eo.target.parentElement.parentElement.getElementsByClassName(
      "under"
    )[0].classList.remove = "underr";
    eo.target.classList.add("star");
    const angr = `<span class="icon-angry2 icon" id="angry"></span>`;
    eo.target.parentElement.innerHTML += angr;
  }
  
  else if(eo.target.className=="icon-star-full"){
eo.target.classList.add("starcolor")
container.prepend(eo.target.parentElement)


  }

  else if(eo.target.className=="icon-star-full starcolor"){
    eo.target.classList.remove("starcolor")
    container.append(eo.target.parentElement)
}});
 








form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  const task = `<div class="task" id="taskk">
    <span class="icon-star-full"></span>
    <p class="under">${input.value}</p>
    <div>
      <span class="icon-bin icon bin1" id="bin"></span>
      <span class="icon-angry2 icon"></span>
    </div>
  </div>`;
  container.innerHTML += task;
  input.value="";
});






