exports.updateService = async (Request, DataModel) => {
    try {
        const { _id } = Request.params;
        const updatedData = Request.body;
        const file = Request.files;

        // Assuming you have fields named 'image' and 'resume' in your model
        if (file) {
            if (file['image']) {
                updatedData.image = file['image'][0].filename;
            }
            if (file['resume']) {
                updatedData.resume = file['resume'][0].filename;
            }
        }

        const data = await DataModel.findByIdAndUpdate(_id, updatedData, { new: true });

        if (!data) {
            return { status: "fail", data: "Data not found" };
        }

        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error };
    }
};
