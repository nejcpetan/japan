$( document ).ready( function() {

  var pages = ["home", "mount-fuji", "tokyo", "osaka", "fukuoka", "kyoto"];

  for (i = 0; i < pages.length; i++) {
    $( '#' + pages[i] + '' ).click( function() {
      // Get content and display it
      var data = getContent($( this ).attr('id'))
      $( '.title' ).text(data.title);
      $( '.content' ).text(data.content);
     // $( '.banner' ).attr("src", data.banner);

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
      title = "Home"
      content = `Japan (Japanese: 日本 Nippon [ɲippoɴ] or Nihon [ɲihoɴ]; formally 日本国 Nippon-koku or Nihon-koku, meaning "State of Japan") is a sovereign island nation in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian mainland and stretches from the Sea of Okhotsk in the north to the East China Sea and China in the southwest. The kanji, or Sino-Japanese characters, that make up Japan's name mean "sun origin", and it is often called the "Land of the Rising Sun". Japan is a stratovolcanic archipelago consisting of about 6,852 islands. The four largest are Honshu, Hokkaido, Kyushu and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands. The country is divided into 47 prefectures in eight regions, with Hokkaido being the northernmost prefecture and Okinawa being the southernmost one. The population of 127 million is the world's tenth largest. Japanese people make up 98.5% of Japan's total population. Approximately 9.1 million people live in Tokyo, the capital of Japan.`
      //banner = "";
      break;

    case "mount-fuji":
      title = "Mount Fuji"
      content = `Mount Fuji (富士山 Fujisan, located on Honshu Island, is the highest mountain in Japan at 3,776.24 m (12,389 ft). It is an active stratovolcano that last erupted in 1707–1708. Mount Fuji lies about 100 kilometres (60 mi) south-west of Tokyo, and can be seen from there on a clear day. Mount Fuji's exceptionally symmetrical cone, which is snow-capped for about 5 months a year, is a well-known symbol of Japan and it is frequently depicted in art and photographs, as well as visited by sightseers and climbers. Mount Fuji is one of Japan's "Three Holy Mountains" (三霊山 Sanreizan) along with Mount Tate and Mount Haku. It is also a Special Place of Scenic Beauty and one of Japan's Historic Sites. It was added to the World Heritage List as a Cultural Site on June 22, 2013. According to UNESCO, Mount Fuji has "inspired artists and poets and been the object of pilgrimage for centuries". UNESCO recognizes 25 sites of cultural interest within the Mt. Fuji locality. These 25 locations include the mountain and the shrine, Fujisan Hongū Sengen Taisha, as well as the Taisekiji Head Temple founded in 1290, later immortalized by Japanese Ukiyoe artist Hokusai in his final works.`
       // banner = "url(img/fuji06.jpg)",
      break;

      case "tokyo":
          title = "Tokyo"
          content = `Tokyo (/ˈtoʊkioʊ/, Japanese: [toːkʲoː] (About this sound listen)), officially Tokyo Metropolis,[6] is the capital city of Japan and one of its 47 prefectures. [7] The Greater Tokyo Area is the most populous metropolitan area in the world.[8] It is the seat of the Emperor of Japan and the Japanese government. Tokyo is in the Kantō region on the southeastern side of the main island Honshu and includes the Izu Islands and Ogasawara Islands.[9] Formerly known as Edo, it has been the de facto seat of government since 1603 when Shogun Tokugawa Ieyasu made the city his headquarters. It officially became the capital after Emperor Meiji moved his seat to the city from the old capital of Kyoto in 1868; at that time Edo was renamed Tokyo. Tokyo Metropolis was formed in 1943 from the merger of the former Tokyo Prefecture (東京府 Tōkyō-fu) and the city of Tokyo (東京市 Tōkyō-shi). Tokyo is often referred to as a city, but is officially known and governed as a "metropolitan prefecture", which differs from and combines elements of a city and a prefecture, a characteristic unique to Tokyo. The Tokyo metropolitan government administers the 23 Special Wards of Tokyo (each governed as an individual city), which cover the area that was the City of Tokyo before it merged and became the metropolitan prefecture in 1943. The metropolitan government also administers 39 municipalities in the western part of the prefecture and the two outlying island chains. The population of the special wards is over 9 million people, with the total population of the prefecture exceeding 13 million. The prefecture is part of the world's most populous metropolitan area with upwards of 37.8 million people and the world's largest urban agglomeration economy. In 2011, the city hosted 51 of the Fortune Global 500 companies, the highest number of any city in the world, at that time.[10] Tokyo ranked third (twice) in the International Financial Centres Development IndexEdit. The city is also home to various television networks such as Fuji TV, Tokyo MX, TV Tokyo, TV Asahi, Nippon Television, NHK and the Tokyo Broadcasting System. Tokyo ranked first in the Global Economic Power Index and third in the Global Cities Index. The city is considered an alpha+ world city – as listed by the GaWC's 2008 inventory[11] – and in 2014, Tokyo was ranked first in the "Best overall experience" category of TripAdvisor's World City Survey (the city also ranked first in the following categories: "helpfulness of locals", "nightlife", "shopping", "local public transportation" and "cleanliness of streets").[12] In 2015, Tokyo was ranked as the 11th most expensive city for expatriates, according to the Mercer consulting firm,[13] and also the world's 11th most expensive city, according to the Economist Intelligence Unit's cost-of-living survey.[14] In 2015, Tokyo was named the Most Liveable City in the world by the magazine Monocle. [15] The Michelin Guide has awarded Tokyo by far the most Michelin stars of any city in the world.[16][17] Tokyo was ranked first out of all fifty cities in the 2015 Safe Cities Index. [18] The 2016 edition of QS Best Student Cities ranked Tokyo as the 3rd-best city in the world to be a university student.[19] Tokyo hosted the 1964 Summer Olympics, the 1979 G-7 summit, the 1986 G-7 summit, and the 1993 G-7 summit, and Tokyo will host the 2020 Summer Olympics and the 2020 Summer Paralympics.`
          //banner = "url(img/tokyo01.jpg)",
         break;

      case "osaka":
          title = "Osaka"
          content = `Osaka (大阪市 Ōsaka-shi) is a designated city in the Kansai region of Japan. It is the capital city of Osaka Prefecture and the largest component of the Keihanshin Metropolitan Area, the second largest metropolitan area in Japan and among the largest in the world with over 19 million inhabitants. Situated at the mouth of the Yodo River on Osaka Bay, Osaka is the second largest city in Japan by daytime population after Tokyo's 23 wards and the third largest city by nighttime population after Tokyo's 23 wards and Yokohama, serving as a major economic hub for the country. Historically a merchant city, Osaka has also been known as the "nation's kitchen" (天下の台所 tenka no daidokoro) and served as a center for the rice trade during the Edo period. `
          //banner = "url(img/tokyo01.jpg)",
          break;

      case "kyoto":
          title = "Kyoto"
          content = `Kyoto (京都市 Kyōto-shi, pronounced, pronounced [kʲoːtoꜜɕi] is a city located in the central part of the island of Honshu, Japan. I t has a population close to 1.5 million. Formerly the Imperial capital of Japan for more than one thousand years, it is now the capital city of Kyoto Prefecture located in the Kansai region, as well as a major part of the Kyoto-Osaka-Kobe metropolitan area. `
          //banner = "",
          break;

      case "fukuoka":
          title = "Fukuoka"
          content = `Fukuoka (福岡市 Fukuoka-shi, Japanese: [ɸɯ̥kɯꜜoka]) is the capital city of Fukuoka Prefecture, situated on the northern shore of Japanese island Kyushu. It is the most populous city on the island, followed by Kitakyushu. It is the largest city and metropolitan area west of Keihanshin. The city was designated on April 1, 1972, by government ordinance. Greater Fukuoka, with a population of 2.5 million people (2005 census), is part of the heavily industrialized Fukuoka–Kitakyushu zone as well as Northern Kyushu. As of 2015, Fukuoka is Japan’s sixth largest city, having passed the population of Kobe.[1] As of July 2011, Fukuoka passed the population of Kyoto. Since the founding of Kyoto in 794, this marks the first time that a city west of the Kinki region has a larger population than Kyoto. In ancient times, however, the area near Fukuoka, the Chikushi region, was thought by some historians to have possibly been even more influential than the Yamato region.`
          //banner = "",
          break;
  }

  var result = {
    title: title,
    content: content,
    banner: banner,
  }

  return result;
}
