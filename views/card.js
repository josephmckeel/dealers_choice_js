const html = require("html-template-tag");

module.exports = (card)=> `<!DOCTYPE html>
<html>
<head>
  <title>My Favorite Pokemon</title>
  <link rel="stylesheet" href="./styles.css" />
</head>
<body>
    <h1>My Favorite Pokemon</h1>
    <div id='cardBox'>
        <ul id='cardList' >
            <li class='card'>
                <a href='/'><h3>${card.name}</h3></a>
                    <p>Health: ${card.health}</p>
                    <p>Type: ${card.type}</p>
                    <p>Trainer: ${card.owner}</p>
            </li>
        </ul
    </div>
</body>
</html>`;



// ${cards.map(card=>{
//     return `<li class='card'>
//     <a href='/'><h3>${card.name}</h3></a>
//         <p>Health: ${card.health}</p>
//         <p>Type: ${card.type}</p>
//         <p>Trainer: ${card.owner}</p>
//     </li>`
// }).join('')}