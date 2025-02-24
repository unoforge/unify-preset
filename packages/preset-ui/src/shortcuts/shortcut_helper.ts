export const getBackgroundOpacity = (opacity?: number) =>
	typeof opacity === "number" ? `/${opacity}` : "";

export const getRealOpacityValue = (opacity: number) => typeof opacity === 'number' ? `${opacity / 100}` : '1';
