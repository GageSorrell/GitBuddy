"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eslint_plugin_1 = __importDefault(require("@stylistic/eslint-plugin"));
const js_1 = __importDefault(require("@eslint/js"));
const typescript_eslint_1 = __importDefault(require("typescript-eslint"));
const eslintrc_1 = require("@eslint/eslintrc");
const Compat = new eslintrc_1.FlatCompat({ baseDirectory: __dirname });
exports.default = typescript_eslint_1.default.config(js_1.default.configs.recommended, ...typescript_eslint_1.default.configs.strict, ...Compat.config({
    env: {
        "react-native/react-native": true
    },
    plugins: [
        "react",
        "react-native"
    ]
}), eslint_plugin_1.default.configs['recommended-flat'], {
    plugins: {
        "@stylistic": eslint_plugin_1.default
    },
    rules: {
        "@stylistic/array-bracket-spacing": ["error", "always"],
        "@stylistic/arrow-parens": ["error", "always"],
        "@stylistic/arrow-spacing": ["error", { after: true, before: true }],
        "@stylistic/brace-style": ["error", "allman", { allowSingleLine: false }],
        "@stylistic/comma-dangle": ["error", "never"],
        "@stylistic/comma-spacing": ["error", { after: true, before: false }],
        "@stylistic/dot-location": ["error", "property"],
        "@stylistic/eol-last": ["error", "always"],
        "@stylistic/function-call-spacing": ["error", "never"],
        "@stylistic/indent": ["error", 4],
        "@stylistic/jsx-curly-spacing": ["error", { when: "always" }],
        "@stylistic/jsx-max-props-per-line": [1, { maximum: 1 }],
        "@stylistic/max-len": [
            "error",
            {
                code: 110,
                /* Ignore the end of import statements, because the path might be long.  */
                ignorePattern: "\\{[^,]*\\bfrom\\b\\s*\"[^\"]*\";"
            }
        ],
        "@stylistic/no-trailing-spaces": ["error", { ignoreComments: true }],
        "@stylistic/semi": ["error", "always"],
        "@typescript-eslint/array-type": ["error", { default: "generic" }],
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                custom: {
                    match: true,
                    regex: "^(F|I|P|T|S|A|Y|C|K|N)[A-Z][a-zA-Z0-9]+$|^T|^U|^K|^Y|^A$"
                },
                format: ["PascalCase"],
                selector: "typeLike"
            },
            {
                format: ["PascalCase", "camelCase"],
                leadingUnderscore: "allow",
                selector: "parameter"
            },
            {
                format: ["PascalCase", "camelCase"],
                leadingUnderscore: "allow",
                selector: "variableLike"
            }
        ],
        "@typescript-eslint/no-unused-vars": [
            "error",
            {
                argsIgnorePattern: "^_",
                varsIgnorePattern: "^_$"
            }
        ],
        "@typescript-eslint/typedef": [
            "error",
            {
                arrayDestructuring: false,
                arrowParameter: true,
                memberVariableDeclaration: true,
                objectDestructuring: false,
                parameter: true,
                propertyDeclaration: true,
                variableDeclaration: true,
                variableDeclarationIgnoreFunction: true
            }
        ],
        "brace-style": [
            "error",
            "allman",
            { allowSingleLine: true }
        ],
        /* Enforce naming convention for variables to be in PascalCase */
        curly: ["error", "all"],
        // "header/header":
        // [
        //     2,
        //     "block",
        //     [
        //         { pattern: " File:    .*" },
        //         { pattern: " \\* Author:    .*"},
        //         { pattern: " \\* Copyright: \\(c\\) .*? WishfulThinking LLC." },
        //         { pattern: " \\*            All Rights Reserved." },
        //         { pattern: " " }
        //     ],
        //     2
        // ],
        // // "local-rules/component-comment": [ "error" ],
        // "local-rules/custom-logger": [ "error" ],
        // "local-rules/custom-router-functions": [ "error" ],
        // "local-rules/no-old-compose-functions": [ "error" ],
        "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
        "quote-props": ["error", "as-needed"],
        quotes: ["error", "double"],
        "react-hooks/exhaustive-deps": "error",
        "react-hooks/rules-of-hooks": "error",
        "react-native/no-color-literals": 2,
        "react-native/no-inline-styles": 2,
        "react-native/no-raw-text": ["error"],
        "react-native/no-single-element-style-arrays": 2,
        "react/jsx-sort-props": [
            "error",
            {
                ignoreCase: false
            }
        ],
        "sort-imports": [
            "error",
            {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: [
                    "none",
                    "all",
                    "multiple",
                    "single"
                ]
            }
        ],
        "sort-keys": [
            "error",
            "asc",
            {
                allowLineSeparatedGroups: true,
                caseSensitive: true,
                minKeys: 2,
                natural: false
            }
        ]
    },
});
