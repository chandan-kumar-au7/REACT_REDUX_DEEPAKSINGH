// const { bindActionCreators } = require("redux")

const initialState = {
    isAuthenticated: false,
    user : {
        
    }

}



const userReducerHelper = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_USER":
            {
                console.log("we are in create user action",action.payload)
                return {
                    ...state,
                    isAuthenticated: true,
                    user: action.payload

                }

            }
            
        case "UPDATE_USER":
            return {
                //do som elogic

            }
        case "DELETE_USER":
            return {
                ///dpo some logice

            }
        default:
            return state
    }
    
}

export default userReducerHelper