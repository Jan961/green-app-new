import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import SiteLogo from '@/components/icons/site-logos/SiteLogo.vue'
import WwoofLogo from '@/components/icons/WwoofLogo.vue'
import WorldpackersLogo from '@/components/icons/WorldpackersLogo.vue'
import HelpxLogo from '@/components/icons/HelpxLogo.vue'


const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#51C25E',
    'light-green': '#ADE157',
    'primary-darken-1': '#3700B3',
    secondary: '#5CBBF6',
    'secondary-darken-1': '#018786',
    error: '#F44336',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',


  },
  variables: {
    // navbar
    'navbar-height-desktop': '72px',
    'navbar-height-mobile': '64px',
    'navbar-button-width': '160px',

    'hover-opacity': '0.2',    
    'activated-opacity': '0.4',

    // colour variant overrides
    'theme-on-primary':  '255, 255, 255',
    'theme-on-background':' 24, 60, 25',
    'theme-on-surface':' 24, 60, 25'
  }
}

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#121212',
    surface: '#121212',
    primary: '#51c25e',
    secondary: '#03DAC6',
    error: '#CF6679',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
  variables: {
    'navbar-height': '64px',
  }
}

const vuetify = createVuetify({
  directives,
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme,
      darkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases: { ...aliases, siteLogo: SiteLogo, wwoofLogo: WwoofLogo, worldpackersLogo: WorldpackersLogo, helpxLogo: HelpxLogo },
    sets: { mdi },
  },
})

export default vuetify


