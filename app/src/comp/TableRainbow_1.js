import React from 'react';
import { Table, Column, ButtonGroup, ButtonIcon, Badge, GlobalHeader } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCog,
    faPencilAlt,
    faStore,
    faPlus,
    faBell,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        name: 'Leandro Torres',
        company: 'nexxtway',
        email: 'leandro@gmail.com',
        status: 'verified',
        id: '1234qwerty',
    },
    {
        name: 'Jose Torres',
        company: 'Google',
        email: 'jose@gmail.com',
        status: 'verified',
        id: '1234asdfgh',
    },
    {
        name: 'Reinier',
        company: 'Nexxtway',
        email: 'reinier@gmail.com',
        status: 'verified',
        id: '1234zxcvbn',
    },
    {
        name: 'Sara',
        company: 'Nexxtway',
        email: 'sara@gmail.com',
        status: 'verified',
        id: '5678qwerty',
    },
    {
        name: 'Tahimi',
        company: 'nexxtway',
        email: 'tahimi@gmail.com',
        status: 'verified',
        id: '5678asdfgh',
    },
    {
        name: 'Leo',
        company: 'nexxtway',
        email: 'leo@gmail.com',
        status: 'verified',
        id: '5678zxcvbn',
    },
    {
        name: 'Tahimi Leon',
        company: 'nexxtway',
        email: 'leon@nexxtway.com',
        status: 'verified',
        id: '9012qwerty',
    },
];

const badgeStyles = { color: '#1de9b6' };

// const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;
const StatusBadge = () => <Badge label = "Something" variant="lightest" style={badgeStyles} />;

function TableRainbowOne() {
    
    return (
        <div className="rainbow-p-bottom_xx-large">
            <GlobalHeader className="rainbow-m-bottom_xx-large" src="images/user/user3.jpg">
                <ButtonGroup className="rainbow-m-right_medium">
                    <ButtonIcon variant="border-filled" disabled icon={<FontAwesomeIcon icon={faCog} />} />
                    <ButtonIcon
                        variant="border-filled"
                        disabled
                        icon={<FontAwesomeIcon icon={faEllipsisV} />}
                    />
                </ButtonGroup>
            </GlobalHeader>
            <Table
                id="table-7"
                keyField="id"
                showCheckboxColumn
                data={data}
                maxRowSelection={4}
                selectedRows={['1234qwerty', '1234zxcvbn']}
                onRowSelection={data => console.log(data)}
            >
                <Column header="Name" field="name" />
              
                <Column header="Company" field="company" />
                <Column header="Email" field="email" />
            </Table>
        </div>
    
    )
   
}

export default TableRainbowOne;

// <Column header="Status" field="status" component={StatusBadge} />

