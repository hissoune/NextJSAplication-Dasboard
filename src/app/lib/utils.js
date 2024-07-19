import mongoose from "mongoose"

export const connectTOdb = async () => {
    const connection ={}
    try {
        if (connection.isConnected ==200) return;
        const db = await mongoose.connect(
            process.env.MONGO_URL
          
        );
        connection.isConnected = db.connections[0].readyState;
                console.log("UNfucked up");

    } catch (error) {
        // throw new Error(error);
        console.log("fucked up");
    }
}