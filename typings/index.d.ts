declare module "@drango/tag-functions" {
	export function createTag<T>(fn: (string: string) => T): {
		(string: string): T;
		(string: ReadonlyArray<string>, ...keys: ReadonlyArray<unknown>): T;
	};
}
