type Breakpoint = {
  minWidth: `${number}px`
  maxWidth?: `${number}px`
}

const xs: Breakpoint = {
  minWidth: '320px',
  maxWidth: '549px',
}

const sm: Breakpoint = {
  minWidth: '550px',
  maxWidth: '869px',
}

const md: Breakpoint = {
  minWidth: '870px',
  maxWidth: '1280px',
}

const lg: Breakpoint = {
  minWidth: '1281px',
  maxWidth: '1440px',
}

const xl: Breakpoint = {
  minWidth: '1441px',
}

const mediaQueries = {
  xs: `@media (max-width: ${xs.maxWidth})`,
  sm: `@media (max-width: ${sm.maxWidth})`,
  md: `@media (max-width: ${md.maxWidth})`,
  lg: `@media (max-width: ${lg.maxWidth})`,
  xl: `@media (min-width: ${xl.minWidth})`,
}

const breakpointsMap = { xs, sm, md, lg, xl }
const breakpoints = [sm.maxWidth, md.maxWidth, lg.maxWidth, xl.maxWidth]

export default {
  breakpoints,
  breakpointsMap,
  mediaQueries,
}
