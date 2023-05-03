import * as NodeMailer from 'nodemailer';


export const sentMail = async(email:string,link:string) =>{
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
            subject:"Swarm service confirmation mail",
            text:`Click on the below link to confirm ${link}`
        })
        
        return "Email sent successfully"
        
    } catch (error) {
        throw{error}
    }
}