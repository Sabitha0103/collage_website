# SRIT College Website

## Department Pages – CSV Upload Feature

CSV upload is available inside each department page (`/departments/:slug`) in both the **Program** and **Students** sections.

### How it works

1. Navigate to any department page (example: `/departments/cse`).
2. Open either **Program** or **Students** from the department sidebar.
3. Use the **Upload Department CSV** option to upload a `.csv` file.
4. Data is parsed in the browser and filtered so each department page only shows matching rows.
5. Parsed data is persisted in **`localStorage`** so it survives page refreshes. Use **Remove** to clear it.

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
| `department` | ✅ Yes | Code, slug, name, or full department name that identifies the department |
| `students` | No | Student count or description |
| `achievements` | No | Notable achievements |
| `placements` | No | Placement statistics |
| *(any other column)* | No | Will be rendered automatically as a labelled field |

**Rules:**
- The file must have a `.csv` extension.
- The file must not be empty.
- A `department` column is required.
- Rows with an empty `department` value are silently skipped.
- Column headers are normalised to lowercase with underscores (e.g. `Faculty Count` → `faculty_count`).

### Validation & error messages

| Condition | Message shown |
|---|---|
| Wrong file type | *"Invalid file type. Please upload a .csv file."* |
| Empty file | *"The uploaded file is empty."* |
| Missing required column | *"CSV must contain a 'department' column …"* |
| No valid rows | *"No valid department rows found …"* |
| No row for current department | *"No rows found for this department …"* |

### Manual testing steps

1. Start the dev server: `npm run dev`
2. Open `http://localhost:5173/departments/cse` in a browser.
3. Click **Program** and verify the **Upload Department CSV** option is visible.
4. Upload a valid CSV (see format above) with a `department` row for `CSE` and verify only CSE row data appears.
5. Click **Students** and verify the same upload option and filtered data are visible there as well.
6. Navigate to another department (`/departments/ece`) and verify the CSE row is not shown (no-row message appears).
7. Refresh the page — uploaded data should still be available (localStorage persistence).
8. Click **Remove** — uploaded data should clear.
9. Try uploading a `.txt` file — an error banner should appear.
10. Try uploading a CSV missing `department` column — an error should appear.

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
