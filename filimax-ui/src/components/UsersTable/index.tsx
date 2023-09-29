import { Text, useTheme } from '@chakra-ui/react';
import { ReactNode } from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';

type DatatableProps<T> = {
    columns: TableColumn<T>[],
    data: T[],
    maxHeight: string | undefined,
    noDataComponent?: ReactNode
}

export const FilimaxDatatable: React.FC<DatatableProps<any>> = (
    {
        columns = [],
        data = [],
        maxHeight = '300px',
        noDataComponent
    }
) => {
    const theme = useTheme();

    const customStyles = {
        table: {
            style: { height: `calc(${maxHeight} - var(--scrollbar-size))` }
        },
        headRow: {
            style: {
                height: '3.75rem',
                paddingTop: 'var(--chakra-sizes-3)',
                paddingBottom: 'var(--chakra-sizes-3)'
            }
        },
        headCells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
                fontWeight: '700',
                fontSize: '20px',

            }
        },
        rows: {
            style: {
                height: '-webkit-fill-available',
                minHeight: '4.06rem'
            }
        },
        cells: {
            style: {
                heigh: 'max-content',
                fontSize: '14px',

            }
        }
    };

    const paginationOptions = {
        rowsPerPageText: 'Integrações por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const defaultNoDataComponent = () => {
        return (
            <Text fontSize='xl'>Não há dados a serem exibidos!</Text>
        );
    };

    return (
        <DataTable
            columns={columns}
            data={data}
            fixedHeader
            fixedHeaderScrollHeight={maxHeight}
            pagination
            responsive
            striped
            customStyles={customStyles}
            paginationComponentOptions={paginationOptions}
            noDataComponent={noDataComponent ?? defaultNoDataComponent()}
        />
    );
};