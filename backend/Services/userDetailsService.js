exports.userDetailsService= async (Request,DataModel) => {
    try {
        let data = await DataModel.aggregate([{$match: {username:Request.headers['username']}}])
        return  {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error.toString()}
    }
}
