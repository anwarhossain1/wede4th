function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

async function execute() {

  let resfp= await wearPPE();
  console.log(resfp);
  let resff= await fightCorona();
  console.log(resff);

  
}
execute();
//done