import type { City } from "@/app/types/city";

const cities: {
  [name: string]: [
    string,
    number,
    number,
    number,
    string,
    string
  ];
} = {
  "SUZHOU": [
    "China",
    31.30408,
    120.59538,
    4330000,
    "Asia",
    ""
  ],
  "NEW YORK CITY": [
    "United States",
    40.71427,
    -74.00597,
    8804190,
    "North America",
    ""
  ],
  "HELSINKI": [
    "Finland",
    60.16952,
    24.93545,
    558457,
    "Europe",
    ""
  ],
  "FRANKFURT": [
    "Germany",
    50.11552,
    8.68417,
    650000,
    "Europe",
    "is sometimes known as \"Mainhattan,\" boasting 14 of the 15th tallest skyscrapers in Germany"
  ],
  "MILWAUKEE": [
    "United States",
    43.0389,
    -87.90647,
    600155,
    "North America",
    ""
  ],
  "ABU DHABI": [
    "United Arab Emirates",
    24.45118,
    54.39696,
    603492,
    "Asia",
    ""
  ],
  "LAGOS": [
    "Nigeria",
    6.45407,
    3.39467,
    9000000,
    "Africa",
    ""
  ],
  "NINGBO": [
    "China",
    29.87819,
    121.54945,
    3731203,
    "Asia",
    "has the busiest port in the world, handling over 1 million kilotons in 2019"
  ],
  "HONOLULU": [
    "United States",
    21.30694,
    -157.85833,
    371657,
    "North America",
    "is the birthplace of the 44th U.S. President - Barack Obama"
  ],
  "DILI": [
    "Timor-Leste",
    -8.55861,
    125.57361,
    150000,
    "Asia",
    ""
  ],
  "SANTIAGO": [
    "Dominican Republic",
    19.4517,
    -70.69703,
    1200000,
    "North America",
    ""
  ],
  "KARACHI": [
    "Pakistan",
    24.8608,
    67.0104,
    11624219,
    "Asia",
    "is sometimes known as the Paris of the East"
  ],
  "TIRASPOL": [
    "Moldova, Republic of",
    46.84274,
    29.62909,
    157000,
    "Europe",
    ""
  ],
  "LONG BEACH": [
    "United States",
    33.76696,
    -118.18923,
    474140,
    "North America",
    ""
  ],
  "CAPE TOWN": [
    "South Africa",
    -33.92584,
    18.42322,
    3433441,
    "Africa",
    ""
  ],
  "NIZHNIY NOVGOROD": [
    "Russian Federation",
    56.32867,
    44.00205,
    1284164,
    "Europe",
    ""
  ],
  "CHICAGO": [
    "United States",
    41.85003,
    -87.65005,
    2720546,
    "North America",
    ""
  ],
  "MELBOURNE": [
    "Australia",
    -37.814,
    144.96332,
    4246375,
    "Oceania",
    ""
  ],
  "CHENNAI": [
    "India",
    13.08784,
    80.27847,
    4681087,
    "Asia",
    ""
  ],
  "LIMA": [
    "Peru",
    -12.04318,
    -77.02824,
    7737002,
    "South America",
    ""
  ],
  "SYDNEY": [
    "Australia",
    -33.86785,
    151.20732,
    4627345,
    "Oceania",
    ""
  ],
  "RIYADH": [
    "Saudi Arabia",
    24.68773,
    46.72185,
    4205961,
    "Asia",
    ""
  ],
  "SOWETO": [
    "South Africa",
    -26.26781,
    27.85849,
    1695047,
    "Africa",
    ""
  ],
  "ABIDJAN": [
    "Côte d'Ivoire",
    5.35444,
    -4.00167,
    3677115,
    "Africa",
    ""
  ],
  "BUENOS AIRES": [
    "Argentina",
    -34.61315,
    -58.37723,
    13076300,
    "South America",
    ""
  ],
  "VALPARAÍSO": [
    "Chile",
    -33.036,
    -71.62963,
    282448,
    "South America",
    ""
  ],
  "OMAHA": [
    "United States",
    41.25626,
    -95.94043,
    486051,
    "North America",
    ""
  ],
  "LEIPZIG": [
    "Germany",
    51.33962,
    12.37129,
    504971,
    "Europe",
    ""
  ],
  "SKOPJE": [
    "North Macedonia",
    41.99646,
    21.43141,
    474889,
    "Europe",
    ""
  ],
  "HAVANA": [
    "Cuba",
    23.13302,
    -82.38304,
    2163824,
    "North America",
    ""
  ],
  "BAMAKO": [
    "Mali",
    12.65,
    -8,
    1297281,
    "Africa",
    ""
  ],
  "COLUMBUS": [
    "United States",
    39.96118,
    -82.99879,
    905748,
    "North America",
    "is the home of \"The\" Ohio State University. Students always make sure to emphasize the \"The\" in the name"
  ],
  "NICE": [
    "France",
    43.70313,
    7.26608,
    338620,
    "Europe",
    ""
  ],
  "CHATTOGRAM": [
    "Bangladesh",
    22.3384,
    91.83168,
    3920222,
    "Asia",
    ""
  ],
  "TIRANA": [
    "Albania",
    41.3275,
    19.81889,
    374801,
    "Europe",
    ""
  ],
  "DURHAM": [
    "United States",
    35.99403,
    -78.89862,
    257636,
    "North America",
    ""
  ],
  "ANKARA": [
    "Turkey",
    39.91987,
    32.85427,
    3517182,
    "Asia",
    "was formally Angora, but was renamed to Ankara after the fall of the Ottoman Empire in 1923. It then became the capital of Turkey"
  ],
  "BUCHAREST": [
    "Romania",
    44.43225,
    26.10626,
    1877155,
    "Europe",
    ""
  ],
  "AURORA": [
    "United States",
    39.72943,
    -104.83192,
    359407,
    "North America",
    ""
  ],
  "INDIANAPOLIS": [
    "United States",
    39.76838,
    -86.15804,
    887642,
    "North America",
    ""
  ],
  "CARACAS": [
    "Venezuela",
    10.48801,
    -66.87919,
    3000000,
    "South America",
    "is located within a large valley, with the lowest point at 2850 feet and the highest point at 4600 feet above sea level"
  ],
  "BUDAPEST": [
    "Hungary",
    47.49835,
    19.04045,
    1741041,
    "Europe",
    ""
  ],
  "IRONVILLE": [
    "United States",
    38.45647,
    -82.69238,
    288649,
    "North America",
    ""
  ],
  "SAN SALVADOR": [
    "El Salvador",
    13.68935,
    -89.18718,
    525990,
    "North America",
    ""
  ],
  "LA PAZ": [
    "Bolivia",
    -16.5,
    -68.15,
    2004652,
    "South America",
    ""
  ],
  "BEIRUT": [
    "Lebanon",
    33.89332,
    35.50157,
    1916100,
    "Asia",
    ""
  ],
  "LYON": [
    "France",
    45.74846,
    4.84671,
    472317,
    "Europe",
    ""
  ],
  "ADDIS ABABA": [
    "Ethiopia",
    9.02497,
    38.74689,
    2757729,
    "Africa",
    ""
  ],
  "LILONGWE": [
    "Malawi",
    -13.96692,
    33.78725,
    646750,
    "Africa",
    ""
  ],
  "MBABANE": [
    "Swaziland",
    -26.31667,
    31.13333,
    76218,
    "Africa",
    ""
  ],
  "PRAIA": [
    "Cape Verde",
    14.93152,
    -23.51254,
    113364,
    "Africa",
    ""
  ],
  "DAQING": [
    "China",
    46.58333,
    125,
    1604027,
    "Asia",
    ""
  ],
  "LAREDO": [
    "United States",
    27.50641,
    -99.50754,
    255473,
    "North America",
    ""
  ],
  "KATHMANDU": [
    "Nepal",
    27.70169,
    85.3206,
    1442271,
    "Asia",
    ""
  ],
  "SANTA ANA": [
    "United States",
    33.74557,
    -117.86783,
    335400,
    "North America",
    ""
  ],
  "BELMOPAN": [
    "Belize",
    17.25,
    -88.76667,
    13381,
    "North America",
    ""
  ],
  "PLANO": [
    "United States",
    33.01984,
    -96.69889,
    283558,
    "North America",
    ""
  ],
  "FRESNO": [
    "United States",
    36.74773,
    -119.77237,
    520052,
    "North America",
    ""
  ],
  "LOMÉ": [
    "Togo",
    6.12874,
    1.22154,
    749700,
    "Africa",
    ""
  ],
  "AMMAN": [
    "Jordan",
    31.95522,
    35.94503,
    1275857,
    "Asia",
    ""
  ],
  "MAIDUGURI": [
    "Nigeria",
    11.84692,
    13.15712,
    1112449,
    "Africa",
    ""
  ],
  "MANCHESTER": [
    "United Kingdom",
    53.48095,
    -2.23743,
    395515,
    "Europe",
    "is home to two of the top soccer clubs in the world - Manchester United and Manchester City. They are bitter rivals"
  ],
  "MESA": [
    "United States",
    33.42227,
    -111.82264,
    471825,
    "North America",
    ""
  ],
  "VALENCIA": [
    "Venezuela",
    10.16202,
    -68.00765,
    1619470,
    "South America",
    "has the most Indian restaurants per capita outside of India, with 0.52 Indian restaurants per 1000 people"
  ],
  "MANAMA": [
    "Bahrain",
    26.22787,
    50.58565,
    147074,
    "Asia",
    ""
  ],
  "RAWALPINDI": [
    "Pakistan",
    33.59733,
    73.0479,
    1743101,
    "Asia",
    ""
  ],
  "JINJIANG": [
    "China",
    24.81978,
    118.57415,
    1416151,
    "Asia",
    ""
  ],
  "DODOMA": [
    "Tanzania, United Republic of",
    -6.17221,
    35.73947,
    180541,
    "Africa",
    ""
  ],
  "VILNIUS": [
    "Lithuania",
    54.68916,
    25.2798,
    542366,
    "Europe",
    "is the capital of Lithuania, which was the first Soviet republic to gain independence in 1990"
  ],
  "DAKAR": [
    "Senegal",
    14.6937,
    -17.44406,
    2476400,
    "Africa",
    ""
  ],
  "CANBERRA": [
    "Australia",
    -35.28346,
    149.12807,
    367752,
    "Oceania",
    "is located evenly between Melbourne and Sydney as a compromise between those two cities on the country's capital"
  ],
  "HAMBURG": [
    "Germany",
    53.55073,
    9.99302,
    1739117,
    "Europe",
    ""
  ],
  "JUBA": [
    "South Sudan, The Republic of",
    4.85165,
    31.58247,
    450000,
    "Africa",
    ""
  ],
  "LEEDS": [
    "United Kingdom",
    53.79648,
    -1.54785,
    455123,
    "Europe",
    ""
  ],
  "BISHKEK": [
    "Kyrgyzstan",
    42.87,
    74.59,
    900000,
    "Asia",
    ""
  ],
  "DUBAI": [
    "United Arab Emirates",
    25.07725,
    55.30927,
    2956587,
    "Asia",
    ""
  ],
  "CALI": [
    "Colombia",
    3.43722,
    -76.5225,
    2392877,
    "South America",
    ""
  ],
  "MEADS": [
    "United States",
    38.41258,
    -82.70905,
    288649,
    "North America",
    ""
  ],
  "NAIROBI": [
    "Kenya",
    -1.28333,
    36.81667,
    2750547,
    "Africa",
    ""
  ],
  "ATLANTA": [
    "United States",
    33.749,
    -84.38798,
    463878,
    "North America",
    ""
  ],
  "MANILA": [
    "Philippines",
    14.6042,
    120.9822,
    1600000,
    "Asia",
    "has the most densely populated 'city proper' in the world"
  ],
  "RAHIM YAR KHAN": [
    "Pakistan",
    28.41987,
    70.30345,
    788915,
    "Asia",
    ""
  ],
  "HANGZHOU": [
    "China",
    30.29365,
    120.16142,
    9236032,
    "Asia",
    ""
  ],
  "KABUL": [
    "Afghanistan",
    34.52813,
    69.17233,
    3043532,
    "Asia",
    ""
  ],
  "NEW ORLEANS": [
    "United States",
    29.95465,
    -90.07507,
    389617,
    "North America",
    ""
  ],
  "LIVERPOOL": [
    "United Kingdom",
    53.41058,
    -2.97794,
    864122,
    "Europe",
    "is the birthplace of both the Beatles and Liverpool FC, which has won more European Cups than any other English club"
  ],
  "SINGAPORE": [
    "Singapore",
    1.28967,
    103.85007,
    3547809,
    "Asia",
    ""
  ],
  "NEWARK": [
    "United States",
    40.73566,
    -74.17237,
    281944,
    "North America",
    ""
  ],
  "EDINBURGH": [
    "United Kingdom",
    55.95206,
    -3.19648,
    464990,
    "Europe",
    ""
  ],
  "SAN MARINO": [
    "United States",
    34.1214,
    -118.10646,
    13464,
    "North America",
    ""
  ],
  "KINGSTOWN": [
    "Saint Vincent and the Grenadines",
    13.15527,
    -61.22742,
    24518,
    "South America",
    ""
  ],
  "DALIAN": [
    "China",
    38.91222,
    121.60222,
    4913879,
    "Asia",
    ""
  ],
  "KOTA BHARU": [
    "Malaysia",
    6.12361,
    102.24333,
    1459994,
    "Asia",
    ""
  ],
  "MADRID": [
    "Spain",
    40.4165,
    -3.70256,
    3255944,
    "Europe",
    ""
  ],
  "TEHRAN": [
    "Iran",
    35.69439,
    51.42151,
    7153309,
    "Asia",
    "is the 32nd capital of Persia, having first been picked as the capital of Iran in 1786"
  ],
  "SUQIAN": [
    "China",
    33.94917,
    118.29583,
    1437685,
    "Asia",
    ""
  ],
  "CAMPINAS": [
    "Brazil",
    -22.90556,
    -47.06083,
    1031554,
    "South America",
    ""
  ],
  "BANDAR SERI BEGAWAN": [
    "Brunei Darussalam",
    4.89035,
    114.94006,
    64409,
    "Asia",
    ""
  ],
  "HEZE": [
    "China",
    35.23929,
    115.47358,
    1346717,
    "Asia",
    ""
  ],
  "JACKSONVILLE": [
    "United States",
    30.33218,
    -81.65565,
    949611,
    "North America",
    ""
  ],
  "LUSAKA": [
    "Zambia",
    -15.40669,
    28.28713,
    1267440,
    "Africa",
    ""
  ],
  "TASHKENT": [
    "Uzbekistan",
    41.26465,
    69.21627,
    1978028,
    "Asia",
    ""
  ],
  "NAGPUR": [
    "India",
    21.14631,
    79.08491,
    2228018,
    "Asia",
    ""
  ],
  "LISBON": [
    "Portugal",
    38.71667,
    -9.13333,
    517802,
    "Europe",
    ""
  ],
  "NICOSIA": [
    "Cyprus",
    35.17531,
    33.3642,
    200452,
    "Asia",
    ""
  ],
  "TIANJIN": [
    "China",
    39.14222,
    117.17667,
    11090314,
    "Asia",
    ""
  ],
  "BUJUMBURA": [
    "Burundi",
    -3.38193,
    29.36142,
    331700,
    "Africa",
    ""
  ],
  "DUQUE DE CAXIAS": [
    "Brazil",
    -22.78556,
    -43.31167,
    818329,
    "South America",
    ""
  ],
  "MONTRÉAL": [
    "Canada",
    45.50884,
    -73.58781,
    1600000,
    "North America",
    "is named after Mount Royal, a large intrusive rock hill inside the city"
  ],
  "MAPUTO": [
    "Mozambique",
    -25.96553,
    32.58322,
    1191613,
    "Africa",
    ""
  ],
  "MINNEAPOLIS": [
    "United States",
    44.97997,
    -93.26384,
    410939,
    "North America",
    ""
  ],
  "KINSHASA": [
    "Democratic Republic of the Congo",
    -4.32758,
    15.31357,
    7785965,
    "Africa",
    "is the largest officially Francophone city in the world"
  ],
  "EDMONTON": [
    "Canada",
    53.55014,
    -113.46871,
    712391,
    "North America",
    "is the northernmost city in North America that has a population of over one million"
  ],
  "WELLINGTON": [
    "New Zealand",
    -41.28664,
    174.77557,
    381900,
    "Oceania",
    ""
  ],
  "PORTO-NOVO": [
    "Benin",
    6.49646,
    2.60359,
    234168,
    "Africa",
    "is a name of Portuguese origin, though the national language of Benin is French"
  ],
  "BOSTON": [
    "United States",
    42.35843,
    -71.05977,
    675647,
    "North America",
    ""
  ],
  "HOUSTON": [
    "United States",
    29.76328,
    -95.36327,
    2296224,
    "North America",
    ""
  ],
  "CHULA VISTA": [
    "United States",
    32.64005,
    -117.0842,
    265757,
    "North America",
    ""
  ],
  "MALINGAO": [
    "Philippines",
    7.16083,
    124.475,
    1121974,
    "Asia",
    ""
  ],
  "MUNICH": [
    "Germany",
    48.13743,
    11.57549,
    1260391,
    "Europe",
    ""
  ],
  "WUHAN": [
    "China",
    30.58333,
    114.26667,
    10392693,
    "Asia",
    ""
  ],
  "ACCRA": [
    "Ghana",
    5.55602,
    -0.1969,
    1963264,
    "Africa",
    ""
  ],
  "KYIV": [
    "Ukraine",
    50.45466,
    30.5238,
    2797553,
    "Europe",
    ""
  ],
  "EL PASO": [
    "United States",
    31.75872,
    -106.48693,
    681124,
    "North America",
    ""
  ],
  "KANSAS CITY": [
    "United States",
    39.09973,
    -94.57857,
    475378,
    "North America",
    ""
  ],
  "HARBIN": [
    "China",
    45.75,
    126.65,
    5242897,
    "Asia",
    ""
  ],
  "CALGARY": [
    "Canada",
    51.05011,
    -114.08529,
    1019942,
    "North America",
    "hosted the 1988 Winter Olympics, where the host country Canada won 5 medals"
  ],
  "MIAMI": [
    "United States",
    25.77427,
    -80.19366,
    441003,
    "North America",
    ""
  ],
  "YANGON": [
    "Myanmar",
    16.80528,
    96.15611,
    4477638,
    "Asia",
    "contains the Shwedagon Pagoda, located on a hill and towering over the city at 560 feet above sea level. No structure in the city is allowed to be taller"
  ],
  "NIAMEY": [
    "Niger",
    13.51366,
    2.1098,
    774235,
    "Africa",
    ""
  ],
  "FUZHOU": [
    "China",
    26.06139,
    119.30611,
    3740000,
    "Asia",
    ""
  ],
  "DRESDEN": [
    "Germany",
    51.05089,
    13.73832,
    486854,
    "Europe",
    ""
  ],
  "HONIARA": [
    "Solomon Islands",
    -9.43333,
    159.95,
    56298,
    "Oceania",
    ""
  ],
  "OSAKA": [
    "Japan",
    34.69374,
    135.50218,
    2592413,
    "Asia",
    "was once the capital of Japan in the 7th and 8th centuries"
  ],
  "BOGOTÁ": [
    "Colombia",
    4.60971,
    -74.08175,
    7674366,
    "South America",
    ""
  ],
  "JINING": [
    "China",
    35.405,
    116.58139,
    1241012,
    "Asia",
    ""
  ],
  "NASHVILLE": [
    "United States",
    36.16589,
    -86.78444,
    689447,
    "North America",
    ""
  ],
  "PANAMA CITY": [
    "Panama",
    8.9936,
    -79.51973,
    408168,
    "North America",
    ""
  ],
  "ORANJESTAD": [
    "Aruba",
    12.52398,
    -70.02703,
    29998,
    "South America",
    ""
  ],
  "SAN ANTONIO": [
    "United States",
    29.42412,
    -98.49363,
    1469845,
    "North America",
    ""
  ],
  "APIA": [
    "Samoa",
    -13.83333,
    -171.76666,
    40407,
    "Oceania",
    ""
  ],
  "KINGSTON": [
    "Jamaica",
    17.99702,
    -76.79358,
    937700,
    "North America",
    ""
  ],
  "BRUSSELS": [
    "Belgium",
    50.85045,
    4.34878,
    1019022,
    "Europe",
    ""
  ],
  "KAMPALA": [
    "Uganda",
    0.31628,
    32.58219,
    1353189,
    "Africa",
    "is named after impalas, which are a kind of antelope. They're very common in the area"
  ],
  "HANOI": [
    "Vietnam",
    21.0245,
    105.84117,
    8053663,
    "Asia",
    "is home to some of the most motorbikes in the world, with an average of 2.5 motorbikes per household"
  ],
  "ODESSA": [
    "Ukraine",
    46.48572,
    30.74383,
    1013159,
    "Europe",
    "is sometimes called the \"Pearl of the Black Sea\" and is a major regional transportation hub"
  ],
  "HOHHOT": [
    "China",
    40.81056,
    111.65222,
    2350000,
    "Asia",
    ""
  ],
  "KAOHSIUNG": [
    "Taiwan, China",
    22.61626,
    120.31333,
    1519711,
    "Asia",
    ""
  ],
  "SANTA CRUZ": [
    "Bolivia",
    -17.78629,
    -63.18117,
    1831434,
    "South America",
    ""
  ],
  "SOLĀPUR": [
    "India",
    17.67152,
    75.91044,
    997281,
    "Asia",
    ""
  ],
  "PAPEETE": [
    "French Polynesia",
    -17.53733,
    -149.5665,
    26357,
    "Oceania",
    ""
  ],
  "CINCINNATI": [
    "United States",
    39.12711,
    -84.51439,
    296943,
    "North America",
    ""
  ],
  "CHISINAU": [
    "Moldova, Republic of",
    47.00556,
    28.8575,
    635994,
    "Europe",
    ""
  ],
  "AUCKLAND": [
    "New Zealand",
    -36.84853,
    174.76349,
    417910,
    "Oceania",
    ""
  ],
  "WICHITA": [
    "United States",
    37.69224,
    -97.33754,
    389965,
    "North America",
    ""
  ],
  "PORT-AU-PRINCE": [
    "Haiti",
    18.54349,
    -72.33881,
    1234742,
    "North America",
    ""
  ],
  "SEATTLE": [
    "United States",
    47.60621,
    -122.33207,
    737015,
    "North America",
    "is the birthplace of Amazon, one of the largest tech companies in the world"
  ],
  "PESHAWAR": [
    "Pakistan",
    34.008,
    71.57849,
    1218773,
    "Asia",
    ""
  ],
  "ANTANANARIVO": [
    "Madagascar",
    -18.91368,
    47.53613,
    1391433,
    "Africa",
    "is often called Tana, and is both the capital and largest city in Madagascar"
  ],
  "QUÉBEC": [
    "Canada",
    46.81228,
    -71.21454,
    528595,
    "North America",
    ""
  ],
  "MACAU": [
    "Macau, China",
    22.20056,
    113.54611,
    649335,
    "Asia",
    ""
  ],
  "BANGKOK": [
    "Thailand",
    13.75398,
    100.50144,
    5104476,
    "Asia",
    "has the longest official city name in the world, coming in at 169 characters"
  ],
  "MUSCAT": [
    "Oman",
    23.58413,
    58.40778,
    797000,
    "Asia",
    "has been the capital of Oman since 1793, when the capital was transferred from Rustaq to Muscat"
  ],
  "CORPUS CHRISTI": [
    "United States",
    27.80058,
    -97.39638,
    324074,
    "North America",
    ""
  ],
  "VOLGOGRAD": [
    "Russian Federation",
    48.71939,
    44.50183,
    1011417,
    "Europe",
    ""
  ],
  "NANCHONG": [
    "China",
    30.79508,
    106.08473,
    1858875,
    "Asia",
    ""
  ],
  "ALGIERS": [
    "Algeria",
    36.73225,
    3.08746,
    1977663,
    "Africa",
    ""
  ],
  "TOLEDO": [
    "United States",
    41.66394,
    -83.55521,
    279789,
    "North America",
    ""
  ],
  "JOHANNESBURG": [
    "South Africa",
    -26.20227,
    28.04363,
    2026469,
    "Africa",
    "was the host of the finals of the 2010 FIFA World Cup"
  ],
  "LUANDA": [
    "Angola",
    -8.83682,
    13.23432,
    2776168,
    "Africa",
    ""
  ],
  "FORT WORTH": [
    "United States",
    32.72541,
    -97.32085,
    918915,
    "North America",
    ""
  ],
  "PRAGUE": [
    "Czech Republic",
    50.08804,
    14.42076,
    1165581,
    "Europe",
    ""
  ],
  "PEKANBARU": [
    "Indonesia",
    0.51667,
    101.44167,
    703956,
    "Asia",
    ""
  ],
  "KUALA LUMPUR": [
    "Malaysia",
    3.1412,
    101.68653,
    1453975,
    "Asia",
    ""
  ],
  "KIGALI": [
    "Rwanda",
    -1.94995,
    30.05885,
    1132686,
    "Africa",
    ""
  ],
  "ROTTERDAM": [
    "Netherlands",
    51.9225,
    4.47917,
    598199,
    "Europe",
    ""
  ],
  "VIENNA": [
    "Austria",
    48.20849,
    16.37208,
    1691468,
    "Europe",
    "has the oldest still-operating ferris wheel. The Riesenrad has been operating since 1897"
  ],
  "NOUMÉA": [
    "New Caledonia",
    -22.27407,
    166.44884,
    93060,
    "Oceania",
    ""
  ],
  "SÃO PAULO": [
    "Brazil",
    -23.5475,
    -46.63611,
    10021295,
    "South America",
    ""
  ],
  "DUBLIN": [
    "Ireland",
    53.33306,
    -6.24889,
    1024027,
    "Europe",
    "is home to the Guinness Brewery, which originally signed a 9,000 year lease in 1759, although the property has since been purchased by the brewery. It's one of the largest breweries in the world"
  ],
  "GABORONE": [
    "Botswana",
    -24.65451,
    25.90859,
    208411,
    "Africa",
    ""
  ],
  "ZAGREB": [
    "Croatia",
    45.81444,
    15.97798,
    698966,
    "Europe",
    ""
  ],
  "MANDALAY": [
    "Myanmar",
    21.97473,
    96.08359,
    1208099,
    "Asia",
    ""
  ],
  "INDORE": [
    "India",
    22.71792,
    75.8333,
    1837041,
    "Asia",
    ""
  ],
  "BASRAH": [
    "Iraq",
    30.50852,
    47.7804,
    2600000,
    "Asia",
    ""
  ],
  "BEIJING": [
    "China",
    39.9075,
    116.39723,
    18960744,
    "Asia",
    "its name literally translates to \"Northern Capital.\" It is the 16th name given to the city"
  ],
  "NANJING": [
    "China",
    32.06167,
    118.77778,
    7400000,
    "Asia",
    ""
  ],
  "BERN": [
    "Switzerland",
    46.94809,
    7.44744,
    121631,
    "Europe",
    ""
  ],
  "OAKLAND": [
    "United States",
    37.80437,
    -122.2708,
    419267,
    "North America",
    "is the birthplace of Hyphy, a hip hop music culture from the late 1990s"
  ],
  "JAKARTA": [
    "Indonesia",
    -6.21462,
    106.84513,
    8540121,
    "Asia",
    ""
  ],
  "LUOYANG": [
    "China",
    34.68361,
    112.45361,
    1390581,
    "Asia",
    ""
  ],
  "TRIPOLI": [
    "Libyan Arab Jamahiriya",
    32.88743,
    13.18733,
    1150989,
    "Africa",
    ""
  ],
  "SÃO TOMÉ": [
    "Sao Tome and Principe",
    0.33654,
    6.72732,
    53300,
    "Africa",
    ""
  ],
  "ALEXANDRIA": [
    "Egypt",
    31.20176,
    29.91582,
    3811516,
    "Africa",
    "was founded by Alexander the Great in 331 BCE, after which it quickly became the capital of Egypt for a century"
  ],
  "MONACO": [
    "Monaco",
    43.73333,
    7.41667,
    32965,
    "Europe",
    ""
  ],
  "LAS VEGAS": [
    "United States",
    36.17497,
    -115.13722,
    623747,
    "North America",
    "doesn't include the Las Vegas Strip, which is technically located just south of the city proper"
  ],
  "ALEPPO": [
    "Syrian Arab Republic",
    36.20124,
    37.16117,
    1602264,
    "Asia",
    ""
  ],
  "HO CHI MINH": [
    "Vietnam",
    10.82302,
    106.62965,
    8993082,
    "Asia",
    ""
  ],
  "MUMBAI": [
    "India",
    19.07283,
    72.88261,
    12691836,
    "Asia",
    "is composed of seven islands"
  ],
  "DONETSK": [
    "Ukraine",
    48.023,
    37.80224,
    1024700,
    "Europe",
    ""
  ],
  "ZAOZHUANG": [
    "China",
    34.86472,
    117.55417,
    899753,
    "Asia",
    ""
  ],
  "IZTAPALAPA": [
    "Mexico",
    19.35529,
    -99.06224,
    1815786,
    "North America",
    ""
  ],
  "ARLINGTON": [
    "United States",
    32.73569,
    -97.10807,
    388125,
    "North America",
    ""
  ],
  "PORT LOUIS": [
    "Mauritius",
    -20.16194,
    57.49889,
    155226,
    "Africa",
    ""
  ],
  "KANO": [
    "Nigeria",
    12.00012,
    8.51672,
    3626068,
    "Africa",
    ""
  ],
  "ADELAIDE": [
    "Australia",
    -34.92866,
    138.59863,
    1225235,
    "Oceania",
    ""
  ],
  "SUBANG JAYA": [
    "Malaysia",
    3.04384,
    101.58062,
    708296,
    "Asia",
    ""
  ],
  "KHARTOUM": [
    "Sudan, The Republic of",
    15.55177,
    32.53241,
    1974647,
    "Africa",
    ""
  ],
  "DALLAS": [
    "United States",
    32.78306,
    -96.80667,
    1300092,
    "North America",
    ""
  ],
  "ZHAOQING": [
    "China",
    23.04893,
    112.46091,
    1553109,
    "Asia",
    ""
  ],
  "BELFAST": [
    "United Kingdom",
    54.59682,
    -5.92541,
    274770,
    "Europe",
    ""
  ],
  "VICTORIA": [
    "Canada",
    48.4359,
    -123.35155,
    289625,
    "North America",
    ""
  ],
  "ASHGABAT": [
    "Turkmenistan",
    37.95,
    58.38333,
    727700,
    "Asia",
    ""
  ],
  "SAN JOSE": [
    "United States",
    37.33939,
    -121.89496,
    1026908,
    "North America",
    ""
  ],
  "YEREVAN": [
    "Armenia",
    40.18111,
    44.51361,
    1093485,
    "Asia",
    "is often called the \"Pink City,\" named after the volcanic rock used to build many buildings within the city"
  ],
  "SACRAMENTO": [
    "United States",
    38.58157,
    -121.4944,
    490712,
    "North America",
    "has more trees per capita than any city in the United States, with 23.6% of the city covered by trees"
  ],
  "PUEBLA": [
    "Mexico",
    19.03793,
    -98.20346,
    1434062,
    "North America",
    ""
  ],
  "MAJURO": [
    "Marshall Islands",
    7.08971,
    171.38027,
    25400,
    "",
    ""
  ],
  "SUVA": [
    "Fiji",
    -18.14161,
    178.44149,
    77366,
    "Oceania",
    ""
  ],
  "CASABLANCA": [
    "Morocco",
    33.58831,
    -7.61138,
    3144909,
    "Africa",
    ""
  ],
  "AMSTERDAM": [
    "Netherlands",
    52.37403,
    4.88969,
    741636,
    "Europe",
    ""
  ],
  "ZHUZHOU": [
    "China",
    27.83333,
    113.15,
    1129687,
    "Asia",
    ""
  ],
  "BRADFORD": [
    "United Kingdom",
    53.79391,
    -1.75206,
    299310,
    "Europe",
    ""
  ],
  "KONYA": [
    "Turkey",
    37.87135,
    32.48464,
    875530,
    "Asia",
    ""
  ],
  "PIMPRI": [
    "India",
    18.62292,
    73.80696,
    1284606,
    "Asia",
    ""
  ],
  "MINSK": [
    "Belarus",
    53.9,
    27.56667,
    1742124,
    "Europe",
    "is home to the some of the biggest lovers of potatoes in the world, with the average resident consuming half a kilogram per day"
  ],
  "BAKU": [
    "Azerbaijan",
    40.37767,
    49.89201,
    1116513,
    "Asia",
    "is the home of the Baku City Circuit, a street circuit that has F1 drivers driving through downtown and the Old City across 20 turns and top speeds of 220 miles per hour"
  ],
  "BARCELONA": [
    "Spain",
    41.38879,
    2.15899,
    1621537,
    "Europe",
    "is home to FC Barcelona, colloquially known as Barça, and often considered the most successful soccer teams in the world, with 75 trophies and hundreds of millions of fans"
  ],
  "CHARLOTTE": [
    "United States",
    35.22709,
    -80.84313,
    874579,
    "North America",
    ""
  ],
  "ANDORRA LA VELLA": [
    "Andorra",
    42.50779,
    1.52109,
    20430,
    "Europe",
    ""
  ],
  "ISLAMABAD": [
    "Pakistan",
    33.72148,
    73.04329,
    601600,
    "Asia",
    ""
  ],
  "ST PAUL": [
    "United States",
    44.94441,
    -93.09327,
    285068,
    "North America",
    ""
  ],
  "CAYENNE": [
    "French Guiana",
    4.93333,
    -52.33333,
    61550,
    "South America",
    ""
  ],
  "SANTO DOMINGO": [
    "Dominican Republic",
    18.47186,
    -69.89232,
    2201941,
    "North America",
    ""
  ],
  "SAN FRANCISCO": [
    "United States",
    37.77493,
    -122.41942,
    864816,
    "North America",
    ""
  ],
  "DELHI": [
    "India",
    28.65195,
    77.23149,
    10927986,
    "Asia",
    ""
  ],
  "TAMPA": [
    "United States",
    27.94752,
    -82.45843,
    369075,
    "North America",
    ""
  ],
  "GEORGETOWN": [
    "Guyana",
    6.80448,
    -58.15527,
    235017,
    "South America",
    ""
  ],
  "BRIDGETOWN": [
    "Barbados",
    13.10732,
    -59.62021,
    98511,
    "South America",
    ""
  ],
  "ULAANBAATAR": [
    "Mongolia",
    47.90771,
    106.88324,
    844818,
    "Asia",
    ""
  ],
  "HONG KONG": [
    "Hong Kong, China",
    22.27832,
    114.17469,
    7482500,
    "Asia",
    ""
  ],
  "ANSHAN": [
    "China",
    41.12361,
    122.99,
    1450000,
    "Asia",
    ""
  ],
  "MONTERREY": [
    "Mexico",
    25.67507,
    -100.31847,
    1135512,
    "North America",
    ""
  ],
  "LONDON": [
    "United Kingdom",
    51.50853,
    -0.12574,
    8961989,
    "Europe",
    "is one of the most diverse cities in the world with residents speaking over 300 languages. It has hosted the Olympics thrice - in 1908, 1948, and 2012"
  ],
  "JAIPUR": [
    "India",
    26.91962,
    75.78781,
    2711758,
    "Asia",
    ""
  ],
  "ATHENS": [
    "Greece",
    37.98376,
    23.72784,
    664046,
    "Europe",
    ""
  ],
  "COCHABAMBA": [
    "Bolivia",
    -17.3895,
    -66.1568,
    841276,
    "South America",
    ""
  ],
  "TARAWA": [
    "Kiribati",
    1.3278,
    172.97696,
    40311,
    "",
    ""
  ],
  "BAODING": [
    "China",
    38.85111,
    115.49028,
    2739887,
    "Asia",
    ""
  ],
  "QINGDAO": [
    "China",
    36.06488,
    120.38042,
    3718835,
    "Asia",
    ""
  ],
  "ST PETERSBURG": [
    "Russian Federation",
    59.93863,
    30.31413,
    5028000,
    "Europe",
    ""
  ],
  "PYONGYANG": [
    "North Korea",
    39.03385,
    125.75432,
    3222000,
    "Asia",
    ""
  ],
  "TEGUCIGALPA": [
    "Honduras",
    14.0818,
    -87.20681,
    850848,
    "North America",
    ""
  ],
  "SOFIA": [
    "Bulgaria",
    42.69751,
    23.32415,
    1152556,
    "Europe",
    ""
  ],
  "CLEVELAND": [
    "United States",
    41.4995,
    -81.69541,
    388072,
    "North America",
    ""
  ],
  "ABUJA": [
    "Nigeria",
    9.05785,
    7.49508,
    590400,
    "Africa",
    ""
  ],
  "KYOTO": [
    "Japan",
    35.02107,
    135.75385,
    1459640,
    "Asia",
    ""
  ],
  "LAHORE": [
    "Pakistan",
    31.558,
    74.35071,
    6310888,
    "Asia",
    "is the capital of the Punjab province and the second largest city in Pakistan"
  ],
  "STOCKTON": [
    "United States",
    37.9577,
    -121.29078,
    305658,
    "North America",
    ""
  ],
  "NASSAU": [
    "Bahamas",
    25.05823,
    -77.34306,
    227940,
    "North America",
    ""
  ],
  "GREENSBORO": [
    "United States",
    36.07264,
    -79.79198,
    285342,
    "North America",
    ""
  ],
  "VATICAN CITY": [
    "Vatican",
    41.90268,
    12.45414,
    829,
    "Europe",
    ""
  ],
  "WINDHOEK": [
    "Namibia",
    -22.55941,
    17.08323,
    268132,
    "Africa",
    ""
  ],
  "LOS ANGELES": [
    "United States",
    34.05223,
    -118.24368,
    3971883,
    "North America",
    ""
  ],
  "SEOUL": [
    "South Korea",
    37.566,
    126.9784,
    10349312,
    "Asia",
    "contains over half the population of South Korea"
  ],
  "TEL AVIV": [
    "Israel",
    32.08088,
    34.78057,
    432892,
    "Asia",
    "is a coastal city, with 13 beaches that span miles of coastline"
  ],
  "OSLO": [
    "Norway",
    59.91273,
    10.74609,
    580000,
    "Europe",
    ""
  ],
  "MONTEVIDEO": [
    "Uruguay",
    -34.90328,
    -56.18816,
    1270737,
    "South America",
    "hosted every match of the first ever FIFA World Cup in 1930"
  ],
  "YOKOHAMA": [
    "Japan",
    35.43333,
    139.65,
    3574443,
    "Asia",
    ""
  ],
  "HENDERSON": [
    "United States",
    36.0397,
    -114.98194,
    285667,
    "North America",
    ""
  ],
  "VENICE": [
    "Italy",
    45.43713,
    12.33265,
    51298,
    "Europe",
    ""
  ],
  "XINXIANG": [
    "China",
    35.19033,
    113.80151,
    1047088,
    "Asia",
    ""
  ],
  "RIVERSIDE": [
    "United States",
    33.95335,
    -117.39616,
    322424,
    "North America",
    ""
  ],
  "MALE": [
    "Maldives",
    4.17521,
    73.50916,
    103693,
    "Asia",
    ""
  ],
  "TALLINN": [
    "Estonia",
    59.43696,
    24.75353,
    394024,
    "Europe",
    "has the highest number of start-ups per person among European countries, which includes the founding of Skype and Wise"
  ],
  "SANAA": [
    "Yemen",
    15.35472,
    44.20667,
    1937451,
    "Asia",
    ""
  ],
  "BERLIN": [
    "Germany",
    52.52437,
    13.41053,
    3426354,
    "Europe",
    ""
  ],
  "MILAN": [
    "Italy",
    45.46427,
    9.18951,
    1236837,
    "Europe",
    ""
  ],
  "RALEIGH": [
    "United States",
    35.7721,
    -78.63861,
    451066,
    "North America",
    ""
  ],
  "HIROSHIMA": [
    "Japan",
    34.4,
    132.45,
    1143841,
    "Asia",
    ""
  ],
  "PHOENIX": [
    "United States",
    33.44838,
    -112.07404,
    1608139,
    "North America",
    "is the home of Cactus League Spring Training, which traditionally starts as early as February"
  ],
  "BANJUL": [
    "Gambia",
    13.45274,
    -16.57803,
    34589,
    "Africa",
    ""
  ],
  "CHONGQING": [
    "China",
    29.56026,
    106.55771,
    7457599,
    "Asia",
    "is over 2300 years old, and is known as the \"mountain city,\" being built on mountains and surrounded by rivers"
  ],
  "CHENGDU": [
    "China",
    30.66667,
    104.06667,
    13568357,
    "Asia",
    "is the capital of the Chinese province of Sichuan, where it is globally recognized as a food capital"
  ],
  "CÓRDOBA": [
    "Argentina",
    -31.4135,
    -64.18105,
    1428214,
    "South America",
    "is one of the oldest cities in Argentina and is located in the center of the country, making it a major tourist hub"
  ],
  "TAIPEI": [
    "Taiwan, China",
    25.04776,
    121.53185,
    7871900,
    "Asia",
    ""
  ],
  "VIRGINIA BEACH": [
    "United States",
    36.85293,
    -75.97799,
    452745,
    "North America",
    ""
  ],
  "OTTAWA": [
    "Canada",
    45.41117,
    -75.69812,
    812129,
    "North America",
    ""
  ],
  "CARDIFF": [
    "United Kingdom",
    51.48,
    -3.18,
    447287,
    "Europe",
    ""
  ],
  "GUATEMALA CITY": [
    "Guatemala",
    14.64072,
    -90.51327,
    994938,
    "North America",
    "is the largest city in Central America"
  ],
  "LINFEN": [
    "China",
    36.08889,
    111.51889,
    959198,
    "Asia",
    ""
  ],
  "CIUDAD GUAYANA": [
    "Venezuela",
    8.35122,
    -62.64102,
    950052,
    "South America",
    ""
  ],
  "LEXINGTON": [
    "United States",
    38.0498,
    -84.45855,
    314488,
    "North America",
    ""
  ],
  "PAGO PAGO": [
    "American Samoa",
    -14.27806,
    -170.7025,
    11500,
    "Oceania",
    ""
  ],
  "FORT WAYNE": [
    "United States",
    41.1306,
    -85.12886,
    260326,
    "North America",
    ""
  ],
  "BENGHAZI": [
    "Libyan Arab Jamahiriya",
    32.11486,
    20.06859,
    650629,
    "Africa",
    ""
  ],
  "SAN DIEGO": [
    "United States",
    32.71571,
    -117.16472,
    1394928,
    "North America",
    "officially celebrates Tony Hawk Day annually on May 29"
  ],
  "KOLKATA": [
    "India",
    22.56263,
    88.36304,
    4631392,
    "Asia",
    ""
  ],
  "OKLAHOMA CITY": [
    "United States",
    35.46756,
    -97.51643,
    681054,
    "North America",
    "is the home of the NBA team called the Oklahoma City Thunder, formerly known as the Seattle SuperSonics"
  ],
  "BANGALORE": [
    "India",
    12.97194,
    77.59369,
    8443675,
    "Asia",
    "is the tech hub of India, with thousands of tech companies. It's known as the Silicon Valley of India"
  ],
  "LU'AN": [
    "China",
    31.73561,
    116.51688,
    1644344,
    "Asia",
    ""
  ],
  "PORTLAND": [
    "United States",
    45.52345,
    -122.67621,
    652503,
    "North America",
    ""
  ],
  "ANAHEIM": [
    "United States",
    33.83529,
    -117.9145,
    350742,
    "North America",
    ""
  ],
  "COTONOU": [
    "Benin",
    6.36536,
    2.41833,
    780000,
    "Africa",
    ""
  ],
  "MECCA": [
    "Saudi Arabia",
    21.42664,
    39.82563,
    1323624,
    "Asia",
    "is home to the world's largest Mosque"
  ],
  "IRVINE": [
    "United States",
    33.66946,
    -117.82311,
    256927,
    "North America",
    ""
  ],
  "SHENZHEN": [
    "China",
    22.54554,
    114.0683,
    17494398,
    "Asia",
    ""
  ],
  "MASERU": [
    "Lesotho",
    -29.31667,
    27.48333,
    118355,
    "Africa",
    ""
  ],
  "MONROVIA": [
    "Liberia",
    6.30054,
    -10.7969,
    939524,
    "Africa",
    ""
  ],
  "OUAGADOUGOU": [
    "Burkina Faso",
    12.36566,
    -1.53388,
    1086505,
    "Africa",
    ""
  ],
  "BUDTA": [
    "Philippines",
    7.20417,
    124.43972,
    1273715,
    "Asia",
    ""
  ],
  "GUANGZHOU": [
    "China",
    23.11667,
    113.25,
    16096724,
    "Asia",
    ""
  ],
  "WASHINGTON": [
    "United States",
    38.89511,
    -77.03637,
    689545,
    "North America",
    ""
  ],
  "WINNIPEG": [
    "Canada",
    49.8844,
    -97.14704,
    632063,
    "North America",
    "is home to the \"The Forks\" which is the largest naturally freezing ice rink in the world, clocking in at 8.54 kilometers"
  ],
  "CASTRIES": [
    "Saint Lucia",
    13.9957,
    -61.00614,
    20000,
    "South America",
    ""
  ],
  "BEKASI": [
    "Indonesia",
    -6.2349,
    106.9896,
    1520119,
    "Asia",
    ""
  ],
  "BIRMINGHAM": [
    "United Kingdom",
    52.48142,
    -1.89983,
    984333,
    "Europe",
    ""
  ],
  "PHNOM PENH": [
    "Cambodia",
    11.56245,
    104.91601,
    1573544,
    "Asia",
    "was historically known as the \"Pearl of Asia,\" and is known for its historical architecture going back to the 1400s"
  ],
  "PORT OF SPAIN": [
    "Trinidad and Tobago",
    10.66668,
    -61.51889,
    49031,
    "South America",
    ""
  ],
  "PORT MORESBY": [
    "Papua New Guinea",
    -9,
    147.15089,
    283733,
    "Oceania",
    ""
  ],
  "THIMPHU": [
    "Bhutan",
    27.46609,
    89.64191,
    98676,
    "Asia",
    ""
  ],
  "TURIN": [
    "Italy",
    45.07049,
    7.68682,
    870456,
    "Europe",
    ""
  ],
  "MOSCOW": [
    "Russian Federation",
    55.75222,
    37.61556,
    10381222,
    "Europe",
    "is the largest city on the European continent following the 2012 territorial expansion into the southwestern part of the Moscow Oblast"
  ],
  "DOUGLAS": [
    "Ireland",
    51.87444,
    -8.435,
    26883,
    "Europe",
    ""
  ],
  "KAMPUNG BARU SUBANG": [
    "Malaysia",
    3.15,
    101.53333,
    833571,
    "Asia",
    ""
  ],
  "CUSCO": [
    "Peru",
    -13.52264,
    -71.96734,
    312140,
    "South America",
    ""
  ],
  "DHAKA": [
    "Bangladesh",
    23.7104,
    90.40744,
    10356500,
    "Asia",
    ""
  ],
  "SAIPAN": [
    "Northern Mariana Islands",
    15.21233,
    145.7545,
    48220,
    "",
    ""
  ],
  "BUSAN": [
    "South Korea",
    35.10168,
    129.03004,
    3678555,
    "Asia",
    ""
  ],
  "SHEFFIELD": [
    "United Kingdom",
    53.38297,
    -1.4659,
    685368,
    "Europe",
    ""
  ],
  "FREETOWN": [
    "Sierra Leone",
    8.48714,
    -13.2356,
    802639,
    "Africa",
    ""
  ],
  "KRAKÓW": [
    "Poland",
    50.06143,
    19.93658,
    755050,
    "Europe",
    ""
  ],
  "COLOMBO": [
    "Sri Lanka",
    6.93548,
    79.84868,
    648034,
    "Asia",
    ""
  ],
  "RIGA": [
    "Latvia",
    56.946,
    24.10589,
    742572,
    "Europe",
    ""
  ],
  "ROSEAU": [
    "Dominica",
    15.30174,
    -61.38808,
    16571,
    "North America",
    ""
  ],
  "BALTIMORE": [
    "United States",
    39.29038,
    -76.61219,
    621849,
    "North America",
    ""
  ],
  "NUUK": [
    "Greenland",
    64.18347,
    -51.72157,
    14798,
    "North America",
    "is the most northerly capital in the world"
  ],
  "SAN JOSÉ": [
    "Costa Rica",
    9.93333,
    -84.08333,
    335007,
    "North America",
    ""
  ],
  "KUMASI": [
    "Ghana",
    6.68848,
    -1.62443,
    1468609,
    "Africa",
    ""
  ],
  "ANCHORAGE": [
    "United States",
    61.21806,
    -149.90028,
    298695,
    "North America",
    ""
  ],
  "PITTSBURGH": [
    "United States",
    40.44062,
    -79.99589,
    304391,
    "North America",
    ""
  ],
  "QUITO": [
    "Ecuador",
    -0.22985,
    -78.52495,
    1399814,
    "South America",
    ""
  ],
  "MEDINA": [
    "Saudi Arabia",
    24.46861,
    39.61417,
    1300000,
    "Asia",
    ""
  ],
  "SHARJAH": [
    "United Arab Emirates",
    25.33737,
    55.41206,
    1324473,
    "Asia",
    ""
  ],
  "DAMASCUS": [
    "Syrian Arab Republic",
    33.5102,
    36.29128,
    1569394,
    "Asia",
    ""
  ],
  "DOUALA": [
    "Cameroon",
    4.04827,
    9.70428,
    1338082,
    "Africa",
    ""
  ],
  "PARAMARIBO": [
    "Suriname",
    5.86638,
    -55.16682,
    223757,
    "South America",
    ""
  ],
  "WARSAW": [
    "Poland",
    52.22977,
    21.01178,
    1702139,
    "Europe",
    ""
  ],
  "WILLEMSTAD": [
    "",
    12.1084,
    -68.93354,
    125000,
    "South America",
    ""
  ],
  "MALABO": [
    "Equatorial Guinea",
    3.75578,
    8.78166,
    155963,
    "Africa",
    ""
  ],
  "QUZHOU": [
    "China",
    28.95944,
    118.86861,
    902767,
    "Asia",
    ""
  ],
  "ADEN": [
    "Yemen",
    12.77944,
    45.03667,
    550602,
    "Asia",
    "has been the temporary capital of Yemen since 2015"
  ],
  "BISSAU": [
    "Guinea-Bissau",
    11.86357,
    -15.59767,
    388028,
    "Africa",
    ""
  ],
  "RĀJSHĀHI": [
    "Bangladesh",
    24.374,
    88.60114,
    700133,
    "Asia",
    ""
  ],
  "STOCKHOLM": [
    "Sweden",
    59.32938,
    18.06871,
    1515017,
    "Europe",
    ""
  ],
  "LUBUMBASHI": [
    "Democratic Republic of the Congo",
    -11.66089,
    27.47938,
    1373770,
    "Africa",
    ""
  ],
  "BRISTOL": [
    "United Kingdom",
    51.45523,
    -2.59665,
    617280,
    "Europe",
    ""
  ],
  "DURBAN": [
    "South Africa",
    -29.8579,
    31.0292,
    3120282,
    "Africa",
    ""
  ],
  "DAR ES SALAAM": [
    "Tanzania, United Republic of",
    -6.82349,
    39.26951,
    2698652,
    "Africa",
    ""
  ],
  "ORLANDO": [
    "United States",
    28.53834,
    -81.37924,
    270934,
    "North America",
    "is the home of Disney World, or at least next door to it"
  ],
  "ISTANBUL": [
    "Turkey",
    41.01384,
    28.94966,
    14804116,
    "Europe",
    "used to be known as Constantinople. It is one of the only cities in the world to exist in two continents"
  ],
  "SAN JUAN": [
    "Argentina",
    -31.5375,
    -68.53639,
    447048,
    "South America",
    ""
  ],
  "HARARE": [
    "Zimbabwe",
    -17.82772,
    31.05337,
    1542813,
    "Africa",
    ""
  ],
  "BARRANQUILLA": [
    "Colombia",
    10.96854,
    -74.78132,
    1380425,
    "South America",
    ""
  ],
  "MALANG": [
    "Indonesia",
    -7.9797,
    112.6304,
    746716,
    "Asia",
    ""
  ],
  "YANGJIANG": [
    "China",
    21.85563,
    111.96272,
    1292987,
    "Asia",
    ""
  ],
  "SUCRE": [
    "Bolivia",
    -19.03332,
    -65.26274,
    224838,
    "South America",
    ""
  ],
  "TUCSON": [
    "United States",
    32.22174,
    -110.92648,
    531641,
    "North America",
    "gets 350 days of sunshine per year with average temperatures over 100 degrees Fahrenheit in the summer months"
  ],
  "AVARUA": [
    "Cook Islands",
    -21.2075,
    -159.77545,
    13373,
    "",
    ""
  ],
  "FLORENCE": [
    "Italy",
    43.77925,
    11.24626,
    349296,
    "Europe",
    "was once the capital of Italy. It only lasted 5 years"
  ],
  "SARAJEVO": [
    "Bosnia and Herzegovina",
    43.84864,
    18.35644,
    696731,
    "Europe",
    ""
  ],
  "ST LOUIS": [
    "United States",
    38.62727,
    -90.19789,
    315685,
    "North America",
    ""
  ],
  "DETROIT": [
    "United States",
    42.33143,
    -83.04575,
    677116,
    "North America",
    "is famous for its music, being the birthplace of Motown, Eminem, and many other artists"
  ],
  "PARIS": [
    "France",
    48.85341,
    2.3488,
    2138551,
    "Europe",
    ""
  ],
  "BRISBANE": [
    "Australia",
    -27.46794,
    153.02809,
    2189878,
    "Oceania",
    ""
  ],
  "SHANTOU": [
    "China",
    23.36814,
    116.71479,
    3838900,
    "Asia",
    ""
  ],
  "TULSA": [
    "United States",
    36.15398,
    -95.99277,
    403505,
    "North America",
    ""
  ],
  "SHANGYU": [
    "China",
    30.01556,
    120.87111,
    770000,
    "Asia",
    ""
  ],
  "NAPLES": [
    "Italy",
    40.85216,
    14.26811,
    959470,
    "Europe",
    ""
  ],
  "ALMATY": [
    "Kazakhstan",
    43.25,
    76.91667,
    2000900,
    "Asia",
    ""
  ],
  "DOHA": [
    "Qatar",
    25.28545,
    51.53096,
    344939,
    "Asia",
    ""
  ],
  "CONAKRY": [
    "Guinea",
    9.53795,
    -13.67729,
    1767200,
    "Africa",
    ""
  ],
  "YAOUNDÉ": [
    "Cameroon",
    3.86667,
    11.51667,
    1299369,
    "Africa",
    ""
  ],
  "YAMOUSSOUKRO": [
    "Côte d'Ivoire",
    6.82055,
    -5.27674,
    194530,
    "Africa",
    ""
  ],
  "MARACAIBO": [
    "Venezuela",
    10.66663,
    -71.61245,
    2225000,
    "South America",
    "is nicknamed \"The Beloved Land of the Sun\""
  ],
  "BELGRADE": [
    "Serbia",
    44.80401,
    20.46513,
    1273651,
    "Europe",
    ""
  ],
  "ALBUQUERQUE": [
    "United States",
    35.08449,
    -106.65114,
    559121,
    "North America",
    "is where Microsoft was founded by Bill Gates and Paul Allen in 1975"
  ],
  "QUEZON CITY": [
    "Philippines",
    14.6488,
    121.0509,
    2761720,
    "Asia",
    ""
  ],
  "BASSETERRE": [
    "Saint Kitts and Nevis",
    17.2955,
    -62.72499,
    12920,
    "North America",
    ""
  ],
  "MARSEILLE": [
    "France",
    43.29695,
    5.38107,
    794811,
    "Europe",
    ""
  ],
  "HYDERABAD": [
    "India",
    17.38405,
    78.45636,
    6809970,
    "Asia",
    ""
  ],
  "MOGADISHU": [
    "Somalia",
    2.03711,
    45.34375,
    2587183,
    "Africa",
    ""
  ],
  "VIENTIANE": [
    "Lao People's Dem. Rep.",
    17.96667,
    102.6,
    196731,
    "Asia",
    ""
  ],
  "ANTALYA": [
    "Turkey",
    36.90812,
    30.69556,
    758188,
    "Asia",
    ""
  ],
  "MEMPHIS": [
    "United States",
    35.14953,
    -90.04898,
    655770,
    "North America",
    ""
  ],
  "SALVADOR": [
    "Brazil",
    -12.97111,
    -38.51083,
    2711840,
    "South America",
    "is one of the oldest colonial cities in the Americas, first established in 1549, becoming the capital of Colonial Brazil"
  ],
  "LUXEMBOURG": [
    "Luxembourg",
    49.61167,
    6.13,
    76684,
    "Europe",
    ""
  ],
  "RABAT": [
    "Morocco",
    34.01325,
    -6.83255,
    1655753,
    "Africa",
    "is nicknamed the Washington of North Africa. It's full of historical museums and palaces"
  ],
  "PALERMO": [
    "Italy",
    38.13205,
    13.33561,
    648260,
    "Europe",
    ""
  ],
  "SURABAYA": [
    "Indonesia",
    -7.24917,
    112.75083,
    2374658,
    "Asia",
    ""
  ],
  "LIBREVILLE": [
    "Gabon",
    0.39241,
    9.45356,
    578156,
    "Africa",
    ""
  ],
  "TBILISI": [
    "Georgia",
    41.69411,
    44.83368,
    1049498,
    "Asia",
    "legend has it was founded by King Vakhtang I in the late 400s after his falcon chased a pheasant into a hot spring. When hot steam came out, he named the city Tbilisi, \"the site of warm springs.\" But this might just be a legend"
  ],
  "PODGORICA": [
    "Montenegro",
    42.44111,
    19.26361,
    236852,
    "Europe",
    ""
  ],
  "NEW DELHI": [
    "India",
    28.63576,
    77.22445,
    317797,
    "Asia",
    ""
  ],
  "LINCOLN": [
    "United States",
    40.8,
    -96.66696,
    277348,
    "North America",
    "was originally named Lincoln by a State Senator from the other major city in Nebraska - Omaha. It was an attempt to derail Lincoln from becoming the capital of Nebrasks, but it backfired"
  ],
  "ZHUMADIAN": [
    "China",
    32.97944,
    114.02944,
    721670,
    "Asia",
    ""
  ],
  "KHARKIV": [
    "Ukraine",
    49.98081,
    36.25272,
    1430885,
    "Europe",
    ""
  ],
  "BUFFALO": [
    "United States",
    42.88645,
    -78.87837,
    258071,
    "North America",
    ""
  ],
  "TUNIS": [
    "Tunisia",
    36.81897,
    10.16579,
    693210,
    "Africa",
    "is the home of Carthage, which is a capital city of the ancient Carthaginian civilization"
  ],
  "PRETORIA": [
    "South Africa",
    -25.74486,
    28.18783,
    1619438,
    "Africa",
    ""
  ],
  "BAGHDAD": [
    "Iraq",
    33.34058,
    44.40088,
    7216000,
    "Asia",
    ""
  ],
  "CHARLOTTE AMALIE": [
    "Virgin Islands (US)",
    18.3419,
    -64.9307,
    20000,
    "North America",
    ""
  ],
  "LUCKNOW": [
    "India",
    26.83928,
    80.92313,
    2472011,
    "Asia",
    ""
  ],
  "BLOEMFONTEIN": [
    "South Africa",
    -29.12107,
    26.214,
    463064,
    "Africa",
    ""
  ],
  "CARTAGENA": [
    "Colombia",
    10.39972,
    -75.51444,
    952024,
    "South America",
    ""
  ],
  "HAIPHONG": [
    "Vietnam",
    20.86481,
    106.68345,
    841520,
    "Asia",
    ""
  ],
  "ROME": [
    "Italy",
    41.89193,
    12.51133,
    2318895,
    "Europe",
    "wasn't built in a day. In fact, St. Peter's Basilica was built in over 150 years"
  ],
  "VANCOUVER": [
    "Canada",
    49.24966,
    -123.11934,
    600000,
    "North America",
    ""
  ],
  "JEDDAH": [
    "Saudi Arabia",
    21.49012,
    39.18624,
    2867446,
    "Asia",
    ""
  ],
  "REYKJAVÍK": [
    "Iceland",
    64.13548,
    -21.89541,
    118918,
    "Europe",
    ""
  ],
  "DATONG": [
    "China",
    40.09361,
    113.29139,
    1850000,
    "Asia",
    ""
  ],
  "ASMARA": [
    "Eritrea",
    15.33805,
    38.93184,
    563930,
    "Africa",
    ""
  ],
  "ANSAN-SI": [
    "South Korea",
    37.32361,
    126.82194,
    716785,
    "Asia",
    ""
  ],
  "LJUBLJANA": [
    "Slovenia",
    46.05108,
    14.50513,
    272220,
    "Europe",
    ""
  ],
  "PHILADELPHIA": [
    "United States",
    39.95233,
    -75.16379,
    1603797,
    "North America",
    ""
  ],
  "SOUTH TANGERANG": [
    "Indonesia",
    -6.28862,
    106.71789,
    1303569,
    "Asia",
    ""
  ],
  "JERSEY CITY": [
    "United States",
    40.72816,
    -74.07764,
    264290,
    "North America",
    ""
  ],
  "GIBRALTAR": [
    "Gibraltar",
    36.14474,
    -5.35257,
    26544,
    "Europe",
    ""
  ],
  "PLYMOUTH": [
    "United Kingdom",
    50.37153,
    -4.14305,
    260203,
    "Europe",
    ""
  ],
  "TOKYO": [
    "Japan",
    35.6895,
    139.69171,
    8336599,
    "Asia",
    "has hosted the Olympics twice, first in 1964, and the second time in 2021. The second time was delayed a year due to the COVID-19 pandemic, so despite happening in 2021, it was still considered the 2020 Summer Olympics"
  ],
  "NUR-SULTAN": [
    "Kazakhstan",
    51.1801,
    71.44598,
    345604,
    "Asia",
    ""
  ],
  "GIZA": [
    "Egypt",
    30.00944,
    31.20861,
    2443203,
    "Africa",
    ""
  ],
  "SHIZUOKA": [
    "Japan",
    34.98333,
    138.38333,
    701561,
    "Asia",
    ""
  ],
  "BRATISLAVA": [
    "Slovakia",
    48.14816,
    17.10674,
    423737,
    "Europe",
    ""
  ],
  "TORONTO": [
    "Canada",
    43.70011,
    -79.4163,
    2600000,
    "North America",
    ""
  ],
  "ROHINI": [
    "India",
    28.74322,
    77.06778,
    860000,
    "Asia",
    ""
  ],
  "AHMEDABAD": [
    "India",
    23.02579,
    72.58727,
    6357693,
    "Asia",
    ""
  ],
  "ST HELIER": [
    "United Kingdom",
    51.38223,
    -0.18341,
    11949,
    "Europe",
    ""
  ],
  "OMDURMAN": [
    "Sudan, The Republic of",
    15.64453,
    32.47773,
    1200000,
    "Africa",
    ""
  ],
  "JAMESTOWN": [
    "United States",
    42.097,
    -79.23533,
    30075,
    "North America",
    ""
  ],
  "GUARULHOS": [
    "Brazil",
    -23.46278,
    -46.53333,
    1169577,
    "South America",
    ""
  ],
  "DUSHANBE": [
    "Tajikistan",
    38.53575,
    68.77905,
    679400,
    "Asia",
    ""
  ],
  "CAIRO": [
    "Egypt",
    30.06263,
    31.24967,
    7734614,
    "Africa",
    "is the only city which still has a remaining wonder of the world. The Pyramids, which were constructed as a tomb for King Khufu, are over 146.7 meters high"
  ],
  "YANCHENG": [
    "China",
    33.3575,
    120.1573,
    1615717,
    "Asia",
    ""
  ],
  "BRASÍLIA": [
    "Brazil",
    -15.77972,
    -47.92972,
    2207718,
    "South America",
    ""
  ],
  "MEXICO CITY": [
    "Mexico",
    19.42847,
    -99.12766,
    12294193,
    "North America",
    ""
  ],
  "SHANGHAI": [
    "China",
    31.22222,
    121.45806,
    22315474,
    "Asia",
    ""
  ],
  "RIO DE JANEIRO": [
    "Brazil",
    -22.90642,
    -43.18223,
    6023699,
    "South America",
    ""
  ],
  "AUSTIN": [
    "United States",
    30.26715,
    -97.74306,
    931830,
    "North America",
    ""
  ],
  "GLASGOW": [
    "United Kingdom",
    55.86515,
    -4.25763,
    591620,
    "Europe",
    "is known as \"Glaschu\" in Gaelic, meaning \"green hollow\""
  ],
  "BRAZZAVILLE": [
    "Congo",
    -4.26613,
    15.28318,
    1284609,
    "Africa",
    ""
  ],
  "BAKERSFIELD": [
    "United States",
    35.37329,
    -119.01871,
    373640,
    "North America",
    ""
  ],
  "MASHHAD": [
    "Iran",
    36.29807,
    59.60567,
    2307177,
    "Asia",
    ""
  ],
  "DJIBOUTI": [
    "Djibouti",
    11.58901,
    43.14503,
    623891,
    "Africa",
    "contains the lowest point of Africa, Lake Assal, which is 155 meters below sea level"
  ],
  "JERUSALEM": [
    "Israel",
    31.76904,
    35.21633,
    801000,
    "Asia",
    "is one of the oldest cities in the world, and considered holy for three major Abrahamic religions"
  ],
  "BANGUI": [
    "Central African Republic",
    4.36122,
    18.55496,
    542393,
    "Africa",
    "has a large basketball stadium, which is the most popular sport in the city"
  ],
  "ASUNCIÓN": [
    "Paraguay",
    -25.28646,
    -57.647,
    1482200,
    "South America",
    ""
  ],
  "KUNMING": [
    "China",
    25.03889,
    102.71833,
    3855346,
    "Asia",
    ""
  ],
  "KUWAIT CITY": [
    "Kuwait",
    29.36972,
    47.97833,
    60064,
    "Asia",
    ""
  ],
  "COPENHAGEN": [
    "Denmark",
    55.67594,
    12.56553,
    1153615,
    "Europe",
    "is home to the world's largest amusement park, Dyrehavsbakken, (or \"Bakken\") which originally opened in 1583"
  ],
  "MANAGUA": [
    "Nicaragua",
    12.13282,
    -86.2504,
    973087,
    "North America",
    ""
  ],
  "STANLEY": [
    "United Kingdom",
    54.86796,
    -1.69846,
    21938,
    "Europe",
    ""
  ],
  "DENVER": [
    "United States",
    39.73915,
    -104.9847,
    715522,
    "North America",
    "really is located a mile above sea level"
  ]
};

export const getCities = (): City[] => {
  return Object.keys(cities).map((city) => {
    return {
      name: city,
      country: cities[city][0],
      location: {
        lat: cities[city][1],
        lng: cities[city][2]
      },
      population: cities[city][3],
      continent: cities[city][4],
      fact: cities[city][5]
    };
  });
}
