 
export const getSelectedBlog = (state : any) => {
    let blogId = state.crudBlog.crudBlog.id;
    let selectedBlog = state.blogs
        // if (blogId == '') {
        //     return selectedBlog = [];
        // }
        .filter(blog => blog._id == blogId)
    return selectedBlog;

}





