

export interface BlogUIState{
    id:string;
    index:number
}
export const BLOG_UI_INITIAL_STATE:BlogUIState = {
    id:'',
    index:undefined
}

export interface CrudBlogState {
    blogUIState:BlogUIState,
    crudState:any
}



export const CRUD_BLOG_INITIAL_STATE: CrudBlogState = {
    blogUIState:BLOG_UI_INITIAL_STATE,
    crudState:undefined
}