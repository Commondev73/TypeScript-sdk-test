import { AnyArray, AnyKeys, FilterQuery } from 'mongoose'
import { IUser } from '../../interfaces/user'
import User, { IUserDoc } from '../schema/user'
import { mapValues } from 'lodash'

const getList = async (
  query: FilterQuery<IUserDoc> = {},
  page: number = 1,
  limit: number = 10,
  sort = { createdAt: -1 }
) => {
  try {
    const options = {
      page,
      limit,
      sort
    }
    return await User.paginate(query, options)
  } catch (error) {
    console.log(error)
    return {}
  }
}

const create = async (data: IUser) => {
  try {
    const user = new User(data)
    return await user.save()
  } catch (error) {
    console.log(error)
    return null
  }
}

const update = async (id: string, data: IUser) => {
  try {
    const query = { _id: id }
    const comment = await User.findOne(query)
    if (comment && comment._id) {
      mapValues(data, (value, key) => {
        comment[key] = value
      })
      return await comment.save()
    }
    return null
  } catch (error) {
    console.log(error)
    return null
  }
}

const remove = async (id: string) => {
  try {
    const query = { _id: id }
    return await User.deleteOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const aggregate = async (stage: any) => {
  try {
    return await User.aggregate(stage)
  } catch (error) {
    console.log(error)
    return []
  }
}

const find = async (query: FilterQuery<IUser>) => {
  try {
    return await User.find(query)
  } catch (error) {
    console.log(error)
    return []
  }
}

const findOne = async (query: FilterQuery<IUser>) => {
  try {
    return await User.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}

const findById = async (id: string) => {
  try {
    const query = { _id: id }
    return await User.findOne(query)
  } catch (error) {
    console.log(error)
    return null
  }
}
export { getList, create, update, remove, aggregate, find, findOne, findById }
