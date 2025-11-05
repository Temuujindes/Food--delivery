import { error } from "console";

export const signUp = async (req,res ) =>{
    try{
        const {body}=req;
        const{email,password}= body;
        const hashedPassword =await bcrypt.hashSync(password,10);
        console.log("old password,password");
        console.log("hash password",hashedPassword);
        const user= await User.create({
            email,
            password:hashedPassword

        });
         res.status(200).send({message:"success",data:user})

    } catch(error){}
         res.status(500).send({message:"error",error})
};