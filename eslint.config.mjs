import { FlatCompat } from "@eslint/eslintrc";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
    ...compat.extends("next/core-web-vitals"),
    {
        rules: {
            "@typescript-eslint/no-empty-object-type": "off",
            "@next/next/no-img-element": "off",
            "jsx-a11y/alt-text": "off",
        },
    },
    {
        ignores: [
            "node_modules/**",
            ".next/**",
            "dist/**",
            "build/**",
            "public/**",
            "app/generated/**",
        ],
    },
];
