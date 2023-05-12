import mongoose from "mongoose";

mongoose.connect('mongodb+srv://guihalal:123@aluranode.ha6zcyn.mongodb.net/Alura-node');

let db = mongoose.connection;

export default db;