import moment from 'moment'
import lodash from 'lodash'
import 'moment-timezone'
export default (instance, inject) => {
  inject('moment', moment)
  inject('_', lodash)
}
