/** @type {import('tailwindcss').Config} */
const base = 16;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxs:"380px",
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
      "2xl": "1440px",
      "3xl": "1500px",
    },
    spacing: {
      auto: "auto",
      0: "0",
      "0-1": 1 / base + "rem", // 1
      "0-2": 2 / base + "rem", // 2
      "0-3": 3 / base + "rem", // 3
      "0-4": 4 / base + "rem", // 4
      "0-5": 5 / base + "rem", // 5
      "0-6": 6 / base + "rem", // 6
      "0-7": 7 / base + "rem", // 7
      "0-8": 8 / base + "rem", // 8
      "0-9": 9 / base + "rem", // 9
      1: 10 / base + "rem", // 10
      "1-1": 11 / base + "rem", // 11
      "1-2": 12 / base + "rem", // 12
      "1-3": 13 / base + "rem", // 13
      "1-4": 14 / base + "rem", // 14
      "1-5": 15 / base + "rem", // 15
      "1-6": 16 / base + "rem", // 16
      "1-7": 17 / base + "rem", // 17
      "1-8": 18 / base + "rem", // 18
      "1-9": 19 / base + "rem", // 19
      2: 20 / base + "rem", // 20
      "2-1": 21 / base + "rem", // 21
      "2-2": 22 / base + "rem", // 22
      "2-3": 23 / base + "rem", // 23
      "2-4": 24 / base + "rem", // 24
      "2-5": 25 / base + "rem", // 25
      "2-6": 26 / base + "rem", // 26
      "2-7": 27 / base + "rem", // 27
      "2-8": 28 / base + "rem", // 28
      "2-9": 29 / base + "rem", // 29
      3: 30 / base + "rem", // 30
      "3-1": 31 / base + "rem", // 31
      "3-2": 32 / base + "rem", // 32
      "3-3": 33 / base + "rem", // 33
      "3-4": 34 / base + "rem", // 34
      "3-5": 35 / base + "rem", // 35
      "3-6": 36 / base + "rem", // 36
      "3-7": 37 / base + "rem", // 37
      "3-8": 38 / base + "rem", // 38
      "3-9": 39 / base + "rem", // 39
      4: 40 / base + "rem", // 40
      "4-1": 41 / base + "rem", // 41
      "4-2": 42 / base + "rem", // 42
      "4-3": 43 / base + "rem", // 43
      "4-4": 44 / base + "rem", // 44
      "4-5": 45 / base + "rem", // 45
      "4-6": 46 / base + "rem", // 46
      "4-7": 47 / base + "rem", // 47
      "4-8": 48 / base + "rem", // 48
      "4-9": 49 / base + "rem", // 49
      5: 50 / base + "rem", // 50
      "5-1": 51 / base + "rem", // 51
      "5-2": 52 / base + "rem", // 52
      "5-3": 53 / base + "rem", // 53
      "5-4": 54 / base + "rem", // 54
      "5-5": 55 / base + "rem", // 55
      "5-6": 56 / base + "rem", // 56
      "5-7": 57 / base + "rem", // 57
      "5-8": 58 / base + "rem", // 58
      "5-9": 59 / base + "rem", // 59
      6: 60 / base + "rem", // 60
      "6-1": 61 / base + "rem", // 61
      "6-2": 62 / base + "rem", // 62
      "6-3": 63 / base + "rem", // 63
      "6-4": 64 / base + "rem", // 64
      "6-5": 65 / base + "rem", // 65
      "6-6": 66 / base + "rem", // 66
      "6-7": 67 / base + "rem", // 67
      "6-8": 68 / base + "rem", // 68
      "6-9": 69 / base + "rem", // 69
      7: 70 / base + "rem", // 70
      "7-1": 71 / base + "rem", // 71
      "7-2": 72 / base + "rem", // 72
      "7-3": 73 / base + "rem", // 73
      "7-4": 74 / base + "rem", // 74
      "7-5": 75 / base + "rem", // 75
      "7-6": 76 / base + "rem", // 76
      "7-7": 77 / base + "rem", // 77
      "7-8": 78 / base + "rem", // 78
      "7-9": 79 / base + "rem", // 79
      8: 80 / base + "rem", // 80
      "8-1": 81 / base + "rem", // 81
      "8-2": 82 / base + "rem", // 82
      "8-3": 83 / base + "rem", // 83
      "8-4": 84 / base + "rem", // 84
      "8-5": 85 / base + "rem", // 85
      "8-6": 86 / base + "rem", // 86
      "8-7": 87 / base + "rem", // 87
      "8-8": 88 / base + "rem", // 88
      "8-9": 89 / base + "rem", // 89
      9: 90 / base + "rem", // 90
      "9-1": 91 / base + "rem", // 91
      "9-2": 92 / base + "rem", // 92
      "9-3": 93 / base + "rem", // 93
      "9-4": 94 / base + "rem", // 94
      "9-5": 95 / base + "rem", // 95
      "9-6": 96 / base + "rem", // 96
      "9-7": 97 / base + "rem", // 97
      "9-8": 98 / base + "rem", // 98
      "9-9": 99 / base + "rem", // 99
      10: 100 / base + "rem", // 100
      "10-1": 101 / base + "rem", // 101
      "10-2": 102 / base + "rem", // 102
      "10-3": 103 / base + "rem", // 103
      "10-4": 104 / base + "rem", // 104
      "10-5": 105 / base + "rem", // 105
      "10-6": 106 / base + "rem", // 106
      11: 110 / base + "rem", // 110
      "11-3": 113 / base + "rem", // 113
      "11-4": 114 / base + "rem", // 114
      "11-5": 115 / base + "rem", // 115
      "11-6": 116 / base + "rem", // 116
      "11-8": 118 / base + "rem", // 118
      12: 120 / base + "rem", // 120
      "12-4": 124 / base + "rem", // 124
      "12-6": 126 / base + "rem", // 126
      "12-8": 128 / base + "rem", // 128
      13: 130 / base + "rem", // 130
      "13-4": 134 / base + "rem", // 134
      "13-8": 138 / base + "rem", // 138
      14: 140 / base + "rem", // 140
      "14-5": 145 / base + "rem", // 145
      15: 150 / base + "rem", // 150
      "15-3": 153 / base + "rem", // 153
      "15-7": 157 / base + "rem", // 157
      16: 160 / base + "rem", // 160
      "16-1": 161 / base + "rem", // 161
      "16-4": 164 / base + "rem", // 164
      "16-5": 165 / base + "rem", // 165
      "16-6": 166 / base + "rem", // 166
      "16-7": 167 / base + "rem", // 167
      "16-8": 168 / base + "rem", // 168
      17: 170 / base + "rem", // 170
      "17-5": 175 / base + "rem", // 175
      18: 180 / base + "rem", // 180
      "18-5": 185 / base + "rem", // 185
      "18-7": 187 / base + "rem", // 187
      19: 190 / base + "rem", // 190
      "19-1": 191 / base + "rem", // 191
      "19-6": 196 / base + "rem", // 196
      20: 200 / base + "rem", // 200
      "20-2": 202 / base + "rem", // 202
      "20-5": 205 / base + "rem", // 205
      "20-6": 206 / base + "rem", // 206
      21: 210 / base + "rem", // 210
      "21-7": 217 / base + "rem", // 217
      "21-8": 218 / base + "rem", // 218
      22: 220 / base + "rem", // 220
      "22-1": 221 / base + "rem", // 221
      "22-3": 223 / base + "rem", // 223
      "22-5": 225 / base + "rem", // 225
      23: 230 / base + "rem", // 230
      "23-3": 233 / base + "rem", // 233
      "23-8": 238 / base + "rem", // 238
      24: 240 / base + "rem", // 240
      "24-4": 244 / base + "rem", // 244
      "24-8": 248 / base + "rem", // 248
      25: 250 / base + "rem", // 250
      26: 260 / base + "rem", // 260
      "26-6": 266 / base + "rem", // 266
      27: 270 / base + "rem", // 270
      "27-1": 271 / base + "rem", // 271
      "27-6": 276 / base + "rem", // 276
      28: 280 / base + "rem", // 280
      "28-5": 285 / base + "rem", // 280
      29: 290 / base + "rem", // 290
      "29-2": 292 / base + "rem", // 292
      "29-7": 297 / base + "rem", // 297
      "29-8": 298 / base + "rem", // 298
      30: 300 / base + "rem", // 300
      "31-4": 314 / base + "rem", // 314
      "31-5": 315 / base + "rem", // 315
      "31-6": 316 / base + "rem", // 316
      "31-8": 318 / base + "rem", // 318
      32: 320 / base + "rem", // 320
      "32-3": 323 / base + "rem", // 323
      "32-5": 325 / base + "rem", // 325
      "32-8": 328 / base + "rem", // 328
      33: 330 / base + "rem", // 330
      "33-5": 335 / base + "rem", // 335
      "33-6": 336 / base + "rem", // 336
      "33-8": 338 / base + "rem", // 338
      "33-9": 339 / base + "rem", // 339
      34: 339 / base + "rem", // 340
      "34-3": 343 / base + "rem", // 343
      "34-5": 345 / base + "rem", // 345
      35: 350 / base + "rem", // 350
      36: 360 / base + "rem", // 360
      "36-4": 364 / base + "rem", // 364
      "36-5": 365 / base + "rem", // 365
      37: 370 / base + "rem", // 370
      "38-5": 385 / base + "rem", // 385
      39: 390 / base + "rem", // 390
      "39-3": 393 / base + "rem", // 393
      "39-7": 397 / base + "rem", // 397
      "39-8": 398 / base + "rem", // 398
      40: 400 / base + "rem", // 400
      "40-4": 404 / base + "rem", // 404
      "40-6": 406 / base + "rem", // 406
      "41-0": 410 / base + "rem", // 410
      "41-3": 413 / base + "rem", // 413
      "42-0": 420 / base + "rem", // 420
      "42-1": 421 / base + "rem",
      "42-8": 428 / base + "rem", // 428
      43: 430 / base + "rem", // 430
      "43-6": 436 / base + "rem", // 436
      44: 440 / base + "rem", // 440
      "44-4": 444 / base + "rem", // 444
      "45-0": 450 / base + "rem", // 450
      "45-5": 455 / base + "rem", // 450
      "46-4": 464 / base + "rem", // 464
      "46-8": 468 / base + "rem", // 468
      "47-6": 476 / base + "rem", // 476
      "47-9": 479 / base + "rem", // 479
      48: 480 / base + "rem", // 480
      "48-9": 489 / base + "rem", // 489
      "49-2": 492 / base + "rem", // 492
      "50-0": 500 / base + "rem", // 500
      "50-1": 501 / base + "rem", // 501
      "50-3": 503 / base + "rem", // 503
      "50-13": 513 / base + "rem", // 513
      "51-6": 516 / base + "rem", // 516
      53: 530 / base + "rem", // 530
      "55-50": 550 / base + "rem", // 550
      56: 560 / base + "rem", // 560
      "56-7": 567 / base + "rem", // 567
      58: 580 / base + "rem", // 580
      "59-3": 593 / base + "rem",
      "58-1": 581 / base + "rem", // 581
      "60-7": 607 / base + "rem", // 607
      "60-9": 609 / base + "rem", // 609
      61: 610 / base + "rem", // 610
      62: 620 / base + "rem", // 620
      "65-0": 650 / base + "rem", // 650
      "6-68": 668 / base + "rem",
      "6-63": 663 / base + "rem", // 663
      "6-76": 676 / base + "rem", // 676
      "68-4": 684 / base + "rem", // 684
      "70-5": 705 / base + "rem", // 705
      71: 710 / base + "rem", // 710
      "71-1": 711 / base + "rem", // 711
      72: 720 / base + "rem", // 720
      74: 740 / base + "rem", // 740
      75: 750 / base + "rem", // 750
      "75-2": 752 / base + "rem", // 750
      76: 760 / base + "rem", // 760
      "81-8": 818 / base + "rem", // 818
      82: 820 / base + "rem", // 820
      "83-2": 832 / base + "rem", // 832
      "84-0": 840 / base + "rem", // 840
      "85-0": 850 / base + "rem", // 850
      "85-5": 855 / base + "rem", // 855
      "86-6": 866 / base + "rem", // 866
      "90-0": 900 / base + "rem", // 900
      "92-0": 920 / base + "rem", // 920
      "96-2": 962 / base + "rem", // 962
      "102-2": 1022 / base + "rem", // 1022
      "109-9": 1099 / base + "rem", // 1022
      "111-40": 1140 / base + "rem", //1140
      "113-38": 1338 / base + "rem",
      medium: 1340 / base + "rem", // 1340
      container: 1440 / base + "rem", // 1440
      wide: 2400 / base + "rem", // 2400
      full: "100%",
      "100vw": "100vw",
      "90vw": "90vw",
      "100vh": "100vh",
    },
    extend: {
      colors: {
        grey: {
          5: "#F0F0F0",
          10: "#e3dede",
          100: "#777777",
          200: "#444444",
        },
        maroon: {
          10: "#a52a2a",
          100: "#C31F3B",
          200: "#800000",
        },
        pink: {
          10: "#FC8EAC",
        },
        blue: {
          10: "#110B54",
          20: "#150C78",
          30: "#221D54",
          40: "#2D1FC2",
          50: "#3F35A8"
        },
        indigo: "#6466F1",
        white: "#ffffff",
        black: "#000000",
        avrioRed: "#C42144",
        whiteShade: "#f3f6f4",
        OffWhite: "#F2F2F2",
        cubixDragable: "#fdfdfd",
        website: "#4869e8",
        purple: "#4E0B8C",
        navyBlue: "#150C78",
        blue_dark: "#176AF4",
        blueshade: "#9DD6DF",
        mainText: "#B1AECF",
        tentative_btn: "#56E8C1",
        leadership: "#312C67",
        hr: "#EB7E5D",
        gradient_blue: "#19144E",
        date_color: "#474747",
        hashtag: "#A5A5A5",
        data_orange:"#EB7E5D"

      },
      fontFamily: {
        'worksans': ['Work Sans', 'sans-serif'],
        'robotoCondensed': ['Roboto Condensed', 'sans-serif'],
        'robotoMono': ['Roboto Mono', 'monospace'],
        'inter': ['Inter', 'sans-serif']
      },
      fontSize: {
        'sm-small': '0.5rem',
        'sm-custom': '0.9rem',
        'md-custom': '1.3rem',
        'md-custom-1': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        '14px': '14px',
        '12px': '12px',
        '6px': '6px',
        '16px': '16px',
        '17px': '17px',
        '18px': '18px',
        '19px': '19px',
        '20px': '20px',
        '21px': '21px',
        '22px': '22px',
        '24px': '24px',
        '25px': '25px',
        '26px': '26px',
        '28px': '28px',
        '70px': '70px',
        '60px': '60px',
        '50px': '50px',
        '40px': '40px',
        '36px': '36px',
        '34px': '34px',
        '32px': '32px',
        '30px': '30px',
        '25px': '25px'
      },
      lineHeight: {
        'none': '0px',
        '21px': '21px',
        '80px': '80px',
        '12': '3rem',
      },
      scale: {
        '140': '1.45',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '75%',
        300: '300px', // 300
        320: '320px', // 320
        340: '320px', // 340
        365: '365px', // 365
        450: '450px', // 450
        754: '754px',
        '784px': '784px',
        '421px': '421px',
        '1920px': '1920px',
        '1137px': '1137px',
        '1140px': '1140px',
        '1530px': '1530px',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      zIndex: {
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
      },
      dropShadow: {
        'custom': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'Bg-Image': "linear-gradient(146.19deg, #19144E -16.47%, rgba(25, 20, 78, 0.502) 49.58%, rgba(25, 20, 78, 0) 89.37%)",
        'Linear-gradient-custom': 'linear-gradient(90deg, rgba(34, 29, 84, 0.8) 0%, rgba(34, 29, 84, 0.749) 38.09%, rgba(34, 29, 84, 0) 77.1%)'
      },
      lineHeight: {
        '82px': '82px',
        '42px': '42px',
        '70.38px': '70.38px'
      },
      scale: {
        '175': '1.75',
        '250': '2.5',
        '200': '2.0'
      },
      margin: {
        '5px': '500px'
      },
    },
    plugins: [],
  },
};
