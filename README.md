# SRIT College Website

## Departments Page – CSV Upload Feature

The **Departments** page (`/departments`) includes a section that lets any user upload a `.csv` file to display department-specific data (students, achievements, placements, and any other columns) directly on the page.

### How it works

1. Navigate to the **Departments** page (`/departments`).
2. Scroll down past the department cards to find the **"Upload Department CSV"** section.
3. Click **Choose File** (or drag-and-drop a `.csv` file onto the upload zone).
4. The data is parsed in the browser, validated, and rendered immediately as department cards.
5. The parsed data is persisted in **`localStorage`** so it survives page refreshes. Use the **Remove** button to clear it.

### Expected CSV format

The CSV must contain a header row followed by one or more data rows.

```csv
department,students,achievements,placements
CSE,750+,15 national awards,96%
ECE,600+,10 awards,88%
MEC,400+,5 awards,80%
```

| Column | Required | Description |
|---|---|---|
| `department` | ✅ Yes (or `name` as a fallback) | Name that identifies the department |
| `students` | No | Student count or description |
| `achievements` | No | Notable achievements |
| `placements` | No | Placement statistics |
| *(any other column)* | No | Will be rendered automatically as a labelled field |

**Rules:**
- The file must have a `.csv` extension.
- The file must not be empty.
- At least one column named `department` (or `name`) is required.
- Rows with an empty `department` value are silently skipped.
- Column headers are normalised to lowercase with underscores (e.g. `Faculty Count` → `faculty_count`).

### Validation & error messages

| Condition | Message shown |
|---|---|
| Wrong file type | *"Invalid file type. Please upload a .csv file."* |
| Empty file | *"The uploaded file is empty."* |
| Missing required column | *"CSV must contain a 'department' column …"* |
| No valid rows | *"No valid department rows found …"* |

### Manual testing steps

1. Start the dev server: `npm run dev`
2. Open `http://localhost:5173/departments` in a browser.
3. Scroll to the **Upload Department CSV** section.
4. Upload a valid CSV (see format above) and confirm the department cards appear.
5. Refresh the page — the data should still be visible (localStorage persistence).
6. Click **Remove** — the cards should disappear and the upload zone should reappear.
7. Try uploading a `.txt` file — an error banner should appear.
8. Try uploading a CSV missing the `department` column — an error should appear.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
