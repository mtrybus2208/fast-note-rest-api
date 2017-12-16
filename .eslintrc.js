module.exports = {
    "plugins": ["node"],
    "extends": ["airbnb-base", "plugin:node/recommended"],
    "rules": {
        "node/exports-style": ["error", "module.exports"],
        "node/no-unsupported-features": ["error", {
            "version": 7,
            "ignores": []
        }],
        "no-console" : 0
    }
}