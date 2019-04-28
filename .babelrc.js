module.exports = {
	presets: [["@babel/preset-env", { targets: { node: "current" }, modules: false }], "@babel/preset-react"],
	plugins: ["@babel/plugin-transform-spread"]
};
