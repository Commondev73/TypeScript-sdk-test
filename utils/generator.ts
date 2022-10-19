import moment from 'moment'
import randomstring from 'randomstring'

const genTransactionId = (): string => {
  const randomNumber: string = randomstring.generate({
    length: 5,
    charset: 'numeric'
  })
  return `${moment().format('YYYYMMDDHHmmss')}${randomNumber}`
}

const genPassword = (): string => {
  const randomPassword: string = randomstring.generate({ length: 8 })
  return randomPassword
}

export { genTransactionId, genPassword }
