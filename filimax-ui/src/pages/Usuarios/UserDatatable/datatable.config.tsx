import { Button, Center, HStack, useTheme } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';
import { TableColumn } from 'react-data-table-component';
import { UserSchema } from '../../../@types/user';
import { useNavigate } from 'react-router-dom';


const IntegrationActionButton: React.FC<PropsWithChildren<any>> = ({
	children,
	action,
	disabled = false
}) => {
	return (
		<Button
			bg={'rgba(255, 255, 255, 0)'}
			borderRadius={'50%'}
			p={0}
			m={0}
			onClick={action}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};

export const DatatableConfig = () => {
	const navigate = useNavigate();

	const theme = useTheme();

	const getColumnWidth = (percent: number): string => {
		return `calc((var(--datatable-full-width) - var(--datatable-actions-column-width))*${percent}/100)`;
	};


	const columns: TableColumn<UserSchema>[] = [
		{
			name: 'Nome',
			selector: (row: UserSchema) => row.name,
			sortable: true
		},
		{
			name: 'Descrição',
			maxWidth: getColumnWidth(30),
			selector: (row: UserSchema) => row.description ?? ' - ',
			sortable: true
		},
		{
			name: 'Data da criação',
			selector: (row: UserSchema) => row.createdAt ?? ' - ',
			sortable: true
		},
		{
			name: 'Autor',
			selector: (row: UserSchema) => row.author,
			sortable: true
		},
		{
			name: 'Tags',
			sortable: false,
			cell: (row: UserSchema) => {
				const tags = row.tags

				return (<Center
					display={'flex'}
					flexWrap={'wrap'}
					justifyContent={'start'}
					height={'auto'}
					padding={'4px 0px'}

				>




				</Center>);
			}
		},
		{
			name: 'Status da simulação',
			sortable: true,

			cell: (row: UserSchema) => {

				return (<Center
					justifyContent={'start'}
					width={'9.25rem'}
					height={'1.50rem'}
					paddingRight={'0.3rem'}
					paddingLeft={'0.3rem'}
					borderRadius={'0.15rem'}

					color={'white'}
					fontWeight={'700'}
					fontSize={'14px'}
				></Center>);
			}
		},
		{
			name: 'Ações',
			width: 'var(--datatable-actions-column-width)',
			center: true,
			cell: (row: UserSchema) =>
				<HStack>
					<IntegrationActionButton action={(ee: any) => navigate(`/integrations/simulation?integration=${row.id}`, { replace: false })}>

					</IntegrationActionButton>
					<IntegrationActionButton action={(e: any) => navigate(`/integrations/settings?integration=${row.id}`, { replace: false })}>

					</IntegrationActionButton>

				</HStack>
		}
	];

	return { columns };
};