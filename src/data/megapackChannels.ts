import type { Channel } from "@/lib/types";

/**
 * Mega Pack — large M3U playlist imported from user-provided sources.
 * Includes Bangladeshi, Indian, Sports, News, Movies, Kids and more.
 * Many of these streams are origin-restricted and may not play in all regions.
 */
const MEGAPACK_CHANNELS: Channel[] = [
  {
    "id": "mp-discovery-bangla-0",
    "name": "Discovery Bangla",
    "group": "General",
    "url": "http://202.70.146.135:8000/play/a05z/index.m3u8"
  },
  {
    "id": "mp-nat-geo-hd-1",
    "name": "Nat Geo HD",
    "group": "General",
    "url": "http://202.70.146.135:8000/play/a05o/index.m3u8"
  },
  {
    "id": "mp-star-sports-1-hindi-2",
    "name": "Star Sports 1 Hindi",
    "group": "General",
    "url": "http://202.70.146.135:8000/play/a01e/index.m3u8"
  },
  {
    "id": "mp-discovery-kids-hindi-3",
    "name": "Discovery Kids Hindi",
    "group": "General",
    "url": "http://202.70.146.135:8000/play/a02l/index.m3u8"
  },
  {
    "id": "mp-nick-4",
    "name": "Nick",
    "group": "General",
    "url": "http://202.70.146.135:8000/play/a04c/index.m3u8"
  },
  {
    "id": "mp-sony-sports-ten-2-hd-1080p-5",
    "name": "Sony Sports Ten 2 HD (1080p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a02t/index.m3u8"
  },
  {
    "id": "mp-sony-sports-ten-3-hindi-576p-6",
    "name": "Sony Sports Ten 3 Hindi (576p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a09q/index.m3u8"
  },
  {
    "id": "mp-star-sports-2-tamil-576p-7",
    "name": "Star Sports 2 Tamil (576p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a0dc/index.m3u8"
  },
  {
    "id": "mp-willow-sports-1080p-8",
    "name": "Willow Sports (1080p)",
    "group": "General",
    "url": "https://d36r8jifhgsk5j.cloudfront.net/Willow_TV.m3u8"
  },
  {
    "id": "mp-espn-premium-9",
    "name": "ESPN Premium",
    "group": "General",
    "url": "http://46.225.94.157/hls/espn/index.m3u8"
  },
  {
    "id": "mp-rosario-central-vs-banfield-10",
    "name": "Rosario Central vs Banfield",
    "group": "General",
    "url": "http://46.225.94.157/hls/tnt/index.m3u8"
  },
  {
    "id": "mp-5-sport-il-11",
    "name": "5 SPORT IL",
    "group": "General",
    "url": "http://185.132.134.159:80/sport5/index.m3u8"
  },
  {
    "id": "mp-star-gold-2-hd-1080p-12",
    "name": "Star Gold 2 HD (1080p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a0d0/index.m3u8"
  },
  {
    "id": "mp-star-gold-hd-1080p-13",
    "name": "Star Gold HD (1080p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a0dd/index.m3u8"
  },
  {
    "id": "mp-star-gold-select-hd-1080p-14",
    "name": "Star Gold Select HD (1080p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a032/index.m3u8"
  },
  {
    "id": "mp-starplus-576p-15",
    "name": "StarPlus (576p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a09p/index.m3u8"
  },
  {
    "id": "mp-starplus-hd-1080p-16",
    "name": "StarPlus HD (1080p)",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a09z/index.m3u8"
  },
  {
    "id": "mp-live-sports-17",
    "name": "Live Sports",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a087/index.m3u8"
  },
  {
    "id": "mp-maasranga-tv-18",
    "name": "Maasranga TV",
    "group": "General",
    "url": "http://103.229.254.25:7001/play/a05q/index.m3u8"
  },
  {
    "id": "mp-deepto-tv-19",
    "name": "Deepto TV",
    "group": "General",
    "url": "https://byphdgllyk.gpcdn.net/hls/deeptotv/index.m3u8"
  },
  {
    "id": "mp-mwd-hd-20",
    "name": "MWD HD",
    "group": "MYANMAR",
    "url": "http://203.81.84.130/hls/mwd/index.m3u8"
  },
  {
    "id": "mp-tvm-21",
    "name": "TVM",
    "group": "MYANMAR",
    "url": "http://203.81.84.130/hls/mwd_serie/index.m3u8"
  },
  {
    "id": "mp-golden-22",
    "name": "GOLDEN",
    "group": "MYANMAR",
    "url": "http://203.81.84.130/hls/mwd_document/index.m3u8"
  },
  {
    "id": "mp-c-light-23",
    "name": "C LIGHT",
    "group": "MYANMAR",
    "url": "http://203.81.84.130/hls/mwd_family/index.m3u8"
  },
  {
    "id": "mp-foratunetv-hd-24",
    "name": "ForatuneTV HD",
    "group": "MYANMAR",
    "url": "http://103.215.194.93:8282/hls/fortunetv/live/vmix_1080.m3u8"
  },
  {
    "id": "mp-and-flix-hd-25",
    "name": "and flix HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a02x/index.m3u8"
  },
  {
    "id": "mp-and-pictures-hd-26",
    "name": "and pictures HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a033/index.m3u8"
  },
  {
    "id": "mp-and-tv-27",
    "name": "and tv",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a09v/index.m3u8"
  },
  {
    "id": "mp-9x-jalwa-28",
    "name": "9X JALWA",
    "group": "Music",
    "url": "http://103.229.254.25:7001/play/a07r/index.m3u8"
  },
  {
    "id": "mp-9x-jhakaas-29",
    "name": "9X JHAKAAS",
    "group": "Music",
    "url": "http://103.229.254.25:7001/play/a07p/index.m3u8"
  },
  {
    "id": "mp-9x-tashan-30",
    "name": "9X TASHAN",
    "group": "Music",
    "url": "http://103.229.254.25:7001/play/a07n/index.m3u8"
  },
  {
    "id": "mp-9xm-31",
    "name": "9XM",
    "group": "Music",
    "url": "http://103.229.254.25:7001/play/a07o/index.m3u8"
  },
  {
    "id": "mp-ary-digital-asia-hd-32",
    "name": "ARY Digital Asia HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a07w/index.m3u8"
  },
  {
    "id": "mp-ary-zindagi-33",
    "name": "ARY Zindagi",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a07u/index.m3u8"
  },
  {
    "id": "mp-atn-bangla-34",
    "name": "ATN Bangla",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06b/index.m3u8"
  },
  {
    "id": "mp-atn-news-35",
    "name": "ATN News",
    "group": "News",
    "url": "http://103.229.254.25:7001/play/a05u/index.m3u8"
  },
  {
    "id": "mp-ananda-tv-36",
    "name": "Ananda TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05v/index.m3u8"
  },
  {
    "id": "mp-b4u-kadak-37",
    "name": "B4U KADAK",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a08c/index.m3u8"
  },
  {
    "id": "mp-btv-chattagram-38",
    "name": "BTV Chattagram",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a061/index.m3u8"
  },
  {
    "id": "mp-btv-hd-39",
    "name": "BTV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a064/index.m3u8"
  },
  {
    "id": "mp-btv-news-hd-40",
    "name": "BTV NEWS HD",
    "group": "News",
    "url": "http://103.229.254.25:7001/play/a065/index.m3u8"
  },
  {
    "id": "mp-bangla-vision-41",
    "name": "Bangla Vision",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06d/index.m3u8"
  },
  {
    "id": "mp-bangla-tv-hd-42",
    "name": "Bangla TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06c/index.m3u8"
  },
  {
    "id": "mp-bein-sport-1-43",
    "name": "Bein Sport 1",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0f0/index.m3u8"
  },
  {
    "id": "mp-bein-sport-2-44",
    "name": "Bein Sport 2",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0ea/index.m3u8"
  },
  {
    "id": "mp-best-action-45",
    "name": "Best Action",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a088/index.m3u8"
  },
  {
    "id": "mp-bijoy-tv-46",
    "name": "Bijoy TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a066/index.m3u8"
  },
  {
    "id": "mp-boishakhi-tv-47",
    "name": "Boishakhi TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a067/index.m3u8"
  },
  {
    "id": "mp-channel-nine-bd-48",
    "name": "Channel Nine BD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05j/index.m3u8"
  },
  {
    "id": "mp-cinema-hall-49",
    "name": "Cinema Hall",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a0es/index.m3u8"
  },
  {
    "id": "mp-colors-50",
    "name": "Colors",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a077/index.m3u8"
  },
  {
    "id": "mp-colors-bangla-51",
    "name": "Colors Bangla",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a076/index.m3u8"
  },
  {
    "id": "mp-channel-24-hd-52",
    "name": "Channel 24 HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05n/index.m3u8"
  },
  {
    "id": "mp-channel-i-hd-53",
    "name": "Channel I HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06e/index.m3u8"
  },
  {
    "id": "mp-channel-s-54",
    "name": "Channel S",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a060/index.m3u8"
  },
  {
    "id": "mp-colors-hd-55",
    "name": "Colors HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a0a1/index.m3u8"
  },
  {
    "id": "mp-dbc-news-56",
    "name": "DBC News",
    "group": "News",
    "url": "http://103.229.254.25:7001/play/a06h/index.m3u8"
  },
  {
    "id": "mp-discovery-57",
    "name": "Discovery",
    "group": "Documentary",
    "url": "http://103.229.254.25:7001/play/a071/index.m3u8"
  },
  {
    "id": "mp-deepto-tv-hd-58",
    "name": "Deepto TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05r/index.m3u8"
  },
  {
    "id": "mp-desh-tv-59",
    "name": "Desh TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05s/index.m3u8"
  },
  {
    "id": "mp-discovery-kids-60",
    "name": "Discovery Kids",
    "group": "Kids",
    "url": "http://103.229.254.25:7001/play/a0dg/index.m3u8"
  },
  {
    "id": "mp-discovery-science-61",
    "name": "Discovery Science",
    "group": "Documentary",
    "url": "http://103.229.254.25:7001/play/a03h/index.m3u8"
  },
  {
    "id": "mp-duronto-tv-hd-62",
    "name": "Duronto TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05k/index.m3u8"
  },
  {
    "id": "mp-ekhon-tv-63",
    "name": "Ekhon TV",
    "group": "News",
    "url": "http://103.229.254.25:7001/play/a09k/index.m3u8"
  },
  {
    "id": "mp-etv-hd-64",
    "name": "ETV HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a0de/index.m3u8"
  },
  {
    "id": "mp-ekattor-tv-hd-65",
    "name": "Ekattor TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06f/index.m3u8"
  },
  {
    "id": "mp-ekushey-tv-66",
    "name": "Ekushey TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05x/index.m3u8"
  },
  {
    "id": "mp-global-tv-hd-67",
    "name": "Global TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05o/index.m3u8"
  },
  {
    "id": "mp-goldmines-movies-68",
    "name": "Goldmines Movies",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a07k/index.m3u8"
  },
  {
    "id": "mp-gazi-tv-hd-69",
    "name": "Gazi TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06t/index.m3u8"
  },
  {
    "id": "mp-goldmines-bollywood-70",
    "name": "Goldmines Bollywood",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a07l/index.m3u8"
  },
  {
    "id": "mp-itv24-71",
    "name": "ITV24",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06a/index.m3u8"
  },
  {
    "id": "mp-investigation-discovery-72",
    "name": "Investigation Discovery",
    "group": "Documentary",
    "url": "http://103.229.254.25:7001/play/a03c/index.m3u8"
  },
  {
    "id": "mp-jalsha-movies-73",
    "name": "Jalsha Movies",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a078/index.m3u8"
  },
  {
    "id": "mp-jamuna-television-74",
    "name": "Jamuna Television",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05y/index.m3u8"
  },
  {
    "id": "mp-max-movie-eng-75",
    "name": "MAX Movie Eng",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a0et/index.m3u8"
  },
  {
    "id": "mp-my-tv-hd-76",
    "name": "MY TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05z/index.m3u8"
  },
  {
    "id": "mp-madani-tv-77",
    "name": "Madani TV",
    "group": "Religious",
    "url": "http://103.229.254.25:7001/play/a05p/index.m3u8"
  },
  {
    "id": "mp-mohona-tv-78",
    "name": "Mohona TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05t/index.m3u8"
  },
  {
    "id": "mp-national-geographic-hd-79",
    "name": "National Geographic HD",
    "group": "Documentary",
    "url": "http://103.229.254.25:7001/play/a038/index.m3u8"
  },
  {
    "id": "mp-ntv-hd-80",
    "name": "NTV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a06g/index.m3u8"
  },
  {
    "id": "mp-news-24-hd-81",
    "name": "News 24 HD",
    "group": "News",
    "url": "http://103.229.254.25:7001/play/a06i/index.m3u8"
  },
  {
    "id": "mp-nick-jr-82",
    "name": "Nick Jr",
    "group": "Kids",
    "url": "http://103.229.254.25:7001/play/a0di/index.m3u8"
  },
  {
    "id": "mp-rtv-hd-83",
    "name": "Rtv HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a068/index.m3u8"
  },
  {
    "id": "mp-sa-tv-hd-84",
    "name": "SA TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a062/index.m3u8"
  },
  {
    "id": "mp-sangsad-tv-hd-85",
    "name": "Sangsad TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a069/index.m3u8"
  },
  {
    "id": "mp-set-hd-86",
    "name": "SET HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a09u/index.m3u8"
  },
  {
    "id": "mp-skynet-sports-87",
    "name": "SkyNet Sports",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0eh/index.m3u8"
  },
  {
    "id": "mp-somoy-tv-88",
    "name": "Somoy TV",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a05l/index.m3u8"
  },
  {
    "id": "mp-sony-sab-89",
    "name": "Sony SAB",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a09s/index.m3u8"
  },
  {
    "id": "mp-sony-sab-hd-90",
    "name": "Sony SAB HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a0db/index.m3u8"
  },
  {
    "id": "mp-sony-set-91",
    "name": "Sony SET",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a074/index.m3u8"
  },
  {
    "id": "mp-sony-ten-5-92",
    "name": "Sony Ten 5",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a072/index.m3u8"
  },
  {
    "id": "mp-star-movies-select-hd-93",
    "name": "Star Movies Select HD",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a02v/index.m3u8"
  },
  {
    "id": "mp-star-plus-94",
    "name": "Star Plus",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a079/index.m3u8"
  },
  {
    "id": "mp-star-sports-1-95",
    "name": "Star Sports 1",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a07f/index.m3u8"
  },
  {
    "id": "mp-sangeet-bangla-96",
    "name": "Sangeet Bangla",
    "group": "Music",
    "url": "http://103.229.254.25:7001/play/a07m/index.m3u8"
  },
  {
    "id": "mp-saudi-quran-97",
    "name": "Saudi Quran",
    "group": "Religious",
    "url": "http://103.229.254.25:7001/play/a07z/index.m3u8"
  },
  {
    "id": "mp-saudi-sunnah-98",
    "name": "Saudi Sunnah",
    "group": "Religious",
    "url": "http://103.229.254.25:7001/play/a07y/index.m3u8"
  },
  {
    "id": "mp-saudi-tv1-hd-99",
    "name": "Saudi TV1 HD",
    "group": "International",
    "url": "http://103.229.254.25:7001/play/a07v/index.m3u8"
  },
  {
    "id": "mp-sonic-100",
    "name": "Sonic",
    "group": "Kids",
    "url": "http://103.229.254.25:7001/play/a0dl/index.m3u8"
  },
  {
    "id": "mp-sony-pix-101",
    "name": "Sony PIX",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a06v/index.m3u8"
  },
  {
    "id": "mp-sony-set-alt-102",
    "name": "Sony SET (alt)",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a0eb/index.m3u8"
  },
  {
    "id": "mp-sony-yay-103",
    "name": "Sony YAY",
    "group": "Kids",
    "url": "http://103.229.254.25:7001/play/a06w/index.m3u8"
  },
  {
    "id": "mp-star-bangla-104",
    "name": "Star Bangla",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a0eo/index.m3u8"
  },
  {
    "id": "mp-star-gold-2-105",
    "name": "Star Gold 2",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a0df/index.m3u8"
  },
  {
    "id": "mp-star-sport-2-106",
    "name": "Star Sport 2",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a06x/index.m3u8"
  },
  {
    "id": "mp-star-sports-1-hd-107",
    "name": "Star Sports 1 HD",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0a0/index.m3u8"
  },
  {
    "id": "mp-ten-1-108",
    "name": "TEN 1",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a07c/index.m3u8"
  },
  {
    "id": "mp-ten-1-alt-109",
    "name": "TEN 1 (alt)",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0ee/index.m3u8"
  },
  {
    "id": "mp-ten-2-hd-110",
    "name": "TEN 2 HD",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0ef/index.m3u8"
  },
  {
    "id": "mp-ten-3-hindi-111",
    "name": "TEN 3 Hindi",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0eg/index.m3u8"
  },
  {
    "id": "mp-ten-5-112",
    "name": "TEN 5",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0en/index.m3u8"
  },
  {
    "id": "mp-the-q-113",
    "name": "The Q",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a07j/index.m3u8"
  },
  {
    "id": "mp-ten-cricket-114",
    "name": "Ten Cricket",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0ep/index.m3u8"
  },
  {
    "id": "mp-thepapare-1-115",
    "name": "ThePapare 1",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0ew/index.m3u8"
  },
  {
    "id": "mp-thepapare-2-116",
    "name": "ThePapare 2",
    "group": "Sports",
    "url": "http://103.229.254.25:7001/play/a0ex/index.m3u8"
  },
  {
    "id": "mp-travelxp-hd-117",
    "name": "Travelxp HD",
    "group": "Travel",
    "url": "http://103.229.254.25:7001/play/a0cy/index.m3u8"
  },
  {
    "id": "mp-zee-bangla-cinema-118",
    "name": "Zee Bangla Cinema",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a070/index.m3u8"
  },
  {
    "id": "mp-zee-cinema-119",
    "name": "Zee Cinema",
    "group": "Movies",
    "url": "http://103.229.254.25:7001/play/a06s/index.m3u8"
  },
  {
    "id": "mp-zee-cafe-hd-120",
    "name": "Zee Cafe HD",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a0cx/index.m3u8"
  },
  {
    "id": "mp-zee-tv-121",
    "name": "Zee TV",
    "group": "Entertainment",
    "url": "http://103.229.254.25:7001/play/a09t/index.m3u8"
  },
  {
    "id": "mp-asian-tv-hd-122",
    "name": "Asian TV HD",
    "group": "Bangladeshi",
    "url": "http://103.229.254.25:7001/play/a063/index.m3u8"
  },
  {
    "id": "mp-and-flix-hd-alt-123",
    "name": "and flix HD (alt)",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01u/index.m3u8"
  },
  {
    "id": "mp-and-pictures-hd-alt-124",
    "name": "and pictures HD (alt)",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01d/index.m3u8"
  },
  {
    "id": "mp-and-tv-hd-125",
    "name": "and tv HD",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a01e/index.m3u8"
  },
  {
    "id": "mp-colors-hd-alt-126",
    "name": "Colors HD (alt)",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a007/index.m3u8"
  },
  {
    "id": "mp-eurosport-hd-127",
    "name": "Eurosport HD",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a013/index.m3u8"
  },
  {
    "id": "mp-history-tv18-hd-128",
    "name": "History TV18 HD",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a01a/index.m3u8"
  },
  {
    "id": "mp-investigation-discovery-alt-129",
    "name": "Investigation Discovery (alt)",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a014/index.m3u8"
  },
  {
    "id": "mp-mnx-130",
    "name": "MNX",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a037/index.m3u8"
  },
  {
    "id": "mp-mtv-hd-131",
    "name": "MTV HD",
    "group": "Music",
    "url": "http://110.39.27.47:8001/play/a01p/index.m3u8"
  },
  {
    "id": "mp-movies-now-hd-132",
    "name": "Movies Now HD",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a00w/index.m3u8"
  },
  {
    "id": "mp-nat-geo-hd-133",
    "name": "Nat Geo HD",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a012/index.m3u8"
  },
  {
    "id": "mp-nat-geo-wild-hd-134",
    "name": "Nat Geo Wild HD",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a010/index.m3u8"
  },
  {
    "id": "mp-nick-alt-135",
    "name": "Nick (alt)",
    "group": "Kids",
    "url": "http://110.39.27.47:8001/play/a01n/index.m3u8"
  },
  {
    "id": "mp-nick-jr-alt-136",
    "name": "Nick Jr (alt)",
    "group": "Kids",
    "url": "http://110.39.27.47:8001/play/a00k/index.m3u8"
  },
  {
    "id": "mp-sony-max-137",
    "name": "Sony MAX",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01l/index.m3u8"
  },
  {
    "id": "mp-sony-pix-hd-138",
    "name": "Sony PIX HD",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01r/index.m3u8"
  },
  {
    "id": "mp-sony-sab-hd-alt-139",
    "name": "Sony SAB HD (alt)",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a00c/index.m3u8"
  },
  {
    "id": "mp-sony-sports-ten-2-hd-140",
    "name": "Sony Sports Ten 2 HD",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a01q/index.m3u8"
  },
  {
    "id": "mp-sony-sports-ten-3-hindi-141",
    "name": "Sony Sports Ten 3 Hindi",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a02z/index.m3u8"
  },
  {
    "id": "mp-sony-sports-ten-5-hd-142",
    "name": "Sony Sports Ten 5 HD",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a03t/index.m3u8"
  },
  {
    "id": "mp-star-gold-hd-143",
    "name": "Star Gold HD",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a00d/index.m3u8"
  },
  {
    "id": "mp-star-movies-hd-144",
    "name": "Star Movies HD",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01t/index.m3u8"
  },
  {
    "id": "mp-star-movies-select-hd-alt-145",
    "name": "Star Movies Select HD (alt)",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01s/index.m3u8"
  },
  {
    "id": "mp-star-plus-hd-146",
    "name": "Star Plus HD",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a005/index.m3u8"
  },
  {
    "id": "mp-sonic-alt-147",
    "name": "Sonic (alt)",
    "group": "Kids",
    "url": "http://110.39.27.47:8001/play/a00m/index.m3u8"
  },
  {
    "id": "mp-star-gold-2-alt-148",
    "name": "Star Gold 2 (alt)",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a031/index.m3u8"
  },
  {
    "id": "mp-star-gold-select-hd-149",
    "name": "Star Gold Select HD",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01c/index.m3u8"
  },
  {
    "id": "mp-star-gold-thrills-150",
    "name": "Star Gold Thrills",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a00b/index.m3u8"
  },
  {
    "id": "mp-star-sports-1-hd-alt-151",
    "name": "Star Sports 1 HD (alt)",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a006/index.m3u8"
  },
  {
    "id": "mp-star-sports-2-hindi-hd-152",
    "name": "Star Sports 2 Hindi HD",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a01m/index.m3u8"
  },
  {
    "id": "mp-star-sports-select-1-hd-153",
    "name": "Star Sports Select 1 HD",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a00o/index.m3u8"
  },
  {
    "id": "mp-hindi-hits-hd-154",
    "name": "Hindi Hits HD",
    "group": "Indian",
    "url": "http://146.59.253.52:8080/hindihitshd/index.m3u8"
  },
  {
    "id": "mp-histoire-hd-155",
    "name": "Histoire HD",
    "group": "Indian",
    "url": "http://151.80.18.177:86/Histoire/index.m3u8"
  },
  {
    "id": "mp-tf1-hd-156",
    "name": "TF1 HD",
    "group": "Indian",
    "url": "http://151.80.18.177:86/TF1_HD/index.m3u8"
  },
  {
    "id": "mp-discovery-hd-157",
    "name": "Discovery HD",
    "group": "Indian",
    "url": "http://151.80.18.177:86/Discovery_HD/index.m3u8"
  },
  {
    "id": "mp-eurosport-hd-alt-158",
    "name": "Eurosport HD (alt)",
    "group": "Indian",
    "url": "http://151.80.18.177:86/Eurosport_HD/index.m3u8"
  },
  {
    "id": "mp-discovery-kids-alt-159",
    "name": "Discovery Kids (alt)",
    "group": "Kids",
    "url": "https://dplus.gammacdn.workers.dev/videos/113.m3u8"
  },
  {
    "id": "mp-deepto-tv-alt-160",
    "name": "Deepto TV (alt)",
    "group": "Bangladeshi",
    "url": "https://byphdgllyk.gpcdn.net/hls/deeptotv/0_1/index.m3u8"
  },
  {
    "id": "mp-pbs-kids-161",
    "name": "PBS Kids",
    "group": "Kids",
    "url": "https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8"
  },
  {
    "id": "mp-zoo-moo-162",
    "name": "Zoo Moo",
    "group": "Kids",
    "url": "https://zoomoo-samsungau.amagi.tv/playlist.m3u8"
  },
  {
    "id": "mp-zoom-india-163",
    "name": "Zoom India",
    "group": "Hindi",
    "url": "https://airtel.rkdyiptv.workers.dev/live/497.m3u8"
  },
  {
    "id": "mp-mtv-plus-4k-164",
    "name": "MTV Plus 4K",
    "group": "Hindi",
    "url": "https://airtel.rkdyiptv.workers.dev/live/1724.m3u8"
  },
  {
    "id": "mp-nat-geo-wild-4k-india-165",
    "name": "Nat Geo Wild 4K India",
    "group": "Documentary",
    "url": "https://airtel.rkdyiptv.workers.dev/live/1732.m3u8"
  },
  {
    "id": "mp-amar-bangla-166",
    "name": "Amar Bangla",
    "group": "Bangladeshi",
    "url": "http://115.187.41.216:8080/hls/amarbangla/index.m3u8"
  },
  {
    "id": "mp-amar-digital-167",
    "name": "Amar Digital",
    "group": "Bangladeshi",
    "url": "http://115.187.41.216:8080/hls/amardigital/index.m3u8"
  },
  {
    "id": "mp-mon-tv-bangla-168",
    "name": "Mon TV Bangla",
    "group": "Bangladeshi",
    "url": "http://115.187.41.216:8080/hls/montvbangla/index.m3u8"
  },
  {
    "id": "mp-bhakti-bangla-169",
    "name": "Bhakti Bangla",
    "group": "Religious",
    "url": "http://115.187.41.216:8080/hls/bhaktibangla/index.m3u8"
  },
  {
    "id": "mp-discovery-kids-110-170",
    "name": "Discovery Kids (110)",
    "group": "Kids",
    "url": "http://110.39.27.47:8001/play/a00i/index.m3u8"
  },
  {
    "id": "mp-cartoonito-171",
    "name": "Cartoonito",
    "group": "Kids",
    "url": "http://181.78.4.250:8098/play/a067/index.m3u8"
  },
  {
    "id": "mp-discovery-kids-181-172",
    "name": "Discovery Kids (181)",
    "group": "Kids",
    "url": "http://181.78.4.250:8098/play/a08h/index.m3u8"
  },
  {
    "id": "mp-atv-hd-turkey-173",
    "name": "ATV HD Turkey",
    "group": "International",
    "url": "http://89.187.191.41/ATV-HD-TR/video.m3u8"
  },
  {
    "id": "mp-hi-dost-174",
    "name": "Hi Dost",
    "group": "Entertainment",
    "url": "https://mumt03.tangotv.in/HIDOST/index.m3u8"
  },
  {
    "id": "mp-zee-24-ghanta-175",
    "name": "Zee 24 Ghanta",
    "group": "News",
    "url": "https://d2dsoyvkr33m05.cloudfront.net/index_1.m3u8"
  },
  {
    "id": "mp-aakash-aath-176",
    "name": "Aakash Aath",
    "group": "Bangladeshi",
    "url": "https://mumt03.tangotv.in/AAKASHAATH/index.m3u8"
  },
  {
    "id": "mp-discovery-hd-alt-177",
    "name": "Discovery HD (alt)",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a017/index.m3u8"
  },
  {
    "id": "mp-discovery-science-alt-178",
    "name": "Discovery Science (alt)",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a018/index.m3u8"
  },
  {
    "id": "mp-discovery-turbo-179",
    "name": "Discovery Turbo",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a00u/index.m3u8"
  },
  {
    "id": "mp-romedy-now-180",
    "name": "Romedy Now",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a015/index.m3u8"
  },
  {
    "id": "mp-set-hd-alt-181",
    "name": "SET HD (alt)",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a004/index.m3u8"
  },
  {
    "id": "mp-star-gold-romance-182",
    "name": "Star Gold Romance",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a01i/index.m3u8"
  },
  {
    "id": "mp-star-sports-select-2-hd-183",
    "name": "Star Sports Select 2 HD",
    "group": "Sports",
    "url": "http://110.39.27.47:8001/play/a032/index.m3u8"
  },
  {
    "id": "mp-tlc-hd-184",
    "name": "TLC HD",
    "group": "Documentary",
    "url": "http://110.39.27.47:8001/play/a00z/index.m3u8"
  },
  {
    "id": "mp-zee-cinema-hd-185",
    "name": "Zee Cinema HD",
    "group": "Movies",
    "url": "http://110.39.27.47:8001/play/a00q/index.m3u8"
  },
  {
    "id": "mp-zee-tv-hd-186",
    "name": "Zee TV HD",
    "group": "Entertainment",
    "url": "http://110.39.27.47:8001/play/a01o/index.m3u8"
  },
  {
    "id": "mp-probashi-tv-news-187",
    "name": "Probashi TV News",
    "group": "News",
    "url": "http://158.69.24.53:8080/probashi_tv/index.m3u8"
  },
  {
    "id": "mp-gopal-bhar-188",
    "name": "Gopal Bhar",
    "group": "Kids",
    "url": "https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8"
  },
  {
    "id": "mp-motu-patlu-189",
    "name": "Motu Patlu",
    "group": "Kids",
    "url": "https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8"
  },
  {
    "id": "mp-doraemon-190",
    "name": "Doraemon",
    "group": "Kids",
    "url": "https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8"
  }
];

export default MEGAPACK_CHANNELS;
