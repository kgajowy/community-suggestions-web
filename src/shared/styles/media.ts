import {css} from 'styled-components'

export const MOBILE_BREAKPOINT = 850

export const isMobile = (width: number) => width <= MOBILE_BREAKPOINT
export const isDesktop = (width: number) => width > MOBILE_BREAKPOINT

export const media = {
    mobile: (...args: any) => css`
    @media (max-width: ${MOBILE_BREAKPOINT}px) {
      ${
        // @ts-ignore
        css(...args)
        }
    }
  `,
    desktop: (...args: any) => css`
    @media (min-width: ${MOBILE_BREAKPOINT + 1}px) {
      ${
        // @ts-ignore
        css(...args)
        }
    }
  `,
}