import * as timeFormat from './timeFormat'
import * as loaders from './loaders'
import * as clone from './clone'
import * as test from './test'

export default {
  ...test,
  ...clone,
  ...loaders,
  ...timeFormat
}
