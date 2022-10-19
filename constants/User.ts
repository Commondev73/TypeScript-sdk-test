import { EStatusUser } from '../interfaces/user'

const RemoveFieldsFromPopulate = {
  password: 0,
  firstName: 0,
  lastName: 0
}

const getStatusDescription = (status: EStatusUser) => {
  switch (status) {
    case EStatusUser.INACTIVE:
      return 'inactive'
    case EStatusUser.ACTIVE:
      return 'active'
    case EStatusUser.BANNED:
      return 'banned'
    default:
      return '-'
  }
}
export { RemoveFieldsFromPopulate, getStatusDescription }
