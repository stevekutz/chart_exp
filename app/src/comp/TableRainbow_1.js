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

const badgeStyles = { color: '#1de9b6' };
const StatusBadge = ({ value }) => <Badge label={value} variant="lightest" style={badgeStyles} />;
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

class TableRainbowOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: true,
        };
    }

    componentDidMount() {
        setTimeout(
            () =>
                this.setState({
                    isLoading: false,
                    data,
                }),
            2000,
        );
    }

    render() {
        const { data, isLoading } = this.state;
        return (
            <div className="rainbow-p-bottom_xx-large">

                <Table
                    id="table-5"
                    keyField="id"
                    showCheckboxColumn
                    isLoading={isLoading}
                    data={data}
                    onRowSelection={data => console.log(data)}
                >
                    <Column header="Name" field="name" />
                    <Column header="Status" field="status" component={StatusBadge} />
                    <Column header="Company" field="company" />
                    <Column header="Email" field="email" />
                </Table>
            </div>
        );
    }
}


export default TableRainbowOne;


