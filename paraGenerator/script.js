const input = document.getElementById("parasize");
const container= document.querySelector(".main");


const generateWord =(n)=>{
    let text ="";
    const letters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i=0;i<n;++i){

        const random=(Math.random()*(letters.length-1)).toFixed(0);
        text+=letters[random];
    }

return text;    
};


let numOfWords; 
const generatePara = ()=>{
    numOfWords=Number(input.value); 

    const para =document.createElement("p");
    let data ="";

    for(let i=0;i<numOfWords;i++){
        const randomNumber=(Math.random()*15).toFixed(0);
    data+=generateWord(randomNumber).toLowerCase();
    data+=" ";
    }
    // console.log(data);
    para.innerText=data;

    para.setAttribute("class","paras");
    container.append(para)


};

