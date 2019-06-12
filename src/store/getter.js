import users from './module/users'

const getter = {
  getInfo () {
    return users.state.usersInfo
  }
}
export default getter
