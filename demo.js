var number = 609097867977576578765
if(number% 2 == 0)
{
console.log("this even number")
}
else 
{
    console.log("This is Odd number")
}

for(count=1;count<=100;count=count+1)
{
    console.log("meery")
}
// dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// chart
const xArray = ["Designer", "Coder"];
const yArray = [40, 50];
const data = [{labels:xArray, values:yArray, type:"pie"}];
Plotly.newPlot("myPlot", data);
//back to top
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
// profency
const xValues = ["Html", "CSS", "bootstrap", "tailwind", "JavaScript", "jQuery", "Angular JS", "React JS",  "Salesforce", "Veeva Vault", "Java", "Selenium","Typescript"];
const yValues = [90, 90, 90, 90, 90, 70, 60, 80, 80, 60, 70, 60, 30];
const barColors = [
  "#b91d47",
  "#00aba9",
  "#CBCE91FF",
  "#e8c3b9",
  "#1e7145",
  "#606060FF",
  "#D85A7FFF",
  "#97BC62FF",
  "#00539CFF",
  "#EEA47FFF",
  "#9CC3D5FF",
  "#E0C568FF"
];

new Chart("myChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "My Skills"
    }
  }
});