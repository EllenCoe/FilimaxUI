import { createContext } from 'react';
import { UserSchema } from '../@types/user';

type UserState = {
    user: UserSchema,
    users: UserSchema[],
    lockUser: boolean,
    setUser: (integration: UserSchema) => void,
    fetchUsers: () => void
}

export const UserContext = createContext<UserState>({} as UserState);
