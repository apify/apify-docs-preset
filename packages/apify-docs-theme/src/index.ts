export default function theme(context, opts) {
    return {
        name: "@apify/docs-theme",
        getThemePath() {
            return '../dist/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
    };
}
