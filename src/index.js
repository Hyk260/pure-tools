import * as timeFormat from './timeFormat'
import * as loaders from './loaders'
import * as clone from './clone'

export default {
  ...clone,
  ...loaders,
  ...timeFormat
}
