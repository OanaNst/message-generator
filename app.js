const msgLuck = [
  "Trusting in luck alone is a risky proposition.",
  "Some people seem to be born with good luck.",
  "Crossing your fingers won't change your luck.",
  "Luck is when preparation meets opportunity.",
  "In the game of chance, luck holds all the cards.",
  "Winning the lottery is the epitome of luck.",
  "A stroke of luck can brighten a gloomy day.",
  "Luck favors the bold and the persistent.",
  "Sometimes, bad luck can lead to great lessons.",
  "Count your blessings; luck is on your side.",
];

const msgMoney = [
  "A golden opportunity will knock on your door, ushering in unprecedented wealth.",
  "A financial setback looms, casting a shadow of uncertainty over your money matters.",
  "Your financial intuition will guide you to lucrative ventures and stability.",
  "Poor financial decisions may lead to a downward spiral, eroding your wealth.",
  "Money will flow into your life like a river, bringing abundance and security.",
  "A looming economic crisis could disrupt your financial stability.",
  "A fortunate financial event will unfold, transforming your monetary landscape.",
  "A costly mistake may drain your finances, creating a turbulent financial future.",
  "Prudent decisions will magnetize money, ensuring a future of opulence and comfort.",
  "An unforeseen financial disaster could shake the foundation of your monetary security.",
];

const msgPeople = [
  "Someone close to you will exhibit unexpected acts of kindness and generosity.",
  "A person you trust may betray your confidence, testing your relationships.",
  "A person from your past will re-enter your life, bringing valuable insights.",
  "A clash with a close friend could strain your bond, causing emotional turmoil.",
  "A chance encounter will lead to a meaningful connection with a new friend.",
  "An acquaintance may reveal their true colors, leading to disappointment.",
  "An unexpected mentor will guide you to new heights in your journey.",
  "A challenging individual will disrupt your peace, requiring patience and resilience.",
  "A long-lost family member will reconnect, bringing harmony and unity.",
  "A toxic relationship will unravel, demanding you to set healthy boundaries.",
];

const luckMsg = document.getElementById("luck-prediction");
const moneyMsg = document.getElementById("money-prediction");
const peopleMsg = document.getElementById("people-prediction");

const randomInt = () => Math.floor(Math.random() * 10);

//const button = document.getElementById("generatePrediction");

const doPrediction = () => {
  luckMsg.innerHTML = `🍀 ${msgLuck[randomInt()]}`;
  moneyMsg.innerHTML = `💰 ${msgMoney[randomInt()]}`;
  peopleMsg.innerHTML = `👤 ${msgPeople[randomInt()]}`;
};

//console.log(msgLuck[randomInt()]);
//console.log(msgMoney[randomInt()]);
//console.log(msgPeople[randomInt()]);
