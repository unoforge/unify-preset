

const getDividerShortcuts = () => {
	const dividers = {
		"divider-custom":
			"relative before-absolute before-content-empty before-inset-x-0 flex items-center",
		"divider-custom-1": "before-h-px ",
		"divider-custom-2": "before-h-2px",
		"divider-custom-3": "before-h-3px",
		"divider-custom-4": "before-h-4px",
		"divider-custom-6": "before-h-6px",
		"divider-custom-8": "before-h-8px",
	};
	
	return [dividers];
};

export { getDividerShortcuts };
