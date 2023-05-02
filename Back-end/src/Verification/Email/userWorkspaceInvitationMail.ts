import * as NodeMailer from 'nodemailer'
import encrypt from '../../encryption/crypto';

const {encryptEmail} =  encrypt()

export const sentMail = async(email:any,workspaceId:string) =>{

  
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
        for(let i= 0 ; i < email.length; i++){
          const encryptedEmail = await encryptEmail(email[i].email)
          await transporter.sendMail({
            from:process.env.USER,
            to:email[i].email,
            subject:"Swarm service confirmation mail",
            html:`
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="UTF-8">
                <title>Workspace Invitation</title>
                <style>
                  /* Styling for the invitation */
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                    background-color: #f2f2f2;
                  }
                  .invitation {
                    max-width: 500px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                  }
                  h1 {
                    font-size: 24px;
                    margin-bottom: 10px;
                  }
                  p {
                    font-size: 16px;
                    line-height: 1.5;
                    margin-bottom: 20px;
                  }
                  .button {
                    display: inline-block;
                    margin-right: 10px;
                    padding: 10px 20px;
                    border-radius: 5px;
                    color: #fff;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                  }
                  .button.accept {
                    background-color: #008000;
                  }
                  .button.accept:hover {
                    background-color: #006600;
                  }
                  .button.decline {
                    background-color: #cc0000;
                  }
                  .button.decline:hover {
                    background-color: #990000;
                  }
                </style>
              </head>
              <body>
                <div class="invitation">
                  <h1>Workspace Invitation</h1>
                  <p>You have been invited to join our workspace. To accept or decline the invitation, please click the appropriate button below.</p>
                  <div>
                  <a class="button accept" href="${process.env.BASE_URL}/verifyworkspaceinvitation/${workspaceId}/${encryptedEmail}/accepted">Accept</a>
                  <a class="button decline" href="http://localhost:3000/workspace/verifyinvitationmail/${workspaceId}/${encryptedEmail}/declined">Decline</a>
                  </div>
                </div>
              </body>
              </html>
              
              `
            })
          }
        
        return "Email sent successfully"
        
    } catch (error) {
      console.log(error);
      
        throw{error}
    }
}