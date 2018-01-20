$( document ).ready( function() {

  var pages = ["home", "mount-fuji", "tokyo", "osaka"];

  for (i = 0; i < pages.length; i++) {
    $( '#' + pages[i] + '' ).click( function() {
      // Get content and display it
      var data = getContent($( this ).attr('id'))
      $( '.title' ).text(data.title);
      $( '.content' ).text(data.content);
      $( '.banner' ).attr("src", data.banner);

      // Set current navbar button to active
      $( ".active ").removeClass("active");
      $( this ).parent().addClass("active");
    });
  }
});


function getContent(page) {
  var title = "", content = "", banner = "";

  switch (page) {
    case "home":
      title = "Domov"
      content = `Japan (Japanese: 日本 Nippon [ɲippoɴ] or Nihon [ɲihoɴ]; formally 日本国 Nippon-koku or Nihon-koku, meaning "State of Japan") is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The kanji, or Sino-Japanese characters, that make up Japan's name mean "sun origin", and it is often called the "Land of the Rising Sun". Japan is a stratovolcanic archipelago consisting of about 6,852 islands. The four largest are Honshu, Hokkaido, Kyushu and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands. The country is divided into 47 prefectures in eight regions, with Hokkaido being the northernmost prefecture and Okinawa being the southernmost one. The population of 127 million is the world's tenth largest. Japanese people make up 98.5% of Japan's total population. Approximately 9.1 million people live in Tokyo, the capital of Japan.`
      banner = "";
      break;

    case "mount-fuji":
      title = "Mount Fuji"
      content = `Mount Fuji (富士山 Fujisan, located on Honshu Island, is the highest mountain in Japan at 3,776.24 m (12,389 ft). It is an active stratovolcano that last erupted in 1707–1708. Mount Fuji lies about 100 kilometres (60 mi) south-west of Tokyo, and can be seen from there on a clear day. Mount Fuji's exceptionally symmetrical cone, which is snow-capped for about 5 months a year, is a well-known symbol of Japan and it is frequently depicted in art and photographs, as well as visited by sightseers and climbers. Mount Fuji is one of Japan's "Three Holy Mountains" (三霊山 Sanreizan) along with Mount Tate and Mount Haku. It is also a Special Place of Scenic Beauty and one of Japan's Historic Sites. It was added to the World Heritage List as a Cultural Site on June 22, 2013. According to UNESCO, Mount Fuji has "inspired artists and poets and been the object of pilgrimage for centuries". UNESCO recognizes 25 sites of cultural interest within the Mt. Fuji locality. These 25 locations include the mountain and the shrine, Fujisan Hongū Sengen Taisha, as well as the Taisekiji Head Temple founded in 1290, later immortalized by Japanese Ukiyoe artist Hokusai in his final works.`
      break;

  }

  var result = {
    title: title,
    content: content,
    banner: banner
  }

  return result;
}
