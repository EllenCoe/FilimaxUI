import { ReactNode, useEffect, useState } from 'react';
import { DatatableConfig } from './datatable.config';
import { UserSchema } from '../../../@types/user';
import { FilimaxDatatable } from '../../../components/UsersTable';

type UsersDatatableProps = {
    users: UserSchema[]
}

export const UsersDatatable: React.FC<UsersDatatableProps> = ({ users }) => {
    const { columns } = DatatableConfig();
    const [noDataComponent, setNoDataComponent] = useState<ReactNode>('');

    useEffect(() => {
        if (users?.length <= 0) {
            setNoDataComponent(null);
        }
    }, [users]);

    return (
        <>
            <FilimaxDatatable
                columns={columns}
                data={[]}
                noDataComponent={noDataComponent}
                maxHeight={'var(--integration-datatable-size)'} />
        </>
    );
};