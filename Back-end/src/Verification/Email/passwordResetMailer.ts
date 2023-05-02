import * as NodeMailer from 'nodemailer'

export const sentResetPasswordMail = async(email:string,otp:string) =>{
    try {
        const transporter = NodeMailer.createTransport({
            host:process.env.HOST,
            service:process.env.SERVICE,
            port:Number(process.env.EMAIL_PORT),
            secure:Boolean(process.env.SECURE),
            auth:{
                user:process.env.USER,
                pass:process.env.PASS
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