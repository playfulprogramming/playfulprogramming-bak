import { useMemo } from "preact/hooks";
import { useCSSPropertyValue } from "../../hooks/use-css-property-value";
import { RepeatBackground } from "../shared/repeat-background";

export const ForestBackground = () => {
	const forestBackgroundColor = useCSSPropertyValue("--ecos-700", "#366E47");

	const svg = useMemo(() => {
		return `<svg class="nofill" data-repeated="true" xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 3022 1920' ><g><path fill='${forestBackgroundColor}' fill-rule='evenodd' d='M0 0v1342l8 5c1 2 10 6 20 9 15 5 20 13 41 69 14 35 29 64 31 68 32 60-76 427-76 427h26c27-81 52-191 73-285 19-82 35-150 45-174 15-27 75-97 81-93 3 2 12-4 21-13 8-9 20-17 27-18 6-1 17-8 23-15 9-11 11-12 11-3 0 6 5 10 12 10a539 539 0 0 1 121 257c18 107 21 121 28 118 8-2 8-56 0-201-6-100-6-100 8-125 13-23 28-32 32-20 1 3 10 9 20 13 23 11 25 25 30 169 4 101 60 258 60 258h20s-53-175-58-241c-7-88-2-182 7-198 7-15 12-18 22-14 7 2 18 8 23 13 10 8 11 8 11-1 0-8 11-16 33-24 22 8 33 16 33 24 0 9 1 9 11 1 5-5 16-11 23-13 10-4 15-1 22 14 9 16 9 28 3 111-8 96 17 410 45 410 10 10-26-151-19-340 5-144 7-158 30-169 10-4 19-10 20-13 4-12 19-3 32 20 14 25 14 25 8 125-8 145 20 385 28 388 22 3-18-198 0-305 12-71 34-129 77-201 23-40 36-56 44-56 7 0 12-4 12-10 0-9 2-8 11 3 6 7 17 14 23 15 7 1 19 9 27 18 9 9 18 15 21 13 6-4 66 66 81 93 10 24 26 92 45 174 21 94 46 204 73 285h26s-108-367-76-427c2-4 18-33 31-68 21-56 26-64 41-69 10-3 19-7 20-9l15-9c7-4 12-13 12-22 1-19 8-27 14-17 3 5 8 7 13 4 12-8 35-9 35-1 0 4 2 4 7-1 9-9 16-9 16 1 0 5 4 8 8 8 27-1 45 3 44 9-1 3 9 9 22 12 42 11 66 46 94 137 26 87 169 427 169 427l35 4s-119-279-158-395c-29-88-32-103-30-137 2-39 15-58 33-51 7 3 8-1 6-15-3-18 0-19 19-4 14 12 35 17 35 8 0-5 5-11 11-15 9-6 13-5 19 2 4 5 12 8 18 6 5-1 11 0 12 3s15 9 31 13c29 7 30 8 31 31 18 241 217 558 217 558h20s-224-376-201-573c8-13 21-11 16 3-2 5 1 8 6 8 4 0 8-2 8-5 0-7 29-19 36-15 3 2 8-2 12-9 6-8 12-11 21-8 9 2 14 1 14-5 0-5 1-6 7 0 13 13 22 7 26-16 2-16 6-22 11-20 4 1 14-1 21-5 8-4 16-7 19-6 2 0 6-3 8-8 1-5 7-9 11-9h3c4 8 10 9 26 8 12-1 18 0 14 3-10 7 1 17 22 20 8 1 15 6 17 13 1 6 7 17 14 24 10 12 14 13 21 7 6-5 10-5 15 2 5 8 17 15 33 20 23 8 35 17 35 25 0 9 1 9 11 1 5-5 16-11 23-13 10-4 15-1 22 14 9 16 21 175 21 307 0 127-30 169-11 169 49 0 13-421 49-464 6-7 19-10 20-13 4-12 19-3 32 20 14 25 11 76 11 131 0 70-11 277 23 394h19s-33-224-14-338c12-72 31-108 74-180 23-40 36-56 44-56 7 0 12-4 12-10 0-9 2-8 11 3 6 7 17 14 23 15 7 1 19 9 27 18 9 9 18 15 21 13 6-4 66 66 81 93 10 24 26 92 45 174 21 94 46 204 73 285h26s-108-367-76-427c2-4 18-33 31-68 21-56 26-64 41-69 10-3 19-7 20-9l8-5V0H0Zm397 1334c-5 2-3 7 6 20 9 14 13 16 17 10 8-12 6-17-3-13-5 2-9-1-10-8s-6-11-10-9Zm58 18c0 4-4 5-8 3-5-1-11 4-15 15-7 15-5 21 13 57l21 41v-57c0-32-2-59-5-61-4-2-6-1-6 2Zm-368 15c-12 7-12 7 4 51l16 44v-48c0-27-1-50-4-51-2-1-10 1-16 4Zm916-33c5 2 3 7-6 20-9 14-13 16-17 10-8-12-6-17 3-13 5 2 9-1 10-8s6-11 10-9Zm-58 18c0 4 4 5 8 3 5-1 11 4 15 15 7 15 5 21-13 57l-21 41s3-47 0-69c-4-29 2-47 5-49 4-2 6-1 6 2Zm368 15c12 7 12 7-4 51l-16 44v-48c0-27 1-50 4-51 2-1 10 1 16 4Zm1306-13c9-13 11-18 6-20-4-2-9 2-10 9s-5 10-10 8c-9-4-11 1-3 13 4 6 8 4 17-10Zm-44 1c-4 2-8 1-8-3 0-3-2-4-6-2-3 2-5 29-5 61v57l21-41c18-36 20-42 13-57-4-11-10-16-15-15Zm356 63c16-44 16-44 4-51-6-3-14-5-16-4-3 1-4 24-4 51v48l16-44Z' clip-rule='evenodd'></path></g></svg>`;
	}, [forestBackgroundColor]);

	return <RepeatBackground aspectRatio={"3022/1920"} svg={svg} />;
};
