exports.createService = async (Request, DataModel) => {
    try {
        let PostBody = Request.body;

        // Check if there is a file uploaded
        if (Request.files) {
            const files = Request.files;

            // Assuming you have fields named 'image' and 'resume' in your model
            if (files['image']) {
                PostBody.image = files['image'][0].filename; // Save the filename to the database
            }
            if (files['resume']) {
                PostBody.resume = files['resume'][0].filename; // Save the filename to the database
            }
        }

        let data = await DataModel.create(PostBody);

        return { status: "success", data: data };
    } catch (error) {
        return { status: "fail", data: error };
    }
};
