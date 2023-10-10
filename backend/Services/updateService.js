exports.updateService = async (Request, DataModel) => {
    try {
        const { _id } = Request.params;
        const updatedData = Request.body;

        const data = await DataModel.findByIdAndUpdate(_id, updatedData, { new: true });

        if (!data) {
            return { status: "fail", data: "Data not found" };
        }

        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error };
    }
};

