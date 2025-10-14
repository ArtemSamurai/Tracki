document.addEventListener("DOMContentLoaded", () => {
  let langarr = {
    "title": {
        "ru": "Любимые треки",
        "ua": "Улюблені треки",
        "en": "Songs what i like",
    },
    "header": {
        "ru": "Это сайт про песни которые мне нравятся",
        "ua": "Це сайт про пісні які мені подобаються",
        "en": "This web-site about song what i like",
    },
    "like": {
        "ru": "🎵Тут находятся песни которые мне нравятся🎹",
        "ua": "🎵Тут знаходяться треки які мені подобаються🎹",
        "en": "🎵Here contains songs what i like🎹",
    },
    "like_1": {
        "ru": "🎵Тут находятся песни которые мне нравятся🎹",
        "ua": "🎵Тут знаходяться треки які мені подобаються🎹",
        "en": "🎵Here contains songs what i like🎹",
    },
    "link": {
        "ru": "Как со мной связаться",
        "ua": "Як зі мною зв'язатися",
        "en": "How to contact with me",
    }
  }
  const allLang = ["ru", "ua", "en"];
  const obj_1 = document.getElementById("Close");
  const obj = document.getElementById("Open");
  const select = document.querySelector("#lang");
  const target = document.getElementById("main_1");
  obj.addEventListener("click", () => {
    target.classList.toggle("open");
  });
  obj_1.addEventListener("click", () => {
    target.classList.toggle("open");
  });
  select.addEventListener("change", changeUrllang);

  function changeUrllang() {
    let lang = select.value;
    location.href = window.location.pathname + '#' + lang;
    location.reload();
  };

  function changelanguange() {
    let hash = window.location.hash
    hash = hash.substring(1)
    if(!allLang.includes(hash)) {
        location.href = window.location.pathname + "#ru";
        location.reload();
    }
    select.value = hash;
    for(let key in langarr) {
        document.querySelector("#lang-" + key).innerHTML = langarr[key][hash]; 
    }
  }
  changelanguange();


});
