import { PuzzleClient } from '$lib/puzzle/puzzle-client';

export async function load() {
	return {
		puzzle: await PuzzleClient.getRandom()
	};
}
