/**
 * Created by jverhelst on 9/19/17.
 */
import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
  // email: 'testing@gmail.com',
  // password: '123456'
// })
