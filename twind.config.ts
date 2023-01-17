import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors"
export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      colors,
      keyframes: {
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
        bounceIn: {
          "0%": {opacity: 0, transform: 'scale3d(0.3,0.3,0.3)'},
          "20%": {opacity: 0, transform: 'scale3d(1.1,1.1,1.1)'},
          "40%": {opacity: 0, transform: 'scale3d(0.9,0.9,0.9)'},
          "60%": {opacity: 1, transform: 'scale3d(1.03,1.03,1.03)'},
          "80%": {transform: 'scale3d(0.97,0.97,0.97)'},
          "100%": {opacity: 1, transform: 'scale3d(1,1,1)'}
        },
        wave: {
          '0%': { transform: 'rotate(0.0deg)'},
          '10%': { transform: 'rotate(14deg)'},
          '20%': { transform: 'rotate(-8deg)'},
          '30%': { transform: 'rotate(14deg)'},
          '40%': { transform: 'rotate(-4deg)'},
          '50%': { transform: 'rotate(10.0deg)'},
          '60%': { transform: 'rotate(0.0deg)'},
          '100%': { transform: 'rotate(0.0deg)'},
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear infinite',
        'fadeIn': "fadeIn 1s linear",
        'fadeInLong': "fadeIn 2.5s linear",
        'bounceIn': "bounceIn 1s linear",
      },
    },
  },
} as Options;
