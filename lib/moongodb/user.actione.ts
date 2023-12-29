"use server"
import { Event, Order, User } from "./model"
import { Connecte } from "."
import { CreateUserParams,UpdateUserParams } from "./utls"
import { revalidatePath } from 'next/cache'

export const createUser = async (user :    CreateUserParams) =>{
    try{
await  Connecte()
const newuser = await User.create(user)
return JSON.parse(JSON.stringify(newuser))

    }
    catch(err :any) {
        console.log(err)
    }

}
export const UpdateUser = async (clerkId :string,user :    UpdateUserParams)=>{
    try{
        await  Connecte()
        const updatedUser = await User.findOneAndUpdate({clerkId} , user , {new :true})
        return JSON.parse(JSON.stringify(updatedUser))

    }
    catch(err :any) {
        console.log(err)
    }
}
export const DeleteUser = async (clerkId : string)=>{
    try{
        await  Connecte()
        const userToDlt = await User.findOne({clerkId})
 if(!userToDlt){
    throw Error("No user")
 }
  await Promise.all([
    Event.updateMany(
        {_id:{$in :userToDlt.events}} ,
        {$pull :{organizer : userToDlt._id}} 
    ) ,
    Order.updateMany(    {_id:{$in :userToDlt.orders}} ,
        {$unset:{buyer :   1}} )

  ])
  const deletedUser = await User.findByIdAndDelete(userToDlt._id)
  revalidatePath('/')
  return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
 
    }
    catch(err :any) {
        console.log(err)
    }
}