import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
            unique:true,
        },
        image:{
            type:String,
            default:'https://imgs.search.brave.com/ch6cal6W5ssrfGx3Ulcdz43EPNO9R6ZAJW_K-w1Do68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cnlyb2IuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzAy/L0hvdy10by1QaWNr/LXRoZS1SaWdodC1J/bWFnZXMtdG8tVXNl/LW9uLVlvdXItQmxv/Zy1TdG9jay1JbWFn/ZS1FeGFtcGxlLnBu/Zw',
        },
        category:{
            type:String,
            default:'uncategorized',
        },
        slug:{
            type:String,
            required:true,
            unique:true,
        },
    },{timestamps:true}
);

const Post = mongoose.model('Post', postSchema);

export default Post;


