import React from 'react';
import DataTable, { TableProps } from 'react-data-table-component';

const selectProps = { indeterminate: (isIndeterminate: boolean) => isIndeterminate };

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
    return (
        <DataTable
            selectableRowsComponentProps={selectProps}
            dense
            {...props}
        />
    );
}

export default DataTableBase;