import mongoose from "mongoose"

  const Connection = async() => {
  
    try {
       await mongoose.connect(`mongodb://localhost/blog_db`,{ useNewUrlParser: true});
       console.log("Connected to Database");
    } catch (error) {
        console.log(`Error Connecting to database ${error}`);
        
    }
}   

export default Connection;