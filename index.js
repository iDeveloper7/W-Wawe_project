// search

const search = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');
const searchBtn = document.querySelector('.search__search-btn');
const searchCloseBtn = document.querySelector('.search__close-btn');

searchBtn.addEventListener('click', function () {
  search.classList.add('search_active');
  searchInput.classList.add('search__input_active');
  searchCloseBtn.classList.add('search__close-btn_active');
})

searchCloseBtn.addEventListener('click', function () {
  search.classList.remove('search_active');
  searchInput.classList.remove('search__input_active');
  searchCloseBtn.classList.remove('search__close-btn_active');
})

//play-btn (header section)

const playBtn = document.querySelectorAll('.audio__play-btn');
const pauseBtn = document.querySelectorAll('.audio__pause-btn');

playBtn.forEach(function (btn) {
  btn.addEventListener('click', function (data) {
    const path = data.currentTarget.dataset.path;
    data.currentTarget.classList.remove('audio-btn_active');
    document.querySelector(`[data-target = "${path}"]`).classList.add('audio-btn_active');
  })
})

pauseBtn.forEach(function (btn) {
  btn.addEventListener('click', function (data) {
    const target = data.currentTarget.dataset.target;
    btn.classList.remove('audio-btn_active');
    document.querySelector(`[data-path = "${target}"]`).classList.add('audio-btn_active');
  })
})

//play-btn (podcasts section)

const podcastPlayBtn = document.querySelectorAll('.podcasts__play-btn');
const podcastPauseBtn = document.querySelectorAll('.podcasts__pause-btn');

podcastPlayBtn.forEach(function (btn) {
  btn.addEventListener('click', function (data) {
    const path = data.currentTarget.dataset.path;
    btn.classList.remove('play-btn_active');
    document.querySelector(`[data-target = "${path}"]`).classList.add('play-btn_active');
  })
})

podcastPauseBtn.forEach(function (btn) {
  btn.addEventListener('click', function (data) {
    const target = data.currentTarget.dataset.target;
    btn.classList.remove('play-btn_active');
    document.querySelector(`[data-path = "${target}"]`).classList.add('play-btn_active');
  })
})

// more btn (podcasts section)

const moreBtn = document.querySelector('.podcasts__more-btn');
const podcastsItems = document.querySelectorAll('.podcasts__item');

moreBtn.addEventListener('click', function () {
  podcastsItems.forEach(function (el) {
    el.classList.add('podcasts__item_visible');
  })
  moreBtn.classList.add('podcasts__more-btn_hidden');
})

//counter likes, shares (podcasts section)

const counterBtns = document.querySelectorAll('.podcasts__counter-btn');

counterBtns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    let countBtn = btn.textContent;
    btn.textContent = String(parseInt(countBtn) + 1);
  });
})

// custom select

const element = document.querySelector('#broadcasts__select');
const choices = new Choices(element, {
  searchEnabled: false,
  sorter: () => {},
  itemSelectText: '',

});

//custom accordion
new Accordion('.guests__accordion', {
  elementClass: 'accordion__item',
  triggerClass: 'accordion__btn',
  panelClass: 'accordion__panel-list',
  activeClass: 'accordion__panel',
});

let accordionBtn = document.querySelectorAll('.accordion__btn');
let accordionEllipses = document.querySelectorAll('.accordion__btn-img');
let accordionPanelList = document.querySelectorAll('.accordion__panel-list');

accordionBtn.forEach(function (btn) {
  btn.addEventListener('click', function (data) {
    const btnPath = data.currentTarget.dataset.btnpath;
    console.log(btnPath);

    accordionEllipses.forEach(function (el) {
      el.classList.remove('accordion__btn-img_active');
    })

    accordionPanelList.forEach(function (el) {
      el.classList.remove('accordion__panel-list_active');
    })


    if (document.querySelector('[aria-expanded = "true"]')) {
      document.querySelector(`[data-btntarget = "${btnPath}"]`).classList.add('accordion__btn-img_active');
      document.querySelector(`[data-ultarget = "${btnPath}"]`).classList.add('accordion__panel-list_active');
    } else {
      accordionEllipses.forEach(function (ell) {
        ell.classList.remove('accordion__btn-img_active');
      })
    }
  })
})

// tabs

const tabsBtn = document.querySelectorAll('.accordion__panel-btn');
const tabsItem = document.querySelectorAll('.guests__person');

tabsBtn.forEach(function (el) {
  el.addEventListener('click', function (data) {
    const path = data.currentTarget.dataset.path;
    console.log(path);

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('accordion__panel-btn_active');
    })
    data.currentTarget.classList.add('accordion__panel-btn_active');

    tabsItem.forEach(function (item) {
      item.classList.remove('guests__person_active');
    })
    document.querySelector(`[data-target = "${path}"]`).classList.add('guests__person_active');
  })
})

//swiper

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  loop: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})

// just validate

const validation = new JustValidate('.about__form');

validation
  .addField('.about__textarea', [
    {
      rule: 'required',
      errorMessage: 'Введите текст',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Длина текста должна быть не менее 2-ух символов',
    },
    {
      rule: 'maxLength',
      value: 100,
      errorMessage: 'Длина текста должна быть не более 100-а символов',
    },
  ])
  .addField('.about__input_name', [
    {
      rule: 'required',
      errorMessage: 'Введите имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Длина имени должна быть не менее 2-ух символов',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Длина имени должна быть не более 30-и символов',
    },
    {
      rule: 'customRegexp',
      value: /^[A-Za-zА-Яа-яЁё\\s]+$/,
      errorMessage: 'Некорректное имя',
    },
  ])
  .addField('.about__input_mail', [
    {
      rule: 'required',
      errorMessage: 'Введите Email',
    },
    {
      rule: 'email',
      errorMessage: 'Некорректный Email',
    },
  ])
  .addField('.about__check-input', [
    {
      rule: 'required',
    },
  ]);
