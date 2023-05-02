import React, { useEffect } from 'react'
import workspaceApi from '../../Api/workspaceApi'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setDetails } from '../../Redux/Slices/userSlice'

function WorkspaceInvitationMain() {
    const navigate = useNavigate()
    const {workspaceId,encEmail,choice} = useParams()
    const dispatch = useDispatch()

    const {verifyWorkspaceInvitationMail} = workspaceApi()
    const doWorkspaceVerification = async(workspaceId,encEmail,choice)=>{
        try {
            const response = await verifyWorkspaceInvitationMail(workspaceId,encEmail,choice)
            if(response){
              
                const {userId,name,email,accessToken} = response
                dispatch(setDetails({userId,name,email,accessToken}))
                navigate('/home')
            }
        } catch (error) {
            if(error.msg === "user is not registered"){
                navigate('/register')
            }
        }
    }
    useEffect(()=>{
        doWorkspaceVerification(workspaceId,encEmail,choice)
    },[])
  return (
    <div>WorkspaceInvitationMain</div>
  )
}

export default WorkspaceInvitationMain