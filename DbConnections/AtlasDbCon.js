import mongoose from "mongoose"
mongoose.set('strictQuery', false);
const dB = "mongodb+srv://SrinuMeesala:RadheKrishn@cluster0.futh29f.mongodb.net/ansronedb?retryWrites=true&w=majority"
const connectRemoteDBAtlas = async () => {
    try {
        const connRemoteDb = await mongoose.connect(dB, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Remote Db connection Success!")
    } catch (err) {
        console.log("Remote Db connection failed", err)
    }
}
export default connectRemoteDBAtlas