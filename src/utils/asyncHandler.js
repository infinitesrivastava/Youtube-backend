// using Promises method


const asynHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(re, res, next)).catch((error) => next (error))

    }
}


export {asyncHandler}




// using try catch method
/*
const asyncHandler = (fn) => async(req, res, next)=> {
    try {
        await fn(req, res, next)
        
    } catch (error) {
        res.status(error.code || 500).json({
            success: false,
            message: error.message
        })
    }
}*/