

export interface userRegInterface{
    fname:string,
    lname:string,
    email:string,
    mobile:string,
    password:string
}

export interface userLoginInterface{
    email ?: string,
    mobile ?: string,
    password : string
}

export interface jwtPayloadInterface{
    user:string,
}

export interface emailVerifyInterface {
    email:string,
    link:string
}

export interface linkInterface{
    id:string
}

export interface userGoogleRegInterface{
    fname:string,
    email:string
}

export interface userGoogleLoginInterface{
    email:string
}

export interface updatePasswordDetails{
    password:string,
    cnfPassword:string,
    email:string
}