module.exports = {
    "plugins": ["node"],
    "extends": ["airbnb-base", "plugin:node/recommended"],
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "node/no-unsupported-features": ["error", {
            "version": 7,
            "ignores": []
        }],
        "linebreak-style": ["error", "windows"],
        "no-console": 0,
        "no-restricted-syntax": 0,
        "no-underscore-dangle": 0,
        "arrow-body-style": 0
    }
}