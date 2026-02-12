# Global Utilities Structure

## 📁 Directory Structure

```
resources/js/
├── Constants/
│   └── index.js              # Global constants (labels, icons, gradients, etc.)
├── Utils/
│   ├── index.js              # General utility functions
│   └── tableHelpers.js       # DataTable helper functions
└── Pages/
    └── Admin/
        └── Users/
            ├── constants.js  # Module-specific constants
            ├── tableConfig.jsx  # Module-specific table config
            ├── Index.jsx
            ├── Create.jsx
            └── Edit.jsx
```

## 🌐 Global Files

### 1. **Constants/index.js** - Global Constants
[View File](file:///c:/Users/abhishek.makwana/Downloads/9.2.0/9.2.0/bootstrap/able-pro-bootstrap-master/able-pro-bootstrap-master/laravel-able-pro/resources/js/Constants/index.js)

**Contains:**
- `COMMON_LABELS` - Common UI labels (Home, Save, Cancel, etc.)
- `COMMON_PLACEHOLDERS` - Input placeholders
- `COMMON_ICONS` - Tabler icon classes
- `COMMON_GRADIENTS` - Gradient styles for cards
- `DATE_FORMATS` - Date/time formatting options
- `AVATAR_COLORS` - Avatar color palette
- `COMMON_ROUTES` - Common route names
- `TABLE_DEFAULTS` - DataTable default settings
- `VALIDATION_MESSAGES` - Form validation messages

**Usage:**
```javascript
import { COMMON_LABELS, COMMON_ICONS, COMMON_GRADIENTS } from '@/Constants';

<button>{COMMON_LABELS.SAVE}</button>
<i className={COMMON_ICONS.EDIT}></i>
<div style={{ background: COMMON_GRADIENTS.PURPLE }}></div>
```

### 2. **Utils/index.js** - General Utilities
[View File](file:///c:/Users/abhishek.makwana/Downloads/9.2.0/9.2.0/bootstrap/able-pro-bootstrap-master/able-pro-bootstrap-master/laravel-able-pro/resources/js/Utils/index.js)

**Contains:**
- **Avatar Utilities:** `getAvatarColor()`, `getInitials()`
- **Date/Time Utilities:** `formatDate()`, `formatTime()`, `formatDateTime()`, `getRelativeTime()`
- **String Utilities:** `capitalize()`, `toTitleCase()`, `truncate()`
- **Number Utilities:** `formatNumber()`, `formatCurrency()`
- **Validation Utilities:** `isValidEmail()`, `isValidPhone()`
- **Array Utilities:** `removeDuplicates()`, `sortByKey()`
- **Object Utilities:** `deepClone()`, `isEmptyObject()`

**Usage:**
```javascript
import { getInitials, formatDate, formatCurrency } from '@/Utils';

const initials = getInitials('John Doe'); // 'JD'
const date = formatDate(new Date(), { month: 'short', day: 'numeric' });
const price = formatCurrency(1234.56); // '$1,234.56'
```

### 3. **Utils/tableHelpers.js** - DataTable Helpers
[View File](file:///c:/Users/abhishek.makwana/Downloads/9.2.0/9.2.0/bootstrap/able-pro-bootstrap-master/able-pro-bootstrap-master/laravel-able-pro/resources/js/Utils/tableHelpers.js)

**Contains:**
- **Column Builders:**
  - `createSerialColumn()` - Serial number column
  - `createUserColumn()` - User column with avatar
  - `createStatusColumn()` - Status badge column
  - `createDateColumn()` - Date/time column
  - `createActionsColumn()` - Edit/delete actions column

- **Event Handlers:**
  - `createPageChangeHandler()` - Pagination handler
  - `createPerRowsChangeHandler()` - Rows per page handler
  - `createSearchHandler()` - Search handler

**Usage:**
```javascript
import { 
    createSerialColumn, 
    createUserColumn, 
    createActionsColumn 
} from '@/Utils/tableHelpers';

const columns = [
    createSerialColumn(users),
    createUserColumn({ nameField: 'name', emailField: 'email' }),
    createActionsColumn({ editRoute: 'users.edit', deleteRoute: 'users.destroy' }),
];
```

## 📦 Module-Specific Files

### User Management Module

#### **constants.js** - Module Constants
Only contains User Management specific constants. Imports common constants from `@/Constants`.

```javascript
import { COMMON_ROUTES } from '@/Constants';

export const PAGE_TITLES = {
    INDEX: 'User Management',
    CREATE: 'Create User',
};
```

#### **tableConfig.jsx** - Table Configuration
Uses global table helpers to create column configuration.

```javascript
import { createUserColumn, createActionsColumn } from '@/Utils/tableHelpers';

export const getTableColumns = (users) => [
    createUserColumn({ nameField: 'name', emailField: 'email' }),
    createActionsColumn({ editRoute: 'users.edit' }),
];
```

## 🚀 How to Use for New Modules

### Example: Creating a "Products" Module

1. **Create module directory:**
```
Pages/Admin/Products/
├── constants.js
├── tableConfig.jsx
├── Index.jsx
├── Create.jsx
└── Edit.jsx
```

2. **Create constants.js:**
```javascript
import { COMMON_ROUTES } from '@/Constants';

export const PAGE_TITLES = {
    INDEX: 'Product Management',
    CREATE: 'Create Product',
};

export const ROUTES = {
    ...COMMON_ROUTES,
    PRODUCTS_INDEX: 'products.index',
    PRODUCTS_CREATE: 'products.create',
};
```

3. **Create tableConfig.jsx:**
```javascript
import { 
    createSerialColumn, 
    createDateColumn, 
    createActionsColumn 
} from '@/Utils/tableHelpers';

export const getTableColumns = (products) => [
    createSerialColumn(products),
    {
        name: 'Product Name',
        selector: row => row.name,
        sortable: true,
    },
    createDateColumn({ field: 'created_at', label: 'Created' }),
    createActionsColumn({ 
        editRoute: 'products.edit', 
        deleteRoute: 'products.destroy' 
    }),
];
```

4. **Create Index.jsx:**
```javascript
import { COMMON_LABELS, COMMON_ICONS } from '@/Constants';
import { createSearchHandler } from '@/Utils/tableHelpers';
import { PAGE_TITLES, ROUTES } from './constants';
import { getTableColumns } from './tableConfig';

export default function Index({ products }) {
    const columns = getTableColumns(products);
    // Use global utilities and constants
}
```

## ✅ Benefits

| Benefit | Description |
|---------|-------------|
| **Reusability** | Use same utilities across all modules |
| **Consistency** | Same look and feel everywhere |
| **Maintainability** | Update once, applies everywhere |
| **Speed** | Create new modules faster |
| **Quality** | Well-tested, documented utilities |

## 📝 Import Paths

- **Global Constants:** `@/Constants`
- **Global Utils:** `@/Utils`
- **Table Helpers:** `@/Utils/tableHelpers`
- **Module Constants:** `./constants` (relative)
- **Module Config:** `./tableConfig` (relative)

---

**Created:** 2026-02-10  
**Status:** ✅ Production Ready
