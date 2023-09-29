import { PropsWithChildren, useContext, useEffect, useState } from 'react';
import { UserSchema } from '../@types/user';
import { UserContext } from '../contexts/User.context';
import { UserService } from '../services/UserService/User.service';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const { getUsers } = UserService();

    const [user, setUser] = useState<UserSchema>({} as UserSchema);
    const [users, setUsers] = useState<UserSchema[]>([]);
    const [lockUser, setLockUser] = useState<boolean>(false);

    const fetchUsers = () => {
        getUsers().then((data: any) => {
            setUsers(data);
        });
    };



    return (
        <UserContext.Provider
            value={{ user, users, lockUser, setUser, fetchUsers }}>
            {children}
        </UserContext.Provider>
    );
};

export function useUser() {
    return useContext(UserContext);
}