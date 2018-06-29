
import * as fromRoot from "../../../store/app-state";
export interface BlogUIState{
    id:string;
    index:number
    uiState:string
}
export const BLOG_UI_INITIAL_STATE:BlogUIState = {
    id:'',
    index:undefined,
    uiState:'CREATING'
}

export interface CrudBlogState  {
    blogUIState:BlogUIState,
    crudState:any
}


export const CRUD_BLOG_INITIAL_STATE: CrudBlogState = {
    blogUIState:BLOG_UI_INITIAL_STATE,
    crudState:undefined
}

export interface AppState extends fromRoot.AppState{
    crudBlog:CrudBlogState
}

