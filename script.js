const panoramas = [
    { url: "https://www.google.com/maps/embed?pb=!4v1730990428980!6m8!1m7!1syxy5VRJLXuVx5sccCIQkmg!2m2!1d54.61105327913502!2d39.76119695221099!3f70.40169965234205!4f8.332246254555173!5f0.7820865974627469", country: "Россия" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992203653!6m8!1m7!1s33warZ5Gpd3jdWvs7CUTJQ!2m2!1d59.42893387130377!2d24.73077924299494!3f158.93967098799192!4f-0.8212179701152849!5f0.7820865974627469", country: "Эстония" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992264224!6m8!1m7!1sN1gaCLqc_5WW6EPUq8kn8w!2m2!1d59.3372642394594!2d18.06809478743556!3f247.6977468679509!4f11.07673607971411!5f0.7820865974627469", country: "Швеция" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992317820!6m8!1m7!1sU04TO52sbc7S2zK6HvxhYA!2m2!1d47.29761888822339!2d8.431470839451123!3f219.35486423214823!4f-2.5051410615177616!5f0.7820865974627469", country: "Швейцария" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992344862!6m8!1m7!1sgG833LgaWbkwRshmrvu7wQ!2m2!1d40.7019508615796!2d-3.432813501943293!3f219.83891615134024!4f-2.0848997167556718!5f0.7820865974627469", country: "Испания" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992376086!6m8!1m7!1s2kJflWbdQWtSSmuE6bG4Qg!2m2!1d40.73659629166043!2d-73.9907400889392!3f276.7675161992454!4f7.764135581102138!5f0.7820865974627469", country: "США" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992399618!6m8!1m7!1sSLyBfsCO5xdrxoY4nTn3Rw!2m2!1d-34.5258475768916!2d-58.48757960313127!3f70.28421151610412!4f-6.904960488506646!5f0.7820865974627469", country: "Аргентина" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992425069!6m8!1m7!1s_PGUQVP3FOcKwCJ3D1alUQ!2m2!1d-44.60465155647346!2d170.1951761995522!3f14.266702960872067!4f1.1277704550291645!5f0.7820865974627469", country: "Новая Зеландия" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730992462770!6m8!1m7!1sWN8KqmrGso7f-eCdgZjGNw!2m2!1d34.65211098022312!2d133.8632956711248!3f246.34050799096525!4f-3.389123052002134!5f0.7820865974627469", country: "Япония" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994599468!6m8!1m7!1sp_4nvfszrwiCqxrBHDH9GQ!2m2!1d47.85932254197972!2d104.0641462933169!3f193.79!4f-1!5f0.7820865974627469", country: "Моноголия" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994668855!6m8!1m7!1s7C4-PJiN8g7TtCKeUmhCaQ!2m2!1d42.51725388277076!2d76.5820503450459!3f81.35!4f-0.5699999999999932!5f0.7820865974627469", country: "Кыргызстан" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994703491!6m8!1m7!1srjXgveKPGFbshjB_pDtIPQ!2m2!1d25.04922484265447!2d55.12270776699724!3f36.36!4f-2.3299999999999983!5f0.9735267329569371", country: "Дубай" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994733044!6m8!1m7!1s8mIEabBDq9E7QOSCKmhUUQ!2m2!1d52.23262635012215!2d21.00343369654331!3f116.98!4f11.299999999999997!5f0.7820865974627469", country: "Польша" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994761004!6m8!1m7!1smCgbtSIojklaAYiUJyfzeQ!2m2!1d64.21614256331132!2d-21.78599342176929!3f229.72!4f-1.4099999999999966!5f0.7820865974627469", country: "Исландия" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994787703!6m8!1m7!1sEJayjV-DzhdBJgBrJ-9fsg!2m2!1d50.9014252308405!2d-103.8508024855916!3f347.87!4f-3.5999999999999943!5f0.7820865974627469", country: "Канада" },
    { url: "https://www.google.com/maps/embed?pb=!4v1730994812304!6m8!1m7!1sUvhVK1QJ4YacX_DbiaSCJw!2m2!1d37.25749712834121!2d128.1909703986193!3f135.79!4f-3.3100000000000023!5f0.7820865974627469", country: "Южная Корея" },
  ];

  let roundCount = 0;
  let correctAnswers = 0;
  let startTime, totalTime;

  function startGame() {
    roundCount = 0;
    correctAnswers = 0;
    document.getElementById('startGameButton').style.display = 'none';
    document.getElementById('panoramaContainer').style.display = 'block';
    document.getElementById('buttonContainer').style.display = 'flex';
    document.getElementById('resultDisplay').style.display = 'none';
    startTimer();
    loadPanorama();
  }

  function loadPanorama() {
    if (roundCount >= 5) return endGame();

    const randomIndex = Math.floor(Math.random() * panoramas.length);
    const correctPanorama = panoramas[randomIndex];
    document.getElementById('panoramaFrame').src = correctPanorama.url;

    const options = [correctPanorama.country];
    while (options.length < 3) {
      const randomCountry = panoramas[Math.floor(Math.random() * panoramas.length)].country;
      if (!options.includes(randomCountry)) options.push(randomCountry);
    }
    options.sort(() => Math.random() - 0.5);

    document.getElementById('buttonContainer').innerHTML = '';
    options.forEach(country => {
      const button = document.createElement('button');
      button.textContent = country;
      button.onclick = () => checkAnswer(country === correctPanorama.country);
      document.getElementById('buttonContainer').appendChild(button);
    });

    roundCount++;
  }

  function checkAnswer(isCorrect) {
    if (isCorrect) correctAnswers++;
    loadPanorama();
  }

  function endGame() {
    clearInterval(timerInterval);
    totalTime = document.getElementById('timer').textContent;
    document.getElementById('panoramaContainer').style.display = 'none';
    document.getElementById('buttonContainer').style.display = 'none';
    document.getElementById('resultDisplay').textContent = `Игра Окончена! Ваш Результат ${correctAnswers} из 5. Итоговое время: ${totalTime}`;
    document.getElementById('resultDisplay').style.display = 'block';
    document.getElementById('startGameButton').style.display = 'block';
  }

  let timerInterval;
  function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const minutes = Math.floor(elapsedTime / 60000);
      const seconds = Math.floor((elapsedTime % 60000) / 1000);
      document.getElementById('timer').textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
  }