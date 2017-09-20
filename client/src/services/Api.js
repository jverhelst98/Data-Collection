/**
 * Created by jverhelst on 9/19/17.
 */
import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081/'
  })
}

