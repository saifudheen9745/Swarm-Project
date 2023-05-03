import * as NodeMailer from 'nodemailer'

export const sentResetPasswordMail = async(email:string,otp:string) =>{
    try {
        const transporter = NodeMailer.createTransport({
            host:"smtp.gmail.com",
            service:"gmail",
            port:587,
            secure:true,
            auth:{
                user:"swarm.ofcl@gmail.com",
                pass:"bykqhoqttloceqbd"
            }
        })

        await transporter.sendMail({
            from:process.env.USER,
            to:email,
            subject:"Swarm service reset password mail",
            text:`Your password reset Otp is ${otp}`
        })
        
        return "Email sent successfully"
        
    } catch (error) {
        throw{error}
    }
}