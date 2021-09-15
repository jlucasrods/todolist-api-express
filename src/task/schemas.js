import moongose from "mongoose";

const TaskSchema = moongose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: false,
    }
});

export default moongose.model("Tasks", TaskSchema);