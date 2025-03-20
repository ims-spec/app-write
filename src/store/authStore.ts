import { create } from "zustand";
import { account, ID} from "../appWrite";
import { type Models } from 'appwrite';


import { IAuthState, IAuthInputs } from "../types";




export const useStore = create<IAuthState>((set) => ({
  accountSession: null,
  accountUser: null,
  role: null,
  loading: false,
  error: null,
    createUser: async ({ email, password }):IAuthInputs => {
    set({ loading: true });

        try {
            
        }
    const newUser:Models.User<any> = await account.create(ID.unique(), email, password);
    set({ accountUser: newUser });
  },
  login: async ({ email, password }):IAuthInputs => {
    set({ loading: true });

    const session = await account.createEmailPasswordSession(
        email, 
        password
      );
      
    set({
      accountSession: session,
    //   user: session?.user,
    //   role: session?.user.app_metadata?.role,
      loading: false,
    });
  },  
  checkAuth: async () => {
    set({ loading: true });

    const sessionUser = await account.get()
    set({      
      accountUser: sessionUser,      
      loading: false,
    });
  },
}));
