import bcrypt from 'bcrypt';

export const hashPassword = async(password)=>{
    try{
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    }
    catch(e){
        console.log('(authHelper.js error) Error hashing password: ', e)
    }
}

export const comparePassword=async(password,hashedPassword)=>{
    try{
        return bcrypt.compare(password,hashedPassword);
    }catch(e){
        console.log('(authHelper.js error) Error comparing passwords: ', e)
    }
}