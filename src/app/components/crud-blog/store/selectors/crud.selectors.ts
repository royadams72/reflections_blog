 
export const getSelectedBlog = (state : any) => {
    let blogId = state.crudBlog.crudBlog.id;
    let selectedBlog = state.blogs
        .filter(blog => blog._id == blogId)
    console.log(selectedBlog);
    return selectedBlog;

}





