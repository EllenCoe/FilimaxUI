import React, { useEffect } from 'react';
import { Box, Button, Flex, Spacer, Stack, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUsers';
import { UsersDatatable } from './UserDatatable';

const NewUserButton: React.FC<any> = ({ action, disabled }) => {

    return (
        <>
            <Stack direction='row' spacing={4}>
                <Button
                   
                    backgroundColor={'state.petrobras-info-color'}
                    color={'brand.petrobras-white'}
                    borderRadius={0}
                    fontWeight={'400'}
                    h={50}
                    _hover={{ bg: 'state.petrobras-info-color' }}
                    onClick={action}
                    disabled={disabled}
                >
                    NOVA INTEGRAÇÃO
                </Button>
            </Stack>

        </>
    );
};

export const UsersList: React.FC = () => {

    const { fetchUsers, users } = useUser();
    const navigate = useNavigate();

    useEffect(() => { fetchUsers(); }, []);


    return (
        <>
            <VStack align={'stretch'} mx={'28'}>
                <Flex
                    role='integrations'
                    alignItems={'center'}
                    h={'var(--integration-header-size)'}
                    mt={'var(--integration-header-margin-top)'}
                >
                    <Text
                        alignSelf={'center'}
                        color={'black'}
                        fontWeight={'700'}
                        as='b'
                        fontSize='xl'
                    >
                        INTEGRAÇÕES ({users ? users.length : 0})
                    </Text>
                    <Spacer />

                </Flex >
                <Box bg={'white'} w={'100wh'} h={'var(--integration-datatable-size)'}>
                    <UsersDatatable users={users} />
                </Box>
            </VStack>
        </>
    );
};
