import { Theme } from '../../theme'
import { StyledSystemProps } from '../../utils'

export interface TextProps extends StyledSystemProps {
  color: keyof Theme['colors']
}
