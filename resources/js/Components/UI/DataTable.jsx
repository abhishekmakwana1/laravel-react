import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import styled, { StyleSheetManager } from 'styled-components';
import Input from '@/Components/UI/Input';
import { COMMON_ICONS } from '@/Constants';

const customStyles = {
    table: {
        style: {
            backgroundColor: 'transparent',
        },
    },
    headRow: {
        style: {
            backgroundColor: '#f8f9fa',
            borderBottom: '2px solid #dee2e6',
            minHeight: '52px',
        },
    },
    headCells: {
        style: {
            fontSize: '14px',
            fontWeight: '600',
            color: '#262626',
            paddingLeft: '16px',
            paddingRight: '16px',
        },
    },
    rows: {
        style: {
            minHeight: '72px',
            paddingTop: '8px',
            paddingBottom: '8px',
            '&:hover': {
                backgroundColor: '#f8f9fa',
                cursor: 'pointer',
            },
        },
    },
    cells: {
        style: {
            paddingLeft: '16px',
            paddingRight: '16px',
            fontSize: '14px',
            color: '#262626',
            lineHeight: '1.5',
        },
    },
    pagination: {
        style: {
            borderTop: '1px solid #dee2e6',
            minHeight: '56px',
        },
    },
};

export default function DataTableComponent({
    columns,
    data,
    pagination = true,
    searchable = true,
    onSearch,
    searchPlaceholder = 'Search...',
    progressPending = false,
    paginationServer = false,
    paginationTotalRows,
    onChangePage,
    onChangeRowsPerPage,
    onSort,
    searchValue = '',
    paginationDefaultPage = 1,
    paginationPerPage = 10,
}) {
    const [searchText, setSearchText] = useState(searchValue || '');
    const [filteredData, setFilteredData] = useState(Array.isArray(data) ? data : []);

    // Filter logic for client-side search
    useEffect(() => {
        const sourceData = Array.isArray(data) ? data : [];
        if (!paginationServer && searchable && searchText) {
            const lowerSearch = searchText.toLowerCase();
            const filtered = sourceData.filter((item) =>
                Object.values(item).some((val) => String(val).toLowerCase().includes(lowerSearch))
            );
            setFilteredData(filtered);
        } else {
            setFilteredData(sourceData);
        }
    }, [searchText, data, paginationServer, searchable]);

    // Debounce search ONLY if onSearch is provided (server-side search)
    useEffect(() => {
        if (onSearch) {
            const timer = setTimeout(() => {
                if (searchText !== (searchValue || '')) {
                    onSearch(searchText);
                }
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [searchText, onSearch, searchValue]);

    // Update internal state when prop changes
    useEffect(() => {
        setSearchText(searchValue || '');
    }, [searchValue]);

    const subHeaderComponent = searchable ? (
        <div className="d-flex align-items-center justify-content-end w-100 mb-2">
            <Input
                type="text"
                placeholder={searchPlaceholder}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                icon={COMMON_ICONS.SEARCH}
                iconPosition="left"
                containerClassName="mb-0"
                style={{ width: '280px' }}
            />
        </div>
    ) : null;

    return (
        <StyleSheetManager
            shouldForwardProp={(prop) =>
                ![
                    'sortActive',
                    'isDragging',
                    'headCell',
                    'center',
                    'minWidth',
                    'allowOverflow',
                    'button',
                    'noPadding',
                    'pointerOnHover',
                    'highlightOnHover',
                    'striped',
                    'responsive',
                ].includes(prop)
            }
        >
            <DataTable
                columns={columns}
                data={filteredData}
                pagination={pagination}
                paginationServer={paginationServer}
                paginationTotalRows={paginationServer ? paginationTotalRows : filteredData.length}
                paginationDefaultPage={paginationDefaultPage}
                paginationPerPage={paginationPerPage}
                onChangePage={onChangePage}
                onChangeRowsPerPage={onChangeRowsPerPage}
                onSort={onSort}
                customStyles={customStyles}
                progressPending={progressPending}
                highlightOnHover
                pointerOnHover
                responsive
                striped
                subHeader={searchable}
                subHeaderComponent={subHeaderComponent}
                paginationRowsPerPageOptions={[10, 25, 50, 100]}
                noDataComponent={<div className="p-4 text-center text-muted">No records found</div>}
            />
        </StyleSheetManager>
    );
}
