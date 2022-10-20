import { Schema, model, Document, PaginateModel } from 'mongoose'
import { IUser, EStatusUser } from '../../interfaces/user'
import paginate from 'mongoose-paginate-v2'

export interface IUserDoc extends IUser, Document {
  [key: string]: any
}

const UserSchema: Schema = new Schema<IUserDoc>(
  {
    userName: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
      minlength: [8, 'Please use minimum of 8 characters']
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    status: {
      type: Number,
      default: EStatusUser.ACTIVE,
      required: true
    },
    photo: {
      type: String
    }
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
    timestamps: true
  }
)

UserSchema.plugin(paginate)
const User = model<IUserDoc, PaginateModel<IUserDoc>>('User', UserSchema)
export default User
