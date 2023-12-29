import mongoose, { models,Document } from "mongoose";
export interface IEvent extends Document {
    _id: string;
    title: string;
    description?: string;
    location?: string;
    createdAt: Date;
    imageUrl: string;
    price: string;
    isFree: boolean;
    url?: string;
    category: { _id: string, name: string }
    organizer: { _id: string, firstName: string, lastName: string }
}
export interface ICategory extends Document{
    _id :string 
    name :string
} 
/////user
const userScheme = new mongoose.Schema({
    clerkId : {type : String , required : true , unique : true},
    email : {type : String , required : true , unique : true},
    username: {type : String , required : true , unique : true},
    firstName : {type : String , required : true },
    lastName : {type : String , required : true },
     photo:{type : String , required : true }

})
export const User = models.user || mongoose.model("user" , userScheme)
const EventShema = new mongoose.Schema({
    title : {type : String , required : true },
    description : {type : String },
    location: {type : String},
    createdAt : {type : Date, default :Date.now() },
    imageUrl: {type : String  },
     price:{type : String } ,
     isFree:{type : Boolean , default : false },
     url:{type : String },
     category:{type :mongoose.Schema.ObjectId , ref : "Category"},
     organizer:{type :mongoose.Schema.ObjectId , ref : "user"},
})
export const Event = models.Event || mongoose.model("Event" , EventShema)

/// Category
export const CategoryShema = new mongoose.Schema({
    name :{type : String , required :true , unique :true }
})
export const Category =   models.category || mongoose.model("category" , EventShema)

export interface IOrder extends Document {
    createdAt: Date
    stripeId: string
    totalAmount: string
    event: {
      _id: string
      title: string
    }
    buyer: {
      _id: string
      firstName: string
      lastName: string
    }
  }
  
  export type IOrderItem = {
    _id: string
    totalAmount: string
    createdAt: Date
    eventTitle: string
    eventId: string
    buyer: string
  }
  
  const OrderSchema = new mongoose.Schema({
    createdAt: {
      type: Date,
      default: Date.now,
    },
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    totalAmount: {
      type: String,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  })
  
   export const Order = models.Order || mongoose.model('Order', OrderSchema)