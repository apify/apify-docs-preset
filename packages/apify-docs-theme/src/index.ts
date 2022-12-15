export default function theme(context, opts) {
    return {
        name: "@apify/docs-theme",
        getThemePath() {
            return '../dist/theme';
        },
        getTypeScriptThemePath() {
            return '../src/theme';
        },
        async contentLoaded({ content, actions }) {
            const { setGlobalData } = actions;
            setGlobalData({
                opts,
            });
        },
    };
}
