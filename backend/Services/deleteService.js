exports.deleteService = async (Request, DataModel) => {
    try {
        const { _id } = Request.params;

        const data = await DataModel.findByIdAndDelete(_id);

        if (!data) {
            return { status: "fail", data: "Data not found" };
        }

        return { status: "success", data: "Data deleted successfully" };
    } catch (error) {
        return { status: "fail", data: error };
    }
};
