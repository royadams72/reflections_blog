

 
export const getSelectedBlog = (state : any) => {
    console.log(state)
    let blogId = state.crudBlog.crudBlog.blogUIState.id;
    let selectedBlog = state.blogs
        .filter(blog => blog._id == blogId)
    return selectedBlog;

}


export const getBlogAction = (state : any) => {
console.log(state)
return state.crudBlog.crudBlog.blogUIState.uiState;
}


