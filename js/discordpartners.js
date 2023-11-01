let langData = [["Язык", "Мова", "Language"], ["Социальная сеть", "соціальні мережі", "social network"], ["Магазин", "shop", "крамниця"], ["Карта мира", "world map", "карта світу"], ["Вики", "Wiki", "Вікі"], ["Вход", "Entry", "Вхід"], ["MAGATAMY", "MAGATAMY", "MAGATAMY"], ["Выживание с атмосферным комьюнити и уникальными фишками", "Survival with atmospheric community and unique features", "Виживання з атмосферним ком'юніті та унікальними фішками"], ["ИНФОРМАЦИЯ", "INFORMATION", "ІНФОРМАЦІЯ"], ["Советуем прочитать!", "You are advised to read it!", "Радимо прочитати!"], ["Активность", "Activity", "Активність"]]

let card = document.getElementById("cardImageUser")

var users = { "493318176189448204": {userDesc: "API разработчик"}, "961256514427969607": {userDesc: "frondEnd разработчик"}, "513975760189390855": {userDesc: "Основатель проекта"}, "463661523181502464": {userDesc: "Блогер"}, "227117061011144704": {userDesc: "Правая рука"} };

function getUserCard(userId) {
  return fetch(`https://magatamy.com/api/v1/discord/users/${userId}`)
    .then(response => response.json())
    .then(commits => {
      console.log(commits);
      let avatar = (commits.avatar);
      let global_name = (commits.global_name);
      let cardUser = `
    <div class="cardCommand">
    <img
      src="https://cdn.discordapp.com/avatars/${userId}/${avatar}.webp?size=128"
      alt="Person" class="card__image">
    <p class="card__name">${global_name}</p> <br>
    <p class="card__p">${users[userId].userDesc}</p>
    <ul class="social-icons">
      <li><a href="https://www.youtube.com/channel/UCdrZrlodik1odF5hrHr5w3Q" target="_blank"><ion-icon
            name="logo-youtube"></ion-icon></a></li>

    </ul>
  </div>
`
      card.innerHTML = card.innerHTML + cardUser

    })
}
for (var userId in users) {
  getUserCard(userId);
}