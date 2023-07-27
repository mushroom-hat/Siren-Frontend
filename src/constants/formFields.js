const loginFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username",
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]

const registerFields=[
    {
        labelText:"Username",
        labelFor:"username",
        id:"username",
        name:"username",
        type:"text",
        autoComplete:"username",
        isRequired:true,
        placeholder:"Username"   
    },
    {
        labelText:"Email Address",
        labelFor:"email-address",
        id:"email-address",
        name:"email-address",
        type:"text",
        autoComplete:"email-address",
        isRequired:true,
        placeholder:"email-address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    },
    {
        labelText:"Confirm Password",
        labelFor:"confirm-password",
        id:"confirm-password",
        name:"confirm-password",
        type:"password",
        autoComplete:"confirm-password",
        isRequired:true,
        placeholder:"Confirm Password"   
    },

    // {
    //     labelText:"Access Code",
    //     labelFor:"access-code",
    //     id:"access-code",
    //     name:"access-code",
    //     type:"text",
    //     autoComplete:"access-code",
    //     isRequired:true,
    //     placeholder:"Access Code"   
    // }
]

export {loginFields,registerFields}
