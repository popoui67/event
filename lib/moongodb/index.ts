
import mongoose from "mongoose"
const Url = process.env.MONGODB_URL
let cache = (global as any).mongoose || {conn : null , Promise :null}
export const Connecte = async() =>{
    if(cache.conn) return cache.conn
    if(!Url) return new Error("MISSING URL§§")
   cache.promise = cache.promise || mongoose.connect(Url ,{
dbName:"Cluster0",
bufferCommands: false
})
cache.conn = await cache.promise
return cache.conn
}