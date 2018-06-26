

 
export const getSelectedBlog = (state : any) => {
    console.log(state)
    const blogId = state.crudBlog.crudBlog.blogUIState.index;
    const newState = Object.assign({}, state);
    const selectedBlog = newState.blogs[blogId]
    console.log(selectedBlog, blogId)
        // .filter(blog => blog._id == blogId)
    return selectedBlog;

}


export const getBlogAction = (state : any) => {
// console.log(state.crudBlog.crudBlog.blogUIState)
return state.crudBlog.crudBlog.blogUIState.uiState;
}


export const getBlogIndex = (state : any) => {
    console.log(state)
    return state.crudBlog.crudBlog.blogUIState.index;
    }