function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function galleryMagic () {
      let pictureInnerContainer = document.querySelector('.picture-inner-container');
      arr = [];
      for(let i = 1; i <= 15; i++) {
          arr.push(`assets/gallery/galery${i}.jpg`)
      }
      arr = shuffle(arr);

      arr.map ((item) => {
          const img = document.createElement('img');
          img.classList.add('gallery-img')
          img.src = item;
          img.alt = `galery1`;
          pictureInnerContainer.append(img);


      })
    }

    galleryMagic ()