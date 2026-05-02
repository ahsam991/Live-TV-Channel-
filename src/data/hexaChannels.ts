// @ts-nocheck
/**
 * data/hexaChannels.js
 * IPTV HEXA PRO playlist by ABU SAEEiD × Rifaz (xfireflix)
 * Direct HLS/MP4/TS streams — plays via hls.js natively.
 */

const HEXA_CHANNELS = [
  // ── Bangla / BD ──────────────────────────────────────────────────────────
  { id: 'deshi-tv',       name: 'Deshi TV',              group: 'Bangla',   logo: '', url: 'https://deshitv.deshitv24.net/live/myStream/playlist.m3u8' },
  { id: 'somoy-news',     name: 'Somoy News',            group: 'News',     logo: 'https://i.postimg.cc/Qxn4JFNV/20250529-071147.png', url: 'https://bozztv.com/rongo/rongo-somoy/index.m3u8' },
  { id: 'green-tv',       name: 'Green TV',              group: 'Bangla',   logo: 'https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Green%20TV.png', url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/playlist.m3u8' },
  { id: 'desh-tv',        name: 'Desh TV',               group: 'Bangla',   logo: 'https://tvassets.roarzone.info/images/9.png', url: 'https://bozztv.com/rongo/rongo-DeshTV/index.m3u8' },
  { id: 'ekushey-tv',     name: 'Ekushey TV',            group: 'Bangla',   logo: 'https://tvassets.roarzone.info/images/65.png', url: 'https://ekusheyserver.com/etvlivesn.m3u8' },
  { id: 'rongeen-tv',     name: 'Rongeen TV',            group: 'Bangla',   logo: '', url: 'https://server.thelegitpro.in/rongeentv/rongeentv/tracks-v1a1/mono.m3u8' },
  { id: 'ekhon-tv',       name: 'Ekhon TV',              group: 'Bangla',   logo: 'https://i.postimg.cc/sggzvQ6X/20250529-105045.png', url: 'https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/globaltv.stream/tracks-v1a1/mono.m3u8' },
  { id: 'channel-16',     name: 'Channel 16',            group: 'Bangla',   logo: '', url: 'https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/channel16bd.stream/tracks-v1a1/mono.m3u8' },
  { id: 'ntv-uk',         name: 'NTV UK',                group: 'Bangla',   logo: '', url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/ntvuk00332211.stream/playlist.m3u8' },
  { id: 'green-tv-2',     name: 'Green TV (Alt)',         group: 'Bangla',   logo: 'https://raw.githubusercontent.com/subirkumarpaul/Logo/main/Green%20TV.png', url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/greentv.stream/live-orgin/greentv.stream/chunks.m3u8' },
  { id: 'desh-tv-2',      name: 'Desh TV (Alt)',          group: 'Bangla',   logo: 'https://tvassets.roarzone.info/images/9.png', url: 'https://app24.jagobd.com.bd/c3VydmVyX8RpbEU9Mi8xNy8yMFDEEHGcfRgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcEdsEfeDeKiNkVN3PTOmdFseWRtaW51aiPhnPTI2/deshtv.stream/tracks-v1/mono.m3u8' },
  { id: 'star-jalsha-hd', name: 'Star Jalsha HD',        group: 'Bangla',   logo: 'https://tvassets.roarzone.info/images/30.png', url: 'https://playztv-apps.pages.dev/star-jalsha/index.m3u8' },
  { id: 'kolkata-tv',     name: 'Kolkata TV',            group: 'Bangla',   logo: '', url: 'https://cdn.ottlive.co.in/kolkatatv/index.m3u8' },
  { id: 'rajdhani-tv',    name: 'Rajdhani TV',           group: 'Bangla',   logo: '', url: 'https://stream.shariarsuvo.com/hls5/rajdhanicable.m3u8' },
  { id: 'zb-cinema',      name: 'ZB Cinema',             group: 'Bangla',   logo: '', url: 'https://server.zillarbarta.com/ZBCINEMA/tracks-v1a1/mono.ts.m3u8' },

  // ── Islamic / Religious ───────────────────────────────────────────────────
  { id: 'waz-tv',           name: 'WAZ TV',              group: 'Islamic',  logo: '', url: 'https://tplay.live/originals/ilm-tv/index.m3u8' },
  { id: 'waz-tv-azhari',    name: 'WAZ TV (Azhari)',     group: 'Islamic',  logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209617/master.m3u8' },
  { id: 'azan-tv',          name: 'Azan TV',             group: 'Islamic',  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU_idVchUr-IGT6csSe94IJYOYZafaEr4Dg&s', url: 'https://dbcanada.sonarbanglatv.com/azantv/atv/index.m3u8' },
  { id: 'live-quran-tv',    name: 'Live Quran TV',       group: 'Islamic',  logo: '', url: 'https://live.kwikmotion.com/sharjahtvquranlive/shqurantv.smil/playlist.m3u8' },
  { id: 'quran-radiotv',    name: 'QURAN RadioTV SMC',   group: 'Islamic',  logo: '', url: 'https://live.kwikmotion.com/smcquranlive/quranradiolive/playlist.m3u8' },
  { id: 'sunnah-tv',        name: 'Sunnah TV',           group: 'Islamic',  logo: '', url: 'http://m.live.net.sa:1935/live/sunnah/chunklist.m3u8?v=1' },
  { id: 'al-sunnah-tv',     name: 'AL SUNNAH TV',        group: 'Islamic',  logo: '', url: 'http://m.live.net.sa:1935/live/sunnah/playlist.m3u8' },
  { id: 'quran-tv',         name: 'QURAN TV',            group: 'Islamic',  logo: '', url: 'http://m.live.net.sa:1935/live/quran/playlist.m3u8' },
  { id: 'bahrain-quran',    name: 'Bahrain Quran',       group: 'Islamic',  logo: '', url: 'https://5c7b683162943.streamlock.net/live/ngrp:bahrainquran_all/playlist.m3u8' },
  { id: 'al-istiqama',      name: 'AL ISTIQAMA',         group: 'Islamic',  logo: '', url: 'https://jmc-live.ercdn.net/alistiqama/alistiqama.m3u8' },
  { id: 'al-sunnah-nab',    name: 'AL SUNNAH AL NABAWIYAH', group: 'Islamic', logo: '', url: 'https://cdn-globecast.akamaized.net/live/eds/saudi_quran/hls_roku/index.m3u8' },
  { id: 'madani-tv',        name: 'Madani TV',           group: 'Islamic',  logo: '', url: 'https://streaming.madanichannel.tv/static/streaming-playlists/hls/d3e49b76-ac06-4689-a641-9200445b647f/master.m3u8' },
  { id: 'al-quran-radio',   name: 'Al Quran Radio',      group: 'Islamic',  logo: '', url: 'http://66.45.232.131:9994/;stream.mp3' },

  // ── Sports ────────────────────────────────────────────────────────────────
  { id: 'epl-live',         name: 'EPL LIVE',            group: 'Sports',   logo: '', url: 'https://eventcdn02-nowe.akamaized.net/hls/CH621/index.m3u8' },
  { id: 'pro-sport-intl',   name: 'PRO Sport International', group: 'Sports', logo: '', url: 'https://proshls.wns.live/hls/stream.m3u8' },
  { id: 'a-spor',           name: 'A SPOR',              group: 'Sports',   logo: '', url: 'https://rnttwmjcin.turknet.ercdn.net/lcpmvefbyo/aspor/aspor_480p.m3u8' },
  { id: 'bein-sports-1',    name: 'Bein Sports 1',       group: 'Sports',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Logo_bein_sports_1.png/1280px-Logo_bein_sports_1.png', url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg02873-kravemedia-mtrspt1-distrotv/playlist.m3u8' },
  { id: 'bein-sports-1b',   name: 'BeIN Sports 1 (Alt)', group: 'Sports',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Logo_bein_sports_1.png/1280px-Logo_bein_sports_1.png', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/652310.ts' },
  { id: 'bein-sports-2',    name: 'BeIN Sports 2',       group: 'Sports',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Logo_bein_sports_2.png/1280px-Logo_bein_sports_2.png?20170228135704', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/652311.ts' },
  { id: 'bein-sports-3',    name: 'BeIN Sports 3',       group: 'Sports',   logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Logo_bein_sports_3.png/1280px-Logo_bein_sports_3.png?20170228140009', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/652312.ts' },
  { id: 'star-sports-1',    name: 'Star Sports 1 HD',    group: 'Sports',   logo: 'https://tvassets.roarzone.info/images/25.png', url: 'http://41.205.93.154/STARSPORTS1/index.m3u8' },
  { id: 'star-sports-1b',   name: 'Star Sports 1 (Alt)', group: 'Sports',   logo: 'https://tvassets.roarzone.info/images/25.png', url: 'https://tcfbrravdlgqrymqfcgu.supabase.co/functions/v1/stream-proxy?url=http%3A%2F%2F180.94.28.28%3A8097%2FSTAR-SPORTS-1%2Ftracks-v1a1%2Fmono.m3u8' },
  { id: 'star-sports-3',    name: 'Star Sports 3',       group: 'Sports',   logo: 'https://tvassets.roarzone.info/images/26.png', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/1080.ts' },
  { id: 'ten-sports',       name: 'Ten Sports',          group: 'Sports',   logo: 'https://tvassets.roarzone.info/images/ten_cricket.png', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/98.ts' },
  { id: 'ten-sports-cricket',name: 'Ten Sports Cricket', group: 'Sports',   logo: '', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/514856.ts' },
  { id: 'super-sport-cricket', name: 'Super Sport Cricket', group: 'Sports', logo: '', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/158442.ts' },
  { id: 'live-sports-3',    name: 'Live Sports 3',       group: 'Sports',   logo: '', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/196347.ts' },
  { id: 'live-sports-4',    name: 'Live Sports 4',       group: 'Sports',   logo: '', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/2494.ts' },
  { id: 'live-sports-5',    name: 'Live Sports 5',       group: 'Sports',   logo: '', url: 'http://151.80.18.177:86/Eurosport_HD/index.m3u8' },
  { id: 'willow-hd',        name: 'Willow HD',           group: 'Sports',   logo: '', url: 'https://tcfbrravdlgqrymqfcgu.supabase.co/functions/v1/stream-proxy?url=https://game.denver69.fun/Series/willow_eng.m3u8' },
  { id: 'mk-six',           name: 'MK Six',              group: 'Sports',   logo: '', url: 'https://cdn-3.pishow.tv/live/1253/master.m3u8' },

  // ── News ─────────────────────────────────────────────────────────────────
  { id: 'france-news-24',   name: 'France News 24',      group: 'News',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/France24_logo.svg/120px-France24_logo.svg.png', url: 'https://live.france24.com/hls/live/2037179/F24_FR_HI_HLS/master_5000.m3u8' },
  { id: 'france-24-en',     name: 'France 24 English',   group: 'News',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/France24_logo.svg/120px-France24_logo.svg.png', url: 'https://live.france24.com/hls/live/2037218-b/F24_EN_HI_HLS/master_2300.m3u8' },
  { id: 'france-24-alt',    name: 'France 24 (Alt)',      group: 'News',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/France24_logo.svg/120px-France24_logo.svg.png', url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/fr24.stream/playlist.m3u8' },
  { id: 'dw-news',          name: 'DW NEWS',             group: 'News',     logo: 'https://tvassets.roarzone.info/images/85.png', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/stream02/streamPlaylist.m3u8' },
  { id: 'dw-english',       name: 'DW English',          group: 'News',     logo: 'https://tvassets.roarzone.info/images/85.png', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8' },
  { id: 'trt-world',        name: 'TRT WORLD',           group: 'News',     logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/TRT_World_logo.svg/120px-TRT_World_logo.svg.png', url: 'https://tv-trtworld.medya.trt.com.tr/master.m3u8' },
  { id: 'al-ekhbaria',      name: 'AL EKHBARIA',         group: 'News',     logo: '', url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-al-ekhbaria/297b3ef1cd0633ad9cfba7473a686a06/index.m3u8' },
  { id: 'al-ekhbaria-2',    name: 'AL EKHBARIA (Alt)',   group: 'News',     logo: '', url: 'https://cdn-globecast.akamaized.net/live/eds/al_ekhbariya/hls_roku/index.m3u8' },
  { id: 'almasira',         name: 'AL MASIRA',           group: 'News',     logo: '', url: 'https://live2.cdnbridge.tv/AlmasirahMubasher/Mubasher_All/playlist.m3u8' },
  { id: 'ndtv-news',        name: 'NDTV NEWS',           group: 'News',     logo: '', url: 'https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678-b/ndtv24x7/master.m3u8' },
  { id: 'ndtv-english',     name: 'NDTV English',        group: 'News',     logo: '', url: 'https://ndtv24x7elemarchana.akamaized.net/hls/live/2003678/ndtv24x7/master.m3u8' },
  { id: 'ndtv-hindi',       name: 'NDTV Hindi',          group: 'News',     logo: '', url: 'https://ndtvindiaelemarchana.akamaized.net/hls/live/2003679/ndtvindia/master.m3u8' },
  { id: 'cnn-us',           name: 'CNN (US)',             group: 'News',     logo: 'https://tvassets.roarzone.info/images/cnn.png', url: 'https://turnerlive.warnermediacdn.com/hls/live/586495/cnngo/cnn_slate/VIDEO_0_3564000.m3u8' },
  { id: 'rt-news',          name: 'RT News',             group: 'News',     logo: '', url: 'https://rt-glb.rttv.com/live/rtnews/playlist.m3u8' },
  { id: 'rt-news-usa',      name: 'RT NEWS USA',         group: 'News',     logo: '', url: 'https://rt-glb.rttv.com/live/rtnews/playlist.m3u8?v=1' },
  { id: 'rtnews-global',    name: 'RTNEWS GLOBAL',       group: 'News',     logo: '', url: 'https://rt-rtd.rttv.com/dvr/rtdoc/playlist.m3u8?v=1' },
  { id: 'press-tv',         name: 'Press TV Iran',       group: 'News',     logo: '', url: 'https://live.presstv.ir/hls/presstv_5_482/index.m3u8' },
  { id: 'iran-intl',        name: 'Iran International',  group: 'News',     logo: '', url: 'https://dev-live.livetvstream.co.uk/LS-63503-4/chunklist_b1196000.m3u8' },
  { id: 'newsmax-2',        name: 'News Max 2',          group: 'News',     logo: '', url: 'https://nmxlive.akamaized.net/hls/live/529965/Live_1/index.m3u8' },
  { id: 'cgtn-news',        name: 'CGTN News',           group: 'News',     logo: '', url: 'https://app.ncare.live/c3VydmVyX8RpbEU9Mi8xNy8yMDE0GIDU6RgzQ6NTAgdEoaeFzbF92YWxIZTO0U0ezN1IzMyfvcGVMZEJCTEFWeVN3PTOmdFsaWRtaW51aiPhnPTI2/cgtn.stream/playlist.m3u8' },
  { id: 'global-news-us',   name: 'Global News (US)',    group: 'News',     logo: '', url: 'https://live.corusdigitaldev.com/groupb/live/3062d0e3-ed4c-4f47-8482-95648250f4b8/live.isml/.m3u8' },
  { id: 't-global-news',    name: 'T Global News',       group: 'News',     logo: '', url: 'https://live.corusdigitaldev.com/groupd/live/49a91e7f-1023-430f-8d66-561055f3d0f7/live.isml/master.m3u8' },
  { id: 'saudia-tv',        name: 'Saudi Arabia TV',     group: 'News',     logo: '', url: 'https://shd-gcp-live.edgenextcdn.net/live/bitmovin-saudi-tv/2ad66056b51fd8c1b624854623112e43/index.m3u8' },
  { id: 'times-of-india',   name: 'Times Of India',      group: 'News',     logo: '', url: 'https://live.sli.ke/live/npnhm84gz9/master.m3u8' },
  { id: 'nhk-world',        name: 'NHK World',           group: 'News',     logo: '', url: 'http://103.175.73.12:8080/live/417/417_0.m3u8' },
  { id: 'r-plus-news',      name: 'R Plus News',         group: 'News',     logo: '', url: 'https://thelegitpro.in/pntv/rplusnews24x7/tracks-v1a1/mono.m3u8' },

  // ── Kids ──────────────────────────────────────────────────────────────────
  { id: 'cartoon-network',  name: 'Cartoon Network',     group: 'Kids',     logo: 'https://tvassets.roarzone.info/images/79.png', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209624/index.m3u8' },
  { id: 'pbs-kids',         name: 'PBS Kids',            group: 'Kids',     logo: '', url: 'https://2-fss-2.streamhoster.com/pl_140/amlst:200914-1298290/playlist.m3u8' },
  { id: 'bbc-cbeebies',     name: 'BBC Cbeebies',        group: 'Kids',     logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209622/index.m3u8' },
  { id: 'gopal-bhar',       name: '24/7 Gopal Bhar',     group: 'Kids',     logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209611/master.m3u8' },
  { id: 'shinchan',         name: '24/7 Shinchan',       group: 'Kids',     logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209901/master.m3u8' },
  { id: 'motu-patlu',       name: '24/7 Motu Patlu',     group: 'Kids',     logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209622/master.m3u8' },
  { id: 'doraemon',         name: '4/7 Doraemon',        group: 'Kids',     logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209902/master.m3u8' },
  { id: 'tom-jerry',        name: 'Tom & Jerry',         group: 'Kids',     logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-208314/playlist.m3u8' },
  { id: 'zb-cartoon',       name: 'ZB Cartoon',          group: 'Kids',     logo: '', url: 'https://server.zillarbarta.com/zbcatun/video.m3u8' },
  { id: 'zb-kartun',        name: 'ZB Kartun',           group: 'Kids',     logo: '', url: 'https://server.zillarbarta.com/zbcatun/tracks-v1a1/mono.ts.m3u8' },
  { id: 'gopal-bhar-2',     name: 'Gopal Bhar (HD)',     group: 'Kids',     logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209611/tracks-v1a1/mono.ts.m3u8' },
  { id: 'motu-patlu-2',     name: 'Motu Patlu (HD)',     group: 'Kids',     logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209622/tracks-v1a1/mono.ts.m3u8' },
  { id: 'doraemon-2',       name: 'Doraemon (HD)',        group: 'Kids',     logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209902/tracks-v1a1/mono.ts.m3u8' },

  // ── Movies ────────────────────────────────────────────────────────────────
  { id: 'kolkata-movies',   name: 'Kolkata Movies',      group: 'Movies',   logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209627/master.m3u8' },
  { id: 'bollywood-movies-1',name: 'Bollywood Movies 1', group: 'Movies',   logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209612/master.m3u8' },
  { id: 'bollywood-movies-2',name: 'Bollywood Movies 2', group: 'Movies',   logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209593/master.m3u8' },
  { id: 'action-hollywood', name: 'Action Hollywood',    group: 'Movies',   logo: '', url: 'https://amg01076-lightningintern-actionhollywood-samsungnz-82rry.amagi.tv/playlist/amg01076-lightningintern-actionhollywood-samsungnz/playlist.m3u8' },
  { id: 'goldmines-movies', name: 'Goldmines Movies',    group: 'Movies',   logo: '', url: 'https://cdn-2.pishow.tv/live/1461/master.m3u8' },
  { id: 'goldmines-movies-2',name: 'Goldmines Movies 2', group: 'Movies',   logo: '', url: 'https://cdn-2.pishow.tv/live/1460/master.m3u8' },
  { id: 'goldmines',        name: 'Goldmines',           group: 'Movies',   logo: '', url: 'https://cdn-2.pishow.tv/live/1459/master.m3u8' },
  { id: 'goldmines-bollywood', name: 'Goldmines Bollywood', group: 'Movies', logo: '', url: 'http://103.175.73.12:8080/live/52/52_0.m3u8' },
  { id: 'sheemaroo-bolly',  name: 'Sheemaroo Bollywood', group: 'Movies',   logo: '', url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg00864-shemarooenterta-shemabollywood-ono/playlist.m3u8' },
  { id: 'south-movies',     name: 'South Movies',        group: 'Movies',   logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209593/tracks-v1a1/mono.ts.m3u8' },
  { id: 'hindi-movies',     name: 'Hindi Movies',        group: 'Movies',   logo: '', url: 'https://live20.bozztv.com/giatvplayout7/giatv-209612/tracks-v1a1/mono.ts.m3u8' },
  { id: 'star-gold-2',      name: 'Star Gold 2 HD',      group: 'Movies',   logo: 'https://tvassets.roarzone.info/images/75.png', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/157081.ts' },
  { id: 'mbc-tv',           name: 'MBC TV',              group: 'Movies',   logo: '', url: 'http://93.184.10.248/MBCBollywood/index.m3u8' },
  { id: 'arihant-tv',       name: 'Arihant TV',          group: 'Movies',   logo: '', url: 'https://aasthaott.akamaized.net/110923/smil:arihant.smil/chunklist_b1928000.m3u8' },
  { id: 'big-magic',        name: 'Big Magic',           group: 'Movies',   logo: '', url: 'http://103.175.73.12:8080/live/13/13_0.m3u8' },
  { id: 'b4u-kadak',        name: 'B4U Kadak',           group: 'Movies',   logo: '', url: 'https://cdn-2.pishow.tv/live/227/master.m3u8' },
  { id: 'jalsha-movies-hd', name: 'Jalsha Movies HD',    group: 'Movies',   logo: 'https://tvassets.roarzone.info/images/31.png', url: 'http://Rochdi@starshare.net:80/live/Suryaaa/SURYAAAA/425.ts' },
  { id: 'g-series',         name: 'G-Series',            group: 'Movies',   logo: '', url: 'https://vods2.aynaott.com/gseriesDrama/tracks-v1a1/mono.ts.m3u8' },

  // ── Music ─────────────────────────────────────────────────────────────────
  { id: 'yrf-music',        name: 'YRF Music HD',        group: 'Music',    logo: '', url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01412-xiaomiasia-yrfmusic-xiaomi/playlist.m3u8' },
  { id: 'hindi-hits-hd',    name: 'Hindi Hits HD',       group: 'Music',    logo: '', url: 'http://146.59.253.52:8080/hindihitshd/index.m3u8' },
  { id: 'joo-music',        name: 'Joo Music',           group: 'Music',    logo: '', url: 'https://livecdn.live247stream.com/joomusic/tv/playlist.m3u8' },
  { id: 'rtv-music',        name: 'RTV Music',           group: 'Music',    logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209587/master.m3u8' },
  { id: '9xm',              name: '9XM',                 group: 'Music',    logo: 'https://tvassets.roarzone.info/images/48.png', url: 'http://103.175.73.12:8080/live/155/155_0.m3u8' },
  { id: 'music-india',      name: 'Music India',         group: 'Music',    logo: '', url: 'http://103.175.73.12:8080/live/158/158_0.m3u8' },
  { id: 'ptc-music',        name: 'PTC Music',           group: 'Music',    logo: '', url: 'https://cloudfrontnet.vercel.app/tplay/playout/209592/master.m3u8' },
  { id: 'baallee',          name: 'Baallee',             group: 'Music',    logo: '', url: 'https://mcncdndigital.com/balleballetv/tracks-v1a1/mono.ts.m3u8' },
  { id: 'fm-radio',         name: 'FM Radio',            group: 'Music',    logo: '', url: 'https://stream.spicefmbd.com/stream.m3u8' },
  { id: 'radio-bater',      name: 'Radio Bater BD',      group: 'Music',    logo: '', url: 'http://as31.digitalsynapsebd.com:8446/;stream.mp3' },

  // ── Entertainment / Misc ─────────────────────────────────────────────────
  { id: 'travel-xp',        name: 'Travel XP English',   group: 'Travel',   logo: '', url: 'https://travelxp-travelxp-1-eu.rakuten.wurl.tv/playlist.m3u8' },
  { id: 'travel-xp-nz',     name: 'Travel XP NZ',        group: 'Travel',   logo: '', url: 'https://travelxp-travelxp-1-nz.samsung.wurl.tv/playlist.m3u8' },
  { id: 'real-wild',        name: 'REAL WILD',           group: 'Documentary', logo: '', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg00426-littledotstudio-realwild-tcl/playlist.m3u8' },
  { id: 'insight-tv',       name: 'Insight TV',          group: 'Documentary', logo: '', url: 'https://insighttv-samsung-us.amagi.tv/playlist.m3u8' },
  { id: 'love-nature',      name: 'Love Nature',         group: 'Documentary', logo: '', url: 'https://cdn1.logichost.in/ajmantv/live/playlist.m3u8' },
  { id: 'motor-vision',     name: 'Motor Vision',        group: 'Documentary', logo: '', url: 'https://mvg-mv-xumo.otteravision.com/mvg/mv/mv.m3u8' },
  { id: 'fashion-one',      name: 'FASHION ONE',         group: 'Entertainment', logo: '', url: 'https://b01c02nl.mediatriple.net/videoonlylive/mtkgeuihrlfwlive/broadcast_5c9e2ee690051.smil/playlist.m3u8' },
  { id: 'arabica-tv',       name: 'Arabica TV',          group: 'Entertainment', logo: '', url: 'http://istream.binarywaves.com:8081/hls/arabica/playlist.m3u8' },
  { id: 'amazon-sat',       name: 'Amazon SAT',          group: 'Entertainment', logo: '', url: 'https://amazonsat.brasilstream.com.br/hls/amazonsat/index.m3u8' },
  { id: 'ewtn-tv',          name: 'EWTN TV',             group: 'Entertainment', logo: '', url: 'https://cdn3.wowza.com/1/ZVBYYXFLLzE0c3NC/Qk1FMURC/hls/qrpsvkxl/720/chunklist.m3u8' },
  { id: 'cowboy-tv',        name: 'Cowboy TV',           group: 'Entertainment', logo: '', url: 'https://amg17292-amg17292c1-distrotv-us-4170.playouts.now.amagi.tv/playlist/amg17292-tetonridgellc-tetonridgefast-distrotvus/playlist.m3u8' },
  { id: 'zee-anmol',        name: 'Zee Anmol TV',        group: 'Entertainment', logo: 'https://tvassets.roarzone.info/images/zee-anmol.png', url: 'http://103.175.73.12:8080/live/256/256_0.m3u8' },
  { id: 'zee-action',       name: 'Zee Action',          group: 'Entertainment', logo: 'https://tvassets.roarzone.info/images/90.png', url: 'http://103.175.73.12:8080/live/270/270_0.m3u8' },
  { id: 'food-food',        name: 'Food Food',           group: 'Entertainment', logo: '', url: 'http://103.175.73.12:8080/live/143/143_0.m3u8' },
  { id: 'e24',              name: 'E24',                 group: 'Entertainment', logo: '', url: 'http://103.175.73.12:8080/live/159/159_0.m3u8' },
  { id: 'digital-fashion',  name: 'Digital Fashion',     group: 'Entertainment', logo: '', url: 'http://115.187.41.216:8080/hls/digitalfashion/index.m3u8' },
  { id: 'sochi-24',         name: 'Sochi 24 HD',         group: 'Entertainment', logo: '', url: 'http://serv30.vintera.tv:8081/sochi/sochi24_tv/playlist.m3u8' },
];

export default HEXA_CHANNELS;

export function getHexaCategories() {
  const seen = new Set();
  return HEXA_CHANNELS
    .map(c => c.group)
    .filter(g => !seen.has(g) && seen.add(g));
}
