    "use server"

import { connectTOdb } from './utils'
import { Product, User } from './models'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt'
import { signIn } from "../auth";
export const adduser = async (formData) => {
    const { username, email, password, phone,  isadmin, isactive } =
        Object.fromEntries(formData);
    try {
        connectTOdb();
        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);
        const newuser = new User({
            username, email, password:hashedpassword, phone, isadmin, isactive
        });
        await newuser.save()
    } catch (error) {
         console.log(error);
        throw new Error("faild to create");
    }
    revalidatePath("/Dashboard/Users");
    redirect("/Dashboard/Users");
}
export const updateuser = async (formData) => {
    const {id, username, email, password, phone,  isadmin, isactive } =
        Object.fromEntries(formData);
    try {
        connectTOdb();
        const updatefields = {
             username, email, password, phone,  isadmin, isactive
        }
        Object.keys(updatefields).forEach(
            
           ( key )=>( updatefields[key] === "" || undefined) && delete updatefields[key]
        );
        await User.findByIdAndUpdate(id,updatefields);
    } catch (error) {
         console.log(error);
        throw new Error("faild to update");
    }
    revalidatePath("/Dashboard/Users");
    redirect("/Dashboard/Users");
}
export const deleteuser = async (formData) => {
    const { id } =
        Object.fromEntries(formData);
    try {
        connectTOdb();
      
       
        await User.findByIdAndDelete(id)
    } catch (error) {
         console.log(error);
        throw new Error("faild to create");
    }
    revalidatePath("/Dashboard/Users");
}
export const addproduct = async (formData) => {
    const { title, description, price, stoke,  color, size } =
        Object.fromEntries(formData);
    try {
        connectTOdb();
      
        const newproduct = new Product({
            title, description, price, stoke,  color, size 
        });
        await newproduct.save()
    } catch (error) {
         console.log(error);
        throw new Error("faild to create");
    }
    revalidatePath("/Dashboard/products");
    redirect("/Dashboard/products");
}
export const updateproduct = async (formData) => {
    const {id, title, description, price, stoke,  color, size } =
        Object.fromEntries(formData);
    try {
        connectTOdb();
        const updatefields = {
             title, description, price, stoke,  color, size
        }
        Object.keys(updatefields).forEach(
            
           ( key )=>( updatefields[key] === "" || undefined) && delete updatefields[key]
        );
        await Product.findByIdAndUpdate(id,updatefields);
    } catch (error) {
         console.log(error);
        throw new Error("faild to update");
    }
    revalidatePath("/Dashboard/products");
    redirect("/Dashboard/products");
}
export const deleteproduct = async (formData) => {
    const { id } =
        Object.fromEntries(formData);
    try {
        connectTOdb();
      
       
        await Product.findByIdAndDelete(id)
    } catch (error) {
         console.log(error);
        throw new Error("faild to create");
    }
    revalidatePath("/Dashboard/products");
}





export const authenticate = async (formData) => {
    const { username, password } = Object.fromEntries(formData);
    // console.log(formData);
    // try {
    //     await signIn("credentials", { username, password });
    //     console.log("Successfully logged in");
    // } catch (error) {
    //     console.log(error);
    //     throw new Error("Authentication failed");
    // }
           await signIn("credentials", { username, password });

};