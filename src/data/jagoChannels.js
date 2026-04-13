const JAGO_CHANNELS = [
  {
    "id": "al-jazeera",
    "name": "Al Jazeera",
    "logo": "https://www.jagobd.com/wp-content/uploads/2019/09/AljazeeraTV-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/aljazeera.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "ananda-tv",
    "name": "Ananda TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2018/04/Anandatvupdate-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/anandatv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "asian-tv",
    "name": "Asian TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2015/12/asiantv-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/asian-test-sample-ok-d.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "atn-bangla",
    "name": "ATN Bangla",
    "logo": "https://www.jagobd.com/wp-content/uploads/2015/12/atn-bangla1-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnbd-8-org.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "atn-music",
    "name": "ATN Music",
    "logo": "https://www.jagobd.com/wp-content/uploads/2015/12/atnmusic-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/atnmusic.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "azan-tv-canada",
    "name": "Azan TV Canada",
    "logo": "https://www.jagobd.com/wp-content/uploads/2019/04/azantvs-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/azantv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "bartoman-television",
    "name": "BARTOMAN TELEVISION",
    "logo": "https://www.jagobd.com/wp-content/uploads/2025/02/bartoman-web-150x150.jpeg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/bartomantv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "biswabangla-24",
    "name": "BiswaBangla 24",
    "logo": "https://www.jagobd.com/wp-content/uploads/2022/03/Logo-Still-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/biswabanglatv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "btv-national",
    "name": "BTV National",
    "logo": "https://www.jagobd.com/wp-content/uploads/2017/08/btvctg.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/btvnational1.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "cb24-tv",
    "name": "CB24 TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2024/01/CB24-PP-LOGO-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/cb24.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "channel-16",
    "name": "Channel 16",
    "logo": "https://www.jagobd.com/wp-content/uploads/2026/01/channel16-150x150.jpeg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel16bd.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "dbc-news",
    "name": "DBC News",
    "logo": "https://www.jagobd.com/wp-content/uploads/2017/01/dbc-news-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/dbcnews.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "deen-tv-uk",
    "name": "Deen TV UK",
    "logo": "https://www.jagobd.com/wp-content/uploads/2021/05/Deentv-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/deentv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "desh-tv",
    "name": "Desh TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2022/12/DESH-TV1-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/deshtv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "ekushey-tv",
    "name": "Ekushey TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2015/12/ekusheytv-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/ekusheytv-8-org.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "ep-tv",
    "name": "EP TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2026/03/EPTV-Logo-400x400-1-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/eptv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "freedom",
    "name": "FREEDOM",
    "logo": "https://www.jagobd.com/wp-content/uploads/2019/09/freedom-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/uatv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "gazi-television-\u00e2\u20ac\u201c-gtv",
    "name": "Gazi Television \u00e2\u20ac\u201c GTV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2024/11/gtv-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/gazibdz.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "in-\u00e2\u20ac\u201c-aamar-bangla",
    "name": "IN \u00e2\u20ac\u201c Aamar Bangla",
    "logo": "https://www.jagobd.com/wp-content/uploads/2022/07/Aamar-Bangla-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/amarbanglatv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "in-amar-digital",
    "name": "IN-Amar Digital",
    "logo": "https://www.jagobd.com/wp-content/uploads/2024/09/amardigital-1-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/amardigital.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "independent-tv",
    "name": "Independent TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2015/10/inds-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/independent-8-org.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "jago-news-24",
    "name": "Jago News 24",
    "logo": "https://www.jagobd.com/wp-content/uploads/2024/08/pran-RFL-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/jagonews24.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "madani-ch.-bangla",
    "name": "Madani Ch. Bangla",
    "logo": "https://www.jagobd.com/wp-content/uploads/2020/05/Madani-Channel-Bangla-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/madanitvbangla.stream1/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "matri-bhumi-tv",
    "name": "Matri Bhumi TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2024/10/matribhumi-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/matribhumitv.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "star-news",
    "name": "Star News",
    "logo": "https://www.jagobd.com/wp-content/uploads/2025/12/images-150x150.jpeg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/starnewsbd.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "tv-one-uk",
    "name": "TV ONE UK",
    "logo": "https://www.jagobd.com/wp-content/uploads/2016/02/TVONE-LOGO-Colour-150x150.png?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/tvoneuksni.stream/playlist.m3u8?wmsAuthSign="
  },
  {
    "id": "voice-of-america-|-voa-tv",
    "name": "Voice of America | VOA TV",
    "logo": "https://www.jagobd.com/wp-content/uploads/2019/10/vooa-150x150.jpg?x71442",
    "group": "JagoBD",
    "url": "https://static.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/voa.stream/playlist.m3u8?wmsAuthSign="
  }
];

export default JAGO_CHANNELS;

export function getJagoCategories() {
  return ["JagoBD"];
}
