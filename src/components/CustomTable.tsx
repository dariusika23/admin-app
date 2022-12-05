import React from 'react';
import DataTable, { TableProps } from 'react-data-table-component';

// const checkBox = <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />;
const checkBox = <i className="fa-solid fa-check"></i>;

const sortIcon = <i className="fa-solid fa-chevron-down"></i>;
const selectedProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };

// export function CustomTable<T>(props: TableProps<T>): JSX.Element {

//     return (
//         <DataTable 
//             pagination
//             selectableRowsComponent = {checkBox}
//             selectableRowsComponentProps = {selectedProps}
//             sortIcon = {sortIcon}
//             dense
//             {...props}
//         />
//     )
// }


export const CustomTable = (props: any) => {
    return (
        <DataTable 
            pagination
            selectableRowsComponent = {checkBox}
            selectableRowsComponentProps = {selectedProps}
            sortIcon = {sortIcon}
            dense
            {...props}
        />
    )
}