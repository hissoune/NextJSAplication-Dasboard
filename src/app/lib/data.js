import { User ,Product} from './models'
import {connectTOdb} from './utils'
export const fetchusers = async (q,page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PERPAGE = 5;
    try {
        connectTOdb();
       const countt = await User.find({ username: { $regex: regex } }).countDocuments();
        const users = await User.find({username:{$regex:regex}}).limit(ITEM_PERPAGE).skip(ITEM_PERPAGE * (page-1));
    //   console.log({countt,users});
        return {countt,users};

    } catch (error) {
        console.log(error);
        throw new Error("faild to fetsh");
        
    }
}
export const fetchuser = async (id) => {
    
    try {
        connectTOdb();
        const user = await User.findById(id);
    // console.log({user});
        return user;

    } catch (error) {
        console.log(error);
        throw new Error("faild to fetsh");
        
    }
}
export const fetchproducts = async (q,page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PERPAGE = 5;
    try {
        connectTOdb();
       const countt = await Product.find({ title: { $regex: regex } }).countDocuments();
        const products = await Product.find({title:{$regex:regex}}).limit(ITEM_PERPAGE).skip(ITEM_PERPAGE * (page-1));
    //   console.log({countt,users});
        return {countt,products};

    } catch (error) {
        console.log(error);
        throw new Error("faild to fetsh");
        
    }
}
export const fetchproduct = async (id) => {
    
    try {
        connectTOdb();
        const product = await Product.findById(id);
 console.log(product);
        return product;

    } catch (error) {
        console.log(error);
        throw new Error("faild to fetsh");
        
    }
}