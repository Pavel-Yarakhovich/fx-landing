import { Tr, Td, Button, useClipboard} from '@chakra-ui/react';

function CopyableTableRow({user}) {
    const { hasCopied, onCopy } = useClipboard(
        `Имя: ${user.name};
        Email: ${user.email};
        Номер счёта: ${user.count};
        Выбранные роботы: ${user.robots.join(', ')}`
    );

    return (
        <Tr>
            <Td>{user.name}</Td>
            <Td>{user.email}</Td>
            <Td>{user.count}</Td>
            <Td>{user.robots.join(', ')}</Td>
            <Td>
                <Button onClick={onCopy} ml={2}>
                    {hasCopied ? "Copied" : "Copy"}
                </Button>
            </Td>
        </Tr>
    );
}

export default CopyableTableRow;